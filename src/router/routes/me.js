const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/interface/me/Index.vue"),
      },
    ],
  },
];

export default routes;
