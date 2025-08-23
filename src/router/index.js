// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";

export default class RouterFactory {
  constructor(software) {
    this.software = software;
  }

  async loadRoutes() {
    // dynamically import only the matching routes file
    const { default: iroutes } = await import(
      /* @vite-ignore */ `./routes/${this.software}.js`
    );

    return [
      {
        path: "/",
        redirect: "/home",
        component: () => import("../layouts/Screen.vue"),
        children: [
          {
            path: "/home",
            component: () =>
              import(
                /* @vite-ignore */ `../interface/${this.software}/Index.vue`
              ),
          },
          ...iroutes,
        ],
      },
    ];
  }

  async create() {
    const routes = await this.loadRoutes();
    return createRouter({
      history: createWebHistory(),
      routes,
    });
  }
}
