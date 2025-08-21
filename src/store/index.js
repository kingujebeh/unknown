import { defineStore } from "pinia";
import api from "@/api";

export const useStore = defineStore("unknown", () => {
  async function init() {
    console.info("App Initialized");
    api.get("/api/data").then((res) => {
      console.log(res.data);
    });
  }
  return { init };
});
