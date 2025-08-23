import { defineStore } from "pinia";
import { reactive } from "vue";
import api from "@/api";

export const useStore = defineStore("unknown", () => {
  const software = reactive({
    name: import.meta.env.VITE_INTERFACE,
  });

  const info = reactive({});

  async function init() {
    console.info("App Initialized");

    try {
      let { data } = await api.get("/data");
      Object.assign(info, data);
      console.log(info);
    } catch (error) {
      console.error(error);
    }
  }
  return { init, software, info };
});
