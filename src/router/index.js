// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";
import { loadRoutes } from "./core";

export default class RouterFactory {
  constructor(software) {
    this.software = software;
  }

  async create() {
    const routes = await loadRoutes(this.software);
    return createRouter({
      history: createWebHistory(),
      routes,
    });
  }
}
