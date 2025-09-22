const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("@/interface/krane/Home.vue"),
  },
  {
    path: "/app/:app",
    name: "app",
    component: () => import("@/interface/krane/App.vue"),
  },
];

const krane = { routes };

export default krane;
