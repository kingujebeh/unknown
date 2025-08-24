// Grab ALL .vue files under /interface at build time
const allPages = import.meta.glob("../interface/**/*.vue");

async function loadRoutes(software) {
  // Filter only the pages for the selected software
  const pages = Object.fromEntries(
    Object.entries(allPages).filter(([path]) =>
      path.includes(`/interface/${software}/`)
    )
  );

  // Build route definitions
  const routes = Object.keys(pages).map((path) => {
    let name = path
      .replace(`../interface/${software}/`, "")
      .replace(".vue", "")
      .toLowerCase();

    // Clean up: e.g. Index.vue -> /
    let routePath =
      name.toLowerCase() === "index" ? "/" : `/${name.replace(/index$/, "")}`;

    return {
      path: name == "splash" ? "" : routePath,
      name,
      component: pages[path], // lazy-loaded
    };
  });

  // Add a catch-all 404 route
  routes.push({
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/Error/404.vue"),
  });

  console.log(routes);

  return routes;
}

export { loadRoutes };
