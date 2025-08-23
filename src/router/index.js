// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";

// Glob all route files (but they won’t all be imported, just mapped)
const routeModules = import.meta.glob("./routes/*.js");
const interfaceModules = import.meta.glob("../interface/*/Index.vue");

export default class RouterFactory {
  constructor(software) {
    this.software = software;
  }

  async loadRoutes() {
    // Ensure file exists in the glob
    const routeImporter = routeModules[`./routes/${this.software}.js`];
    if (!routeImporter) {
      throw new Error(`No routes found for ${this.software}`);
    }
    const { default: iroutes } = await routeImporter();

    return [
      {
        path: "/",
        redirect: "/home",
        component: () => import("@/layouts/Screen.vue"),
        children: [
          {
            path: "/home",
            component: interfaceModules[`../interface/${this.software}/Index.vue`],
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
