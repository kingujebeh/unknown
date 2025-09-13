import { getProjects } from "@/data";
import { createAuthRoutes } from "./auth";

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = getProjects(project);
  if (!software)
    throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();

  const groups = {};
  Object.keys(pages).forEach((filePath) => {
    const segments = filePath.split("/");
    const fileName = segments.pop();
    let folder = segments.pop() || ""; // parent folder
    const name = fileName.replace(".vue", "").toLowerCase();

    // special case: put Home.vue & Index.vue directly at root
    if (["home", "index"].includes(name)) {
      folder = "";
    }

    const path =
      name === "index"
        ? ""
        : name === "splash"
        ? ""
        : name;

    if (!groups[folder]) groups[folder] = [];
    groups[folder].push({
      path: path || "/", // folder root or filename
      name: `${folder ? folder + "-" : ""}${name}`,
      component: pages[filePath],
    });
  });

  let children = [];

  // root pages
  if (groups[""]) {
    children.push(...groups[""]);
  }

  // every other folder becomes a nested route
  Object.keys(groups).forEach((folder) => {
    if (folder === "") return;
    children.push({
      path: folder.toLowerCase(),
      name: folder.toLowerCase(),
      children: groups[folder].map((r) => ({
        ...r,
        path: r.path.replace(/^\//, ""),
      })),
    });
  });

  // redirect / -> /home if Home.vue exists
  if (Object.keys(pages).some((f) => f.endsWith("Home.vue"))) {
    children.unshift({ path: "/", redirect: "/home" });
  } else if (Object.keys(pages).some((f) => f.endsWith("Index.vue"))) {
    children.unshift({ path: "/", redirect: "/" });
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
