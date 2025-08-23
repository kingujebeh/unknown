import "./assets/css/main.css";
import { auth, onAuthStateChanged } from "./firebase";


import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "@/router";

import App from "@/App.vue";

import { useStore } from "@/store";

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

  app.use(router);
  app.mount("#app");
});
