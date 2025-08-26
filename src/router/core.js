import { createAuthRoutes } from "./auth";
import { softwares } from "@/data";

// Declare static globs (Vite requires this)
const allGlobs = {
  kingdom: import.meta.glob("../interface/kingdom/**/*.vue"),
  business: import.meta.glob("../interface/business/**/*.vue"),
  community: import.meta.glob("../interface/community/**/*.vue"),
  me: import.meta.glob("../interface/me/**/*.vue"),
  store: import.meta.glob("../interface/store/**/*.vue"),
  shop: import.meta.glob("../interface/shop/**/*.vue"),
  pro: import.meta.glob("../interface/pro/**/*.vue"),
};

async function loadRoutes(software) {
  const pages = allGlobs[software];
  if (!pages) throw new Error(`No routes found for software: ${software}`);

  let routes = [
    {
      path: "/",
      name: "screen",
      component: () => import("@/layouts/Screen.vue"),
      children: Object.keys(pages).map((path) => {
        let name = path
          .replace(`../interface/${software}/`, "")
          .replace(".vue", "")
          .toLowerCase();

        let routePath =
          name === "index" ? "/" : `/${name.replace(/index$/, "")}`;

        return {
          path: name === "splash" ? "" : routePath,
          name,
          component: pages[path],
        };
      }),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/pages/Error/404.vue"),
    },
  ];

  // Add Auth routes if enabled in softwares
  if (softwares[software]?.auth) {
    const authRoutes = await createAuthRoutes(software);
    if (authRoutes) {
      routes.splice(1, 0, authRoutes);
    }
  }

  return routes;
}

export { loadRoutes };
