import data from "@/data";

async function loadRoutes() {
  const children = data.routes;

  const routes = [
    {
      path: "/",
      name: "Screen",
      component: () => import("@/layouts/Screen.vue"),
      children,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/Error/404.vue"),
    },
  ];

  console.log(routes);
  return routes;
}

export { loadRoutes };
