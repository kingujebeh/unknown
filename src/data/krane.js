const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("@/interface/krane/Home.vue"),
  },
  {
    path: "/app/:name",
    name: "app",
    component: () => import("@/interface/krane/App.vue"),
    props: true 
  },
];

const krane = { routes };

export default krane;
