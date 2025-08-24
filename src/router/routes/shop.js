const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    children: [
      {
        path: "",
        component: () => import("@/interface/shop/Splash.vue"),
      },
      {
        path: "home",
        component: () => import("@/interface/shop/Home.vue"),
      },
    ],
  },
];

export default routes;
