import { projects } from "@/data";
import { createAuthRoutes } from "./auth";

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = projects[project];
  if (!software) throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();
  const children = Object.keys(pages).map((filePath) => {
    const name = filePath.split("/").pop().replace(".vue", "").toLowerCase();
    const path = name === "index" ? "/" : name === "splash" ? "" : `/${name}`;
    return { path, name, component: pages[filePath] };
  });

  const routes = [
    { path: "/", name: "screen", component: () => import("@/layouts/Screen.vue"), children },
    { path: "/:pathMatch(.*)*", name: "404", component: () => import("@/pages/Error/404.vue") },
  ];

  if (software.auth) {
    const authRoutes = await createAuthRoutes(project);
    if (authRoutes) routes.splice(1, 0, authRoutes);
  }

  return routes;
}

export { loadRoutes };
