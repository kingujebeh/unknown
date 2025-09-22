import fs from "fs";
import path from "path";
import { copyFolder } from "./helpers.js";

/* ----------------------------
   Shared / interface sync
---------------------------- */
export function syncSharedFiles(software, rootDir) {
  const softwarePath = path.join(rootDir, software);
  const srcPath = path.join(softwarePath, "src");

  // Shared folders (recursive copy for each)
  const foldersToCopy = [
    "api",
    "assets",
    "components",
    // "data",
    "functions",
    "layouts",
    "pages",
    "router",
    "service",
    "store",
  ];

  foldersToCopy.forEach((folder) => {
    const source = path.join("./src", folder);
    const target = path.join(srcPath, folder);
    if (fs.existsSync(source)) {
      copyFolder(source, target); // recursive copy
    }
  });

  // Copy software-specific data file as index.js
  const dataFile = path.join("./src/data", `${software}.js`);
  const targetDataDir = path.join(srcPath, "data");
  if (fs.existsSync(dataFile)) {
    if (!fs.existsSync(targetDataDir)) {
      fs.mkdirSync(targetDataDir, { recursive: true });
    }
    const targetDataFile = path.join(targetDataDir, "index.js");
    fs.copyFileSync(dataFile, targetDataFile);
  }

  // Interface files/folders (recursive copy for each software)
  const softwareInterfacePath = path.join("./src/interface", software);
  if (fs.existsSync(softwareInterfacePath)) {
    const targetInterfacePath = path.join(srcPath, "interface", software);
    copyFolder(softwareInterfacePath, targetInterfacePath); // recursive copy
  }
}
