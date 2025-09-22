const routes = [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/interface/Home.vue"),
    },
  ];
  
  const i = { routes };
  
  export default i;
  