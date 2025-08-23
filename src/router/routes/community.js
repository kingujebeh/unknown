const routes = [
    {
      path: "/",
      component: () => import("@/layouts/Screen.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("@/interface/community/Index.vue"),
        },
      ],
    },
  ];
  
  export default routes;
  