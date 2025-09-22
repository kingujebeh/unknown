const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/interface/community/Home.vue"),
  },
];

const community = { routes };

export default community;
