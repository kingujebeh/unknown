import { createWebHistory, createRouter } from "vue-router";

const software = import.meta.env.VITE_INTERFACE;

// ✅ this will only ever import ONE file (not glob all)
const { default: iroutes } = await import(`@/router/routes/${software}.js`);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layouts/Screen.vue"),
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
