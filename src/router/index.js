// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

import { useStore } from "@/store";

import project from "@/data";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Wrap beforeEach
if (project?.router?.beforeEach) {
  router.beforeEach((to, from, next) => {
    const store = useStore(); // ✅ now Pinia is active
    project.router.beforeEach(to, from, next, store);
  });
}

// Wrap afterEach
if (project?.router?.afterEach) {
  router.afterEach((to, from) => {
    const store = useStore(); // ✅ safe here too
    project.router.afterEach(to, from, next, store);
  });
}

export default router;
