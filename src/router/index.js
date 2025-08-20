import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/Index.vue"),
    children: [
      { path: "home", component: () => import("../pages/Home/Index.vue") },
      { path: "market", component: () => import("../pages/Market/Index.vue") },
      { path: "info", component: () => import("../pages/Info/Index.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
