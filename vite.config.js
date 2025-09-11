import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// --- Base Vite config ---
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), tailwindcss(), VitePWA({ registerType: "autoUpdate" })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
