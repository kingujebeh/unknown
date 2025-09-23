import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { copyFolder } from "./helpers.js";

/* ----------------------------
   Shared / interface sync
---------------------------- */
export async function syncSharedFiles(software, rootDir) {
  const softwarePath = path.join(rootDir, software);
  const srcPath = path.join(softwarePath, "src");

  // Shared folders (recursive copy for each)
  const foldersToCopy = [
    "api",
    "assets",
    "components",
    "functions",
    "layouts",
    "pages",
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

  // Data
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
    const targetInterfacePath = path.join(srcPath, "interface");
    copyFolder(softwareInterfacePath, targetInterfacePath);
  }

  /* ----------------------------
     Router -> routes.js
  ---------------------------- */
  const routesFile = path.resolve("./src/router/routes/index.js");
  const routerIndexFile = path.resolve("./src/router/index.js");

  const targetRouterDir = path.join(srcPath, "router");
  if (!fs.existsSync(targetRouterDir)) {
    fs.mkdirSync(targetRouterDir, { recursive: true });
  }

  // Copy router/index.js
  if (fs.existsSync(routerIndexFile)) {
    fs.copyFileSync(routerIndexFile, path.join(targetRouterDir, "index.js"));
  }

  if (fs.existsSync(routesFile)) {
    try {
      const mod = await import(pathToFileURL(routesFile));
      const getRoutes = mod.default;

      if (typeof getRoutes !== "function") {
        throw new Error(
          "router/routes/index.js default export is not a function"
        );
      }

      const routes = await getRoutes(software);

      // Serializer: print valid JS instead of JSON
      const serialize = (obj, indent = 2) => {
        if (typeof obj === "string") return JSON.stringify(obj);
        if (typeof obj === "function") return obj.toString();
        if (Array.isArray(obj)) {
          return `[\n${obj
            .map((item) => " ".repeat(indent) + serialize(item, indent + 2))
            .join(",\n")}\n${" ".repeat(indent - 2)}]`;
        }
        if (obj && typeof obj === "object") {
          return `{\n${Object.entries(obj)
            .map(
              ([k, v]) =>
                `${" ".repeat(indent)}${k}: ${serialize(v, indent + 2)}`
            )
            .join(",\n")}\n${" ".repeat(indent - 2)}}`;
        }
        return String(obj);
      };

      // ✅ Only output array, not wrapped again
      const fileContent = `export default ${serialize(routes)};\n`;

      const routesJsPath = path.join(targetRouterDir, "routes.js");

      // Overwrite once
      fs.writeFileSync(routesJsPath, fileContent, "utf-8");
    } catch (err) {
      console.error("❌ Failed to generate routes:", err);
    }
  }
}
