import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { projects } from "../src/data/index.js";

const softwares = Object.keys(projects).sort((a, b) => a.localeCompare(b));
const rootDir = path.resolve("./projects");
const distRoot = path.resolve("./dist"); // merged dist output
const swFile = path.resolve("./src/service/sw.js"); // service worker

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

// Helpers
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
  return new Promise((resolve, reject) => {
    const [command, ...args] = cmd.split(" ");
    const proc = spawn(command, args, { cwd, stdio: "inherit", shell: true });
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`Command failed: ${cmd}`))
    );
  });
}

// --- PWA helpers ---
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
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

// --- Build task ---
function createBuildTask(software) {
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

    // .env.production
    let envContent = envContentBase.replace(/^VITE_PROJECT=.*$/m, "").trim();
    envContent += `\nVITE_PROJECT=${software}\n`;
    fs.writeFileSync(path.join(softwarePath, ".env.production"), envContent);

    // ✅ .env.development
    let devEnvContent = envContentBase.replace(/^VITE_PROJECT=.*$/m, "").trim();
    devEnvContent += `\nVITE_PROJECT=${software}\n`;
    fs.writeFileSync(path.join(softwarePath, ".env.development"), devEnvContent);

    // Copy common folders
    const foldersToCopy = [
      "api",
      "assets",
      "components",
      "data",
      "firebase",
      "functions",
      "layouts",
      "pages",
      "router",
      "service",
      "store",
    ];
    foldersToCopy.forEach((folder) =>
      copyFolder(path.join("./src", folder), path.join(srcPath, folder))
    );

    // ✅ Copy software-specific interface folder
    const softwareInterfacePath = path.join("./src/interface", software);
    const targetInterfacePath = path.join(srcPath, "interface", software);

    if (fs.existsSync(softwareInterfacePath)) {
      createDir(targetInterfacePath);
      fs.readdirSync(softwareInterfacePath).forEach((file) => {
        const fullPath = path.join(softwareInterfacePath, file);
        if (fs.lstatSync(fullPath).isFile() && file.endsWith(".vue")) {
          fs.copyFileSync(fullPath, path.join(targetInterfacePath, file));
        }
      });
      console.log(
        `📂 Added .vue files → ${software}/src/interface/${software}`
      );
    }

    // public + configs
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

    // Clean old dist
    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, { recursive: true, force: true });
    }

    // Run vite build
    console.log(`📦 Building ${software}...`);
    await runCommand("npx vite build", softwarePath);
    console.log(`🚀 Finished building ${software}`);

    // Copy to merged dist
    if (fs.existsSync(mergedDistPath)) {
      fs.rmSync(mergedDistPath, { recursive: true, force: true });
    }
    copyFolder(distPath, mergedDistPath);
    console.log(`📂 Copied ${software}/dist → dist/${software}`);

    // Add sw.js
    if (fs.existsSync(swFile)) {
      fs.copyFileSync(swFile, path.join(mergedDistPath, "sw.js"));
      console.log(`🛠️ Added sw.js → dist/${software}/sw.js`);
    }

    // Add manifest.json
    createManifestForSoftware(software, mergedDistPath);
  };
}

// --- Concurrency runner ---
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

// --- Main runner ---
async function setupAndBuildAll() {
  if (fs.existsSync(distRoot)) {
    fs.rmSync(distRoot, { recursive: true, force: true });
  }
  createDir(distRoot);

  const tasks = softwares.map((sw) => createBuildTask(sw));
  console.log(
    `🚀 Starting builds with concurrency = 5 (${tasks.length} total)...`
  );

  await runWithConcurrencyLimit(tasks, 5);

  console.log("\n🎉 All software builds finished and merged into /dist.");
}

// Execute
setupAndBuildAll().catch((err) => console.error(err));
