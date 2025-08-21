import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/Screen.vue"),
    children: [
      { path: "home", component: () => import("../pages/Home/Index.vue") },
      { path: "market", component: () => import("../pages/Market/Index.vue") },
      { path: "info", component: () => import("../pages/Info/Index.vue") },
      { path: "signup", component: () => import("../pages/Auth/SignUp.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
