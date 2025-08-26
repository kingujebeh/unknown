// router/core.js
import { createAuthRoutes } from "./auth";
import { softwares } from "@/data";

// Predefine static globs for each software folder
const softwareGlobs = {
  kingdom: import.meta.glob("../interface/kingdom/**/*.vue"),
  business: import.meta.glob("../interface/business/**/*.vue"),
  community: import.meta.glob("../interface/community/**/*.vue"),
  me: import.meta.glob("../interface/me/**/*.vue"),
  store: import.meta.glob("../interface/store/**/*.vue"),
  shop: import.meta.glob("../interface/shop/**/*.vue"),
  pro: import.meta.glob("../interface/pro/**/*.vue"),
};

async function loadRoutes(softwareArg) {
  const software =
    typeof __SOFTWARE__ !== "undefined"
      ? __SOFTWARE__
      : softwareArg || import.meta.env.VITE_INTERFACE;

  if (!software) {
    throw new Error("No software specified (missing __SOFTWARE__ or env).");
  }

  // Get the statically defined pages for this software
  const pages = softwareGlobs[software];
  if (!pages) throw new Error(`No routes found for software: ${software}`);

  const children = Object.keys(pages).map((path) => {
    let name = path
      .replace(`../interface/${software}/`, "")
      .replace(".vue", "")
      .toLowerCase();

    let routePath = name === "index" ? "/" : `/${name.replace(/index$/, "")}`;

    return {
      path: name === "splash" ? "" : routePath,
      name,
      component: pages[path],
    };
  });

  const routes = [
    {
      path: "/",
      name: "screen",
      component: () => import("@/layouts/Screen.vue"),
      children,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/pages/Error/404.vue"),
    },
  ];

  if (softwares[software]?.auth) {
    const authRoutes = await createAuthRoutes(software);
    if (authRoutes) {
      routes.splice(1, 0, authRoutes);
    }
  }

  return routes;
}

export { loadRoutes };
