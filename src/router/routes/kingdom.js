const routes = [
    {
      path: "/",
      component: () => import("@/layouts/Screen.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("@/interface/kingdom/Index.vue"),
        },
      ],
    },
  ];
  
  export default routes;
  