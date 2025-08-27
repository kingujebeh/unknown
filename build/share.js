import fs from "fs";
import path from "path";
import { copyFolder, createDir } from "./helpers.js";

/* ----------------------------
   Shared / interface sync
---------------------------- */
export function syncSharedFiles(software, rootDir) {
  const softwarePath = path.join(rootDir, software);
  const srcPath = path.join(softwarePath, "src");

  // Shared folders
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

  // Interface files only to their software
  const softwareInterfacePath = path.join("./src/interface", software);
  if (fs.existsSync(softwareInterfacePath)) {
    const targetInterfacePath = path.join(srcPath, "interface", software);
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
}
