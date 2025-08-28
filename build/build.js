import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import {
  copyFolder,
  createDir,
  runCommand,
  createManifestForSoftware,
} from "./helpers.js";

/* ----------------------------
   Build task
---------------------------- */
export function createBuildTask(
  software,
  isDev = false,
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
) {
  return async () => {
    const softwarePath = path.join(rootDir, software);
    const srcPath = path.join(softwarePath, "src");
    const distPath = path.join(softwarePath, "dist");
    const mergedDistPath = path.join(distRoot, software);

    createDir(srcPath);

    // Base files
    fs.writeFileSync(path.join(srcPath, "App.vue"), appVueContent);
    fs.writeFileSync(
      path.join(srcPath, "main.js"),
      `// Auto-injected for software: ${software}\n` + mainJsContent
    );
    fs.writeFileSync(path.join(softwarePath, "index.html"), indexHtmlContent);

    // Env
    let envContent = envContentBase.replace(/^VITE_PROJECT=.*$/m, "").trim();
    envContent += `\nVITE_PROJECT=${software}\n`;
    fs.writeFileSync(path.join(softwarePath, ".env.production"), envContent);
    fs.writeFileSync(path.join(softwarePath, ".env.development"), envContent);
    fs.writeFileSync(path.join(softwarePath, ".env.staging"), envContent);

    // Sync shared/interface files
    syncSharedFiles(software, rootDir);

    // Configs + public
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

    if (isDev) {
      const port = 3000 + softwares.indexOf(software);
      spawn("npx", ["vite", "--port", port], {
        cwd: softwarePath,
        stdio: "inherit",
        shell: true,
      });
      console.log(
        `🚀 Dev server started for ${software} at http://localhost:${port}`
      );
      return;
    }

    // Production build
    if (fs.existsSync(distPath))
      fs.rmSync(distPath, { recursive: true, force: true });
    await runCommand("npx vite build", softwarePath);
    if (fs.existsSync(mergedDistPath))
      fs.rmSync(mergedDistPath, { recursive: true, force: true });
    copyFolder(distPath, mergedDistPath);

    if (fs.existsSync(swFile))
      fs.copyFileSync(swFile, path.join(mergedDistPath, "sw.js"));
    createManifestForSoftware(software, mergedDistPath);
  };
}
