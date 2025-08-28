import { defineStore } from "pinia";
import { reactive } from "vue";

import fn from "@/functions";
import core from "./core";
import auth from "./auth";
import { getProjects } from "@/data";

const name = import.meta.env.VITE_PROJECT;

export const useStore = defineStore("unknown", () => {
  const software = reactive({
    name,
    info: {},
    navigation: getProjects(name),
  });

  const info = reactive({});

  const user = reactive({
    uid: null,
    isFollowing: false,
  });

  async function init() {
    console.info("App Initialized");

    // Get & Set App Data
    const data = await fn.getData();
    Object.assign(info, data);
  }

  return { init, software, info, user, ...core, ...auth };
});
