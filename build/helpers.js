import fs from "fs";
import path from "path";
import { spawn } from "child_process";

/* ----------------------------
   Helpers
---------------------------- */
export function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

export function copyFolder(src, dest) {
  if (!fs.existsSync(src)) return;
  createDir(dest);
  fs.readdirSync(src).forEach((item) => {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    if (fs.lstatSync(srcItem).isDirectory()) copyFolder(srcItem, destItem);
    else fs.copyFileSync(srcItem, destItem);
  });
}

export function runCommand(cmd, cwd) {
  const [command, ...args] = cmd.split(" ");
  const proc = spawn(command, args, { cwd, stdio: "inherit", shell: true });
  return new Promise((resolve, reject) => {
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`Command failed: ${cmd}`))
    );
  });
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export function createManifestForSoftware(software, distPath) {
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
}
