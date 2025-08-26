import { createAuthRoutes } from "./auth";

// Grab ALL .vue files under /interface at build time
const allPages = import.meta.glob("../interface/**/*.vue");

async function loadRoutes(software) {
  // Filter only the pages for the selected software
  const pages = Object.fromEntries(
    Object.entries(allPages).filter(
      ([path]) =>
        path.includes(`/interface/${software}/`) &&
        !path.includes(`/interface/${software}/Auth/`) // exclude Auth for now
    )
  );

  let routes = [
    // Main routes under Screen layout
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
          component: pages[path], // lazy-loaded
        };
      }),
    },

    // Auth routes under Auth layout
    await createAuthRoutes(software),

    // Catch-all 404
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/pages/Error/404.vue"),
    },
  ];


  return routes;
}

export { loadRoutes };
