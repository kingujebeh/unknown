import { getProjects } from "@/data";
import { createAuthRoutes } from "./auth";

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = getProjects(project);
  if (!software)
    throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();
  console.log("Pages loaded:", Object.keys(pages));

  // Group pages by directory (auth, etc.)
  const groups = {};

  Object.keys(pages).forEach((filePath) => {
    const segments = filePath.split("/");
    const fileName = segments.pop();
    const folder = segments.pop() || ""; // e.g. "auth" or "" if root
    const name = fileName.replace(".vue", "").toLowerCase();

    // Path inside the folder
    const path =
      name === "index" ? "" : name === "splash" ? "" : `/${name.toLowerCase()}`;

    if (!groups[folder]) groups[folder] = [];
    groups[folder].push({
      path: path || "/", // root of folder
      name,
      component: pages[filePath],
    });
  });

  // Build children routes
  let children = [];

  // root pages (folder = "")
  if (groups[""]) {
    children.push(...groups[""]);
  }

  // auth folder pages nested under /auth
  if (groups["auth"]) {
    children.push({
      path: "/auth",
      name: "auth",
      children: groups["auth"].map((r) => ({
        ...r,
        path: r.path.replace(/^\//, ""), // remove leading slash for child paths
      })),
    });
  }

  // if Home.vue exists, add redirect from / to /home
  if (Object.keys(pages).some((filePath) => filePath.endsWith("Home.vue"))) {
    children.unshift({
      path: "/",
      redirect: "/home",
    });
  }

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

  if (software.auth) {
    const authRoutes = await createAuthRoutes(project);
    if (authRoutes) routes.splice(1, 0, authRoutes);
  }

  console.log(JSON.stringify(routes, null, 2));

  return routes;
}

export { loadRoutes };
