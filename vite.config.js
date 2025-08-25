import fs from "fs";

// vite.config.js
import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const softwares = [
  "kingdom",
  "community",
  "business",
  "store",
  "shop",
  "pro",
  "me",
];

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
        configFile: false, // skip reading vite.config.js
        plugins: [InterfaceReplacePlugin(software), vue(), tailwindcss()],
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
        define: {
          "import.meta.env.VITE_INTERFACE": JSON.stringify(software),
          "import.meta.env.VITE_API_KEY": JSON.stringify(baseEnv.VITE_API_KEY),
          "import.meta.env.VITE_AUTH_DOMAIN": JSON.stringify(
            baseEnv.VITE_AUTH_DOMAIN
          ),
          "import.meta.env.VITE_PROJECT_ID": JSON.stringify(
            baseEnv.VITE_PROJECT_ID
          ),
          "import.meta.env.VITE_STORAGE_BUCKET": JSON.stringify(
            baseEnv.VITE_STORAGE_BUCKET
          ),
          "import.meta.env.VITE_MESSAGING_SENDER_ID": JSON.stringify(
            baseEnv.VITE_MESSAGING_SENDER_ID
          ),
          "import.meta.env.VITE_APP_ID": JSON.stringify(baseEnv.VITE_APP_ID),
          "import.meta.env.VITE_MEASUREMENT_ID": JSON.stringify(
            baseEnv.VITE_MEASUREMENT_ID
          ),
        },
        build: {
          outDir: `dist/${software}`,
          emptyOutDir: true,
          manifest: true,
        },
      });
      console.log(`✅ Finished building ${software}`);
      createWebManifest(software); // ✅ add PWA manifest
    } catch (err) {
      console.error(`❌ Build failed for ${software}:`, err);
    }
  }
}
