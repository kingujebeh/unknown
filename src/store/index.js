import { defineStore } from "pinia";
import { reactive } from "vue";

import fn from "@/functions";
import core from "./core";
import { softwares } from "@/data";

const name = import.meta.env.VITE_INTERFACE;

export const useStore = defineStore("unknown", () => {
  const software = reactive({
    name,
    info: {},
    navigation: softwares[name],
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

  return { init, software, info, user, ...core };
});
