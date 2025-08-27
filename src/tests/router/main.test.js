// src/tests/router/main.test.js
import { describe, it, expect } from "vitest";
import { loadRoutes } from "@/router/core";
import { projects } from "@/data";

/**
 * Check for duplicate route paths
 */
function checkDuplicates(routes, moduleName) {
  const paths = new Set();

  function walk(route, base) {
    if (route.meta?.isTab) return;

    const fullPath =
      route.path === ""
        ? base
        : route.path.startsWith("/")
        ? route.path
        : base + "/" + route.path;

    if (route.path && route.path !== "") {
      const key = `${base}|${fullPath}`;

      if (paths.has(key)) {
        throw new Error(
          `Duplicate route path in module "${moduleName}": ${fullPath}`
        );
      }
      paths.add(key);
    }

    if (route.children) {
      route.children.forEach((child) => walk(child, fullPath));
    }
  }

  routes.forEach((r) => walk(r, ""));
}

/**
 * Validate a single route
 */
function validateRoute(route) {
  if (route.meta?.isTab) return;

  expect(route).toBeTruthy();
  expect(route).toHaveProperty("path");
  expect(typeof route.path).toBe("string");
  expect(route.path).not.toBeUndefined();
  expect(route.path).not.toBeNull();
  expect(route.component || route.children).toBeTruthy();

  if (route.children) {
    route.children.forEach(validateRoute);
  }
}

describe("loadRoutes", () => {
  Object.keys(projects).forEach((softwareKey) => {
    it(`should return valid, non-duplicate routes for ${softwareKey}`, async () => {
      const routes = await loadRoutes(softwareKey); // pass key explicitly
      expect(Array.isArray(routes)).toBe(true);
      routes.forEach(validateRoute);
      checkDuplicates(routes, softwareKey);
    });
  });
});
