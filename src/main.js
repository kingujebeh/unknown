import "./assets/css/main.css";
import { auth, onAuthStateChanged } from "./firebase";

import { createApp } from "vue";
import { createPinia } from "pinia";

import Router from "@/router";

import App from "@/App.vue";

import { useStore } from "@/store";

import { Icon } from '@iconify/vue'



const pinia = createPinia();
const app = createApp(App);

onAuthStateChanged(auth, async (user) => {
  app.use(pinia);

  const store = useStore();

  if (user) {
    console.log(user);
  } else {
    console.log(user);
  }

  store.init();

  app.provide("software", {
    name: import.meta.env.VITE_INTERFACE,
  });

  app.component('Icon', Icon)


  const software = import.meta.env.VITE_INTERFACE;

  (async () => {
    const factory = new Router(software);
    const router = await factory.create();

    app.use(router);
    app.mount("#app");
  })();
});
