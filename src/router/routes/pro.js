const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    children: [
      {
        path: "",
        component: () => import("@/interface/pro/Splash.vue"),
      },
      {
        path: "projects",
        component: () => import("@/interface/pro/Projects.vue"),
      },
      {
        path: "about",
        component: () => import("@/interface/pro/About.vue"),
      },
    ],
  },
];

export default routes;
