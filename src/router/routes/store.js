const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    children: [
      {
        path: "",
        component: () => import("@/interface/store/Splash.vue"),
      },
      {
        path: "home",
        component: () => import("@/interface/store/Home.vue"),
      },
    ],
  },
];

export default routes;
