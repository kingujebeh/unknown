import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// Custom multi-build
export async function buildAll() {
  const baseEnv = loadEnv("production", process.cwd());

  const projects = [
    { name: "kingdom", outDir: "dist/kingdom" },
    { name: "business", outDir: "dist/business" },
    { name: "community", outDir: "dist/community" },
    { name: "pro", outDir: "dist/pro" },
    { name: "store", outDir: "dist/store" },
    { name: "shop", outDir: "dist/shop" },
    { name: "app", outDir: "dist/app" },
  ];

  for (const project of projects) {
    console.log(`\n🚀 Building ${project.name}...`);
    await build({
      root: process.cwd(), // 👈 ensures src/App.vue is the right one
      configFile: false, // avoid re-reading vite.config.js
      plugins: [vue(), tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      define: {
        "import.meta.env.VITE_SOFTWARE": JSON.stringify(project.name),
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
        outDir: project.outDir,
        emptyOutDir: true,
      },
    });
  }
}
