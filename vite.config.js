import fs from "fs";
import path from "path";

// vite.config.js
import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const softwares = [
  "kingdom",
  "community",
  "business",
  "store",
  "shop",
  "pro",
  "me",
];

// function copyServiceWorker(software) {
//   const src = path.resolve(__dirname, "src/service/sw.js");
//   const dest = path.resolve(__dirname, `dist/${software}/sw.js`);

//   fs.copyFileSync(src, dest);
// }

function createServiceWorker(software) {
  const manifestPath = `dist/${software}/manifest.json`;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

  // Collect all built files
  const assets = Object.values(manifest).flatMap((entry) => {
    const files = [];
    if (entry.file) files.push("/" + entry.file);
    if (entry.css) files.push(...entry.css.map((f) => "/" + f));
    return files;
  });

  // Read sw template from src/service/sw.js
  const swTemplatePath = path.resolve(__dirname, "src/service/sw.js");
  const swTemplate = fs.readFileSync(swTemplatePath, "utf-8");

  const swFinal = swTemplate.replace(
    "__ASSETS__",
    JSON.stringify(assets, null, 2)
  );

  fs.writeFileSync(`dist/${software}/sw.js`, swFinal);
}

// Plugin to replace __INTERFACE__ in router
function InterfaceReplacePlugin(software) {
  return {
    name: "replace-interface",
    enforce: "pre",
    transform(code, id) {
      if (id.includes("src/router/index.js")) {
        return code.replace(/__INTERFACE__/g, software);
      }
      return code;
    },
  };
}

function createWebManifest(software) {
  const manifest = {
    name: `${software} App`,
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
    `dist/${software}/manifest.json`,
    JSON.stringify(manifest, null, 2)
  );
}

// Base config (without PWA) for dev & standard build
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// Custom multi-build function
export async function buildAll() {
  const baseEnv = loadEnv("production", process.cwd());

  for (const software of softwares) {
    console.log(`\n🚀 Building ${software}...`);
    try {
      await build({
        root: process.cwd(),
        configFile: false,
        plugins: [InterfaceReplacePlugin(software), vue(), tailwindcss()],
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
        define: {
          __SOFTWARE__: JSON.stringify(software), // 👈 inject global
          "import.meta.env.VITE_INTERFACE": JSON.stringify(software),
          // ... keep your Firebase/env stuff
        },
        build: {
          outDir: `dist/${software}`,
          emptyOutDir: true,
          manifest: true,
        },
      });

      console.log(`✅ Finished building ${software}`);
      createWebManifest(software); // ✅ add PWA manifest

      createServiceWorker(software); // inject assets into sw.js
    } catch (err) {
      console.error(`❌ Build failed for ${software}:`, err);
    }
  }
}
