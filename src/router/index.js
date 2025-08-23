import { createWebHistory, createRouter } from "vue-router";

const software = import.meta.env.VITE_INTERFACE;

// grab all routes files
const routeModules = import.meta.glob("@/router/routes/*.js", { eager: true });

console.log(routeModules);
console.log("software:", software);


// pick the correct one
const iroutes = routeModules[`/src/router/routes/${software}.js`].default;

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/Screen.vue"),
    children: [
      {
        path: "/home",
        component: () => import(`@/interface/${software}/Index.vue`),
      },
      ...iroutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
