import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// Custom multi-build
export async function buildAll() {
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
      plugins: [vue()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      build: {
        outDir: project.outDir,
        emptyOutDir: true,
      },
    });
  }
}
