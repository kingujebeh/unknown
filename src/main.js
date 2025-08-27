import "./assets/css/main.css";
import { auth, onAuthStateChanged } from "./firebase";

import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "@/router";

import App from "@/App.vue";

import Back from "@/components/ui/Buttons/Back.vue";

import { useStore } from "@/store";

import { Icon } from "@iconify/vue";

const pinia = createPinia();
const app = createApp(App);

onAuthStateChanged(auth, async (user) => {
  app.use(pinia);

  const store = useStore();

  if (user) {
    console.log(user.displayName);
  } else {
    console.log(user);
  }

  store.init();

  app.provide("software", {
    name: import.meta.env.VITE_PROJECT,
  });

  app.component("Icon", Icon);
  app.component("Back", Back);

  (async () => {
    app.use(router);
    app.mount("#app");
  })();
});

// ✅ Register SW only in production
if (import.meta.env.PROD) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js");
    });
  }
}

console.log(import.meta.env.VITE_PROJECT);
console.log(import.meta.env.VITE_PROJECT, 'ha');
console.log(import.meta.env.VITE_PROJECT, 'ha');
