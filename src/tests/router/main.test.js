// src/tests/router/main.test.js
import { describe, it, expect } from "vitest";
import { loadRoutes } from "@/router/core";
import { softwares } from "@/data";

/**
 * Check for duplicate route paths (allow one "/" per module)
 */
function checkDuplicates(routes, moduleName) {
    const paths = new Set();
  
    function walk(route, base) {
      if (route.meta?.isTab) return;
  
      const fullPath =
        route.path === ""
          ? base // index route
          : route.path.startsWith("/")
          ? route.path
          : base + "/" + route.path;
  
      // Only check duplicates for non-empty resolved paths
      if (route.path && route.path !== "") {
        const key = `${base}|${fullPath}`; // namespace by base
  
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
  if (route.meta?.isTab) return; // skip tab configs

  expect(route).toBeTruthy();
  expect(Object.keys(route).length).toBeGreaterThan(0);

  expect(route).toHaveProperty("path");
  expect(typeof route.path).toBe("string");

  // allow "" (index route), just forbid undefined/null
  expect(route.path).not.toBeUndefined();
  expect(route.path).not.toBeNull();

  // must have either component or children
  expect(route.component || route.children).toBeTruthy();

  if (route.children) {
    route.children.forEach(validateRoute);
  }
}

describe("loadRoutes", () => {
  Object.keys(softwares).forEach((software) => {
    it(`should return valid, non-duplicate routes for ${software}`, async () => {
      const routes = await loadRoutes(software);

      expect(Array.isArray(routes)).toBe(true);
      routes.forEach(validateRoute);

      // ensure no duplicates inside module
      checkDuplicates(routes, software);
    });
  });
});
