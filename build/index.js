import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import chokidar from "chokidar";
import { projects } from "../src/data/index.js";

const softwares = Object.keys(projects).sort((a, b) => a.localeCompare(b));
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
   Helpers
---------------------------- */
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function copyFolder(src, dest) {
  if (!fs.existsSync(src)) return;
  createDir(dest);
  fs.readdirSync(src).forEach((item) => {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    if (fs.lstatSync(srcItem).isDirectory()) copyFolder(srcItem, destItem);
    else fs.copyFileSync(srcItem, destItem);
  });
}

function runCommand(cmd, cwd) {
  const [command, ...args] = cmd.split(" ");
  const proc = spawn(command, args, { cwd, stdio: "inherit", shell: true });
  return new Promise((resolve, reject) => {
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`Command failed: ${cmd}`))
    );
  });
}

/* ----------------------------
   PWA helpers
---------------------------- */
function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

function createManifestForSoftware(software, distPath) {
  const manifest = {
    name: `${capitalize(software)} App`,
    short_name: software,
    start_url: ".",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/assets/images/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/images/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  fs.writeFileSync(
    path.join(distPath, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`📄 Added manifest.json → ${distPath}/manifest.json`);
}

/* ----------------------------
   Shared file sync
---------------------------- */
function syncSharedFiles(software) {
  const softwarePath = path.join(rootDir, software);
  const srcPath = path.join(softwarePath, "src");

  // Re-copy updated shared folders
  const foldersToCopy = [
    "api", "assets", "components", "data",
    "firebase", "functions", "layouts",
    "pages", "router", "service", "store"
  ];
  foldersToCopy.forEach((folder) =>
    copyFolder(path.join("./src", folder), path.join(srcPath, folder))
  );

  // Re-copy interface files
  const softwareInterfacePath = path.join("./src/interface", software);
  const targetInterfacePath = path.join(srcPath, "interface", software);
  if (fs.existsSync(softwareInterfacePath)) {
    createDir(targetInterfacePath);
    fs.readdirSync(softwareInterfacePath).forEach((file) => {
      if (file.endsWith(".vue")) {
        fs.copyFileSync(
          path.join(softwareInterfacePath, file),
          path.join(targetInterfacePath, file)
        );
      }
    });
  }

  console.log(`♻️ Synced shared files into ${software}/src`);
}

/* ----------------------------
   Build task
---------------------------- */
function createBuildTask(software, isDev = false) {
  return async () => {
    const softwarePath = path.join(rootDir, software);
    const srcPath = path.join(softwarePath, "src");
    const distPath = path.join(softwarePath, "dist");
    const mergedDistPath = path.join(distRoot, software);

    createDir(srcPath);

    // Copy base files
    fs.writeFileSync(path.join(srcPath, "App.vue"), appVueContent);
    fs.writeFileSync(
      path.join(srcPath, "main.js"),
      `// Auto-injected for software: ${software}\n` + mainJsContent
    );
    fs.writeFileSync(path.join(softwarePath, "index.html"), indexHtmlContent);

    // env.production + env.development
    let envContent = envContentBase.replace(/^VITE_PROJECT=.*$/m, "").trim();
    envContent += `\nVITE_PROJECT=${software}\n`;
    fs.writeFileSync(path.join(softwarePath, ".env.production"), envContent);
    fs.writeFileSync(path.join(softwarePath, ".env.development"), envContent);

    // Copy shared folders + interface files
    syncSharedFiles(software);

    // Copy configs + public
    if (fs.existsSync(templatePublic))
      copyFolder(templatePublic, path.join(softwarePath, "public"));
    if (fs.existsSync(viteConfigTemplate))
      fs.copyFileSync(
        viteConfigTemplate,
        path.join(softwarePath, "vite.config.js")
      );
    if (fs.existsSync(tailwindConfigTemplate))
      fs.copyFileSync(
        tailwindConfigTemplate,
        path.join(softwarePath, "tailwind.config.js")
      );
    if (fs.existsSync(postcssConfigTemplate))
      fs.copyFileSync(
        postcssConfigTemplate,
        path.join(softwarePath, "postcss.config.js")
      );

    console.log(`✅ Setup complete: ${software}`);

    if (isDev) {
      const port = 3000 + softwares.indexOf(software);
      console.log(
        `🚀 Starting dev server for ${software} on http://localhost:${port}`
      );
      spawn("npx", ["vite", "--port", port], {
        cwd: softwarePath,
        stdio: "inherit",
        shell: true,
      });
      return;
    }

    // Production build
    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, { recursive: true, force: true });
    }

    console.log(`📦 Building ${software}...`);
    await runCommand("npx vite build", softwarePath);
    console.log(`🚀 Finished building ${software}`);

    if (fs.existsSync(mergedDistPath)) {
      fs.rmSync(mergedDistPath, { recursive: true, force: true });
    }
    copyFolder(distPath, mergedDistPath);
    console.log(`📂 Copied ${software}/dist → dist/${software}`);

    if (fs.existsSync(swFile)) {
      fs.copyFileSync(swFile, path.join(mergedDistPath, "sw.js"));
      console.log(`🛠️ Added sw.js → dist/${software}/sw.js`);
    }

    createManifestForSoftware(software, mergedDistPath);
  };
}

/* ----------------------------
   Concurrency runner
---------------------------- */
async function runWithConcurrencyLimit(tasks, limit) {
  let nextTaskIndex = 0;
  const results = new Array(tasks.length);

  async function worker() {
    while (nextTaskIndex < tasks.length) {
      const currentIndex = nextTaskIndex++;
      const task = tasks[currentIndex];
      try {
        results[currentIndex] = { status: "fulfilled", value: await task() };
      } catch (err) {
        results[currentIndex] = { status: "rejected", reason: err };
        console.error(`❌ Error in task ${currentIndex + 1}:`, err.message);
      }
    }
  }

  const workers = Array(Math.min(limit, tasks.length))
    .fill(null)
    .map(() => worker());

  await Promise.all(workers);
  return results;
}

/* ----------------------------
   Main runner
---------------------------- */
async function setupAndBuildAll(isDev = false) {
  if (!isDev) {
    if (fs.existsSync(distRoot))
      fs.rmSync(distRoot, { recursive: true, force: true });
    createDir(distRoot);
  }

  const tasks = softwares.map((sw) => createBuildTask(sw, isDev));
  if (isDev) {
    console.log(`🚀 Starting dev servers for ${tasks.length} projects...`);
    tasks.forEach((task) => task());
  } else {
    console.log(
      `🚀 Starting builds with concurrency = 5 (${tasks.length} total)...`
    );
    await runWithConcurrencyLimit(tasks, 5);
    console.log("\n🎉 All software builds finished and merged into /dist.");
  }
}

/* ----------------------------
   Watcher
---------------------------- */
function startWatcher(isDev) {
  chokidar
    .watch(["./src/**/*", "./public/**/*", "./index.html"], {
      ignoreInitial: true,
    })
    .on("all", async (event, filePath) => {
      console.log(`\n👀 Change detected (${event}): ${filePath}`);
      if (isDev) {
        softwares.forEach((sw) => syncSharedFiles(sw));
      } else {
        await setupAndBuildAll(false); // full rebuild for prod
      }
    });
}

/* ----------------------------
   Execute
---------------------------- */
const isDev = process.argv.includes("--dev");
const isWatch = process.argv.includes("--watch");

setupAndBuildAll(isDev).catch((err) => console.error(err));

if (isWatch) {
  startWatcher(isDev);
  console.log("👀 Watching for changes...");
}
