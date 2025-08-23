const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    children: [
      {
        path: "",
        component: () => import("@/interface/pro/Index.vue"),
      },
      {
        path: "about",
        component: () => import("@/interface/pro/About.vue"),
      },
    ],
  },
];

export default routes;
