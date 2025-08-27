// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";
import { loadRoutes } from "./core";

const routes = await loadRoutes(import.meta.env.VITE_PROJECT);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
