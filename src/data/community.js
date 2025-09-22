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

const community = { routes };

export default community;
