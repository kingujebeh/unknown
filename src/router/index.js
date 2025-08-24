// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";

// Glob all route files (but they won’t all be imported, just mapped)
const routeModules = import.meta.glob("./routes/*.js");

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
    const { default: routes } = await routeImporter();

    routes.push({
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/pages/Error/404.vue"),
    });

    return routes;
  }

  async create() {
    const routes = await this.loadRoutes();
    return createRouter({
      history: createWebHistory(),
      routes,
    });
  }
}
