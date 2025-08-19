import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("../pages/Home/Index.vue") },
  { path: "/market", component: () => import("../pages/Market/Index.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
