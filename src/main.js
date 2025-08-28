import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "@/router";

import App from "@/App.vue";

import Back from "@/components/ui/Buttons/Back.vue";

import { useStore } from "@/store";

import { Icon } from "@iconify/vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const store = useStore();

store.init();

app.provide("software", {
  name: import.meta.env.VITE_PROJECT,
});

app.component("Icon", Icon);
app.component("Back", Back);

// ✅ Register SW only in production
if (import.meta.env.PROD) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js");
    });
  }
}

console.log(import.meta.env.VITE_PROJECT);
console.log(import.meta.env.VITE_AUTH_DOMAIN);

// Load Google script dynamically if not in index.html

if (!window.google) {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

app.use(router);
app.mount("#app");
