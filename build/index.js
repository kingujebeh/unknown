import fs from "fs";
import path from "path";
import chokidar from "chokidar";
import { getProjects } from "../src/data/index.js";
import { createDir } from "./helpers.js";
import { syncSharedFiles } from "./share.js";
import { createBuildTask } from "./build.js";

const softwares = Object.keys(getProjects()).sort((a, b) => a.localeCompare(b));
const rootDir = path.resolve("./projects");
const distRoot = path.resolve("./dist");
const swFile = path.resolve("./src/service/sw.js");

// Template paths
const templateMain = path.resolve("./src/main.js");
const templateApp = path.resolve("./src/App.vue");
const templateEnv = path.resolve("./.env.production");
const templateIndex = path.resolve("./index.html");
const templatePublic = path.resolve("./public");
const viteConfigTemplate = path.resolve("./vite.config.js");
const tailwindConfigTemplate = path.resolve("./tailwind.config.js");
const postcssConfigTemplate = path.resolve("./postcss.config.js");

// Read templates
const mainJsContent = fs.readFileSync(templateMain, "utf-8");
const appVueContent = fs.readFileSync(templateApp, "utf-8");
const indexHtmlContent = fs.readFileSync(templateIndex, "utf-8");
const envContentBase = fs.existsSync(templateEnv)
  ? fs.readFileSync(templateEnv, "utf-8")
  : "";

/* ----------------------------
   Concurrency runner
---------------------------- */
async function runWithConcurrencyLimit(tasks, limit) {
  let nextTaskIndex = 0;
  const results = new Array(tasks.length);
  async function worker() {
    while (nextTaskIndex < tasks.length) {
      const i = nextTaskIndex++;
      try {
        results[i] = { status: "fulfilled", value: await tasks[i]() };
      } catch (err) {
        results[i] = { status: "rejected", reason: err };
        console.error(err);
      }
    }
  }
  await Promise.all(Array(Math.min(limit, tasks.length)).fill(0).map(worker));
  return results;
}

/* ----------------------------
   Dev/Prod file sync
---------------------------- */
function syncFileToProject(filePath) {
  const absFile = path.resolve(filePath);

  const relativeSrc = path.relative(path.resolve("./src"), absFile);
  const relativePublic = path.relative(path.resolve("./public"), absFile);
  const relativeRoot = path.relative(path.resolve("./"), absFile);

  const isSrc = !relativeSrc.startsWith("..");
  const isPublic = !relativePublic.startsWith("..");
  const isRootFile = !isSrc && !isPublic && relativeRoot === "index.html";

  if (!isSrc && !isPublic && !isRootFile) return;

  const parts = isSrc ? relativeSrc.split(path.sep) : [];
  const isInterfaceFile = parts[0] === "interface";
  const targetSoftwares = isInterfaceFile ? [parts[1]] : softwares;

  targetSoftwares.forEach((sw) => {
    const softwarePath = path.join(rootDir, sw);

    if (isSrc) {
      const target = path.join(softwarePath, "src", relativeSrc);
      createDir(path.dirname(target));
      fs.copyFileSync(absFile, target);
    }

    if (isPublic) {
      const target = path.join(softwarePath, "public", relativePublic);
      createDir(path.dirname(target));
      fs.copyFileSync(absFile, target);
    }

    if (isRootFile) {
      const target = path.join(softwarePath, "index.html");
      fs.copyFileSync(absFile, target);
    }

    // Trigger HMR by touching main.js
    const projectMain = path.join(softwarePath, "src", "main.js");
    if (fs.existsSync(projectMain))
      fs.utimesSync(projectMain, new Date(), new Date());

    console.log(`💫 Synced and triggered HMR for ${sw} → ${filePath}`);
  });
}

/* ----------------------------
   Watcher
---------------------------- */
function startWatcher() {
  const srcPath = path.resolve("./src");
  const publicPath = path.resolve("./public");
  const indexFile = path.resolve("./index.html");

  chokidar
    .watch([srcPath, publicPath, indexFile], { ignoreInitial: true })
    .on("all", async (event, filePath) => {
      console.log(`\n👀 Change detected (${event}): ${filePath}`);
      syncFileToProject(filePath);
    });

  console.log("👀 Watching for changes in parent folder...");
}

/* ----------------------------
   Execute
---------------------------- */
const isDev = process.argv.includes("--dev");
const isWatch = process.argv.includes("--watch");

/* ----------------------------
   Main runner
---------------------------- */
async function setupAndBuildAll(isDev = false) {
  if (!isDev) {
    if (fs.existsSync(distRoot))
      fs.rmSync(distRoot, { recursive: true, force: true });
    createDir(distRoot);
  } else {
    // Sync shared/interface files once for dev
    softwares.forEach((sw) => syncSharedFiles(sw, rootDir));
  }

  const tasks = softwares.map((sw) =>
    createBuildTask(
      sw,
      isDev,
      rootDir,
      distRoot,
      {
        appVueContent,
        mainJsContent,
        indexHtmlContent,
        envContentBase,
        syncSharedFiles,
        templatePublic,
        viteConfigTemplate,
        tailwindConfigTemplate,
        postcssConfigTemplate,
      },
      { softwares, swFile }
    )
  );

  if (isDev) {
    console.log(`🚀 Starting dev servers for ${tasks.length} projects...`);
    tasks.forEach((task) => task());
  } else {
    console.log(`🚀 Starting production builds with concurrency=5...`);
    await runWithConcurrencyLimit(tasks, 5);
    console.log("🎉 All software builds finished.");
  }
}

setupAndBuildAll(isDev).catch(console.error);

if (isWatch) startWatcher();
