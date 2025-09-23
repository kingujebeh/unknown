import root from "./root/index.js";
import auth from "./auth/index.js";
import settings from "./settings/index.js";

const modules = [root, auth, settings];

export default function getRoutes(software) {
  const children = modules.flatMap((mod) => mod(software));

  const Layout = {
    path: "/",
    name: "Screen",
    component: () => import("@/layouts/Screen.vue"),
    children,
  };

  const NotFound = {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/Error/404.vue"),
  };

  return [Layout, NotFound];
}
