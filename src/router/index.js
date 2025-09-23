// src/router/RouterFactory.js
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import{ beforeEach, afterEach }  from "./guards.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Register the guards
router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
