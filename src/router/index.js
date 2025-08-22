import { createWebHistory, createRouter } from "vue-router";
import data from "@/data";

const project = data.projects.find(
  (project) => project.name == import.meta.env.VITE_INTERFACE
);

const iroutes = project.routes;

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/Screen.vue"),
  },
  {
    path: "/home",
    component: () => import(`@/interface/${project.name}/Index.vue`),
  },
  ...iroutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
