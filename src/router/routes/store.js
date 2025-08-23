const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Screen.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/interface/store/Index.vue"),
      },
    ],
  },
];

export default routes;
