const routes = [
    {
      path: "/",
      component: () => import("@/layouts/Screen.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("@/interface/business/Index.vue"),
        },
      ],
    },
  ];
  
  export default routes;
  