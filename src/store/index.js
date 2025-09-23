import { defineStore } from "pinia";
import { reactive } from "vue";

import fn from "../functions/index.js";
import core from "./core.js";
import auth from "./auth.js";

const name =
  import.meta.env && import.meta.env.VITE_PROJECT
    ? import.meta.env.VITE_PROJECT
    : "krane";

export const useStore = defineStore("unknown", () => {
  const software = reactive({
    name,
    info: {},
    navigation: name,
  });

  const info = reactive({});

  const user = reactive({
    uid: null,
    isFollowing: false,
    isAuthenticated: false,
  });

  async function init() {
    console.info("App Initialized");

    // // Get & Set App Data
    // const data = await fn.getData();
    // Object.assign(info, data);
  }

  return { init, software, info, user, ...core, ...auth };
});
