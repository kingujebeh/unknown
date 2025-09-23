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
    if (fs.existsSync(source)) copyFolder(source, target);
  });

  // Data
  const dataFile = path.join("./src/data", `${software}.js`);
  const targetDataDir = path.join(srcPath, "data");
  if (fs.existsSync(dataFile)) {
    if (!fs.existsSync(targetDataDir))
      fs.mkdirSync(targetDataDir, { recursive: true });
    fs.copyFileSync(dataFile, path.join(targetDataDir, "index.js"));
  }

  // Interface files/folders
  const softwareInterfacePath = path.join("./src/interface", software);
  if (fs.existsSync(softwareInterfacePath)) {
    copyFolder(softwareInterfacePath, path.join(srcPath, "interface"));
  }

  /* ----------------------------
     Router -> routes.js
  ---------------------------- */
  const routesFile = path.resolve("./src/router/routes/index.js");
  const routerIndexFile = path.resolve("./src/router/index.js");

  const targetRouterDir = path.join(srcPath, "router");
  if (!fs.existsSync(targetRouterDir))
    fs.mkdirSync(targetRouterDir, { recursive: true });

  // Copy router/index.js
  if (fs.existsSync(routerIndexFile)) {
    fs.copyFileSync(routerIndexFile, path.join(targetRouterDir, "index.js"));
  }

  // Copy & generate guards
  const guardsFile = path.resolve("./src/router/guards/index.js");
  if (fs.existsSync(guardsFile)) {
    // Import the guards factory
    const mod = await import(pathToFileURL(guardsFile));
    const getGuards = mod.default;

    if (typeof getGuards === "function") {
      const { beforeEach, afterEach } = getGuards(software);

      // Serialize functions to JS
      const serializeFn = (fn) => fn.toString();

      const guardFileContent = `// Auto-generated guards for ${software}
import { useStore } from "@/store";
      
export const beforeEach = ${serializeFn(beforeEach)};
export const afterEach = ${serializeFn(afterEach)};
`;

      fs.writeFileSync(
        path.join(targetRouterDir, "guards.js"),
        guardFileContent,
        "utf-8"
      );
    } else {
      console.warn("❌ guards.js default export is not a function");
    }
  }

  // Generate routes.js as before
  if (fs.existsSync(routesFile)) {
    try {
      const mod = await import(pathToFileURL(routesFile));
      const getRoutes = mod.default;
      if (typeof getRoutes !== "function")
        throw new Error(
          "router/routes/index.js default export is not a function"
        );

      const routes = await getRoutes(software);

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

      const fileContent = `export default ${serialize(routes)};\n`;
      fs.writeFileSync(
        path.join(targetRouterDir, "routes.js"),
        fileContent,
        "utf-8"
      );
    } catch (err) {
      console.error("❌ Failed to generate routes:", err);
    }
  }
}
