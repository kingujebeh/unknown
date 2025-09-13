import { getProjects } from "@/data";
import { createAuthRoutes } from "./auth";

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = getProjects(project);
  if (!software)
    throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();

  const children = Object.keys(pages).map((filePath) => {
    const segments = filePath.split("/");
    const fileName = segments.pop();
    const name = fileName.replace(".vue", "").toLowerCase();

    return {
      path: name === "index" ? "" : name,
      name,
      component: pages[filePath],
    };
  });

  // redirect priority: Splash → Home → Index
  if (Object.keys(pages).some((f) => f.endsWith("Splash.vue"))) {
    children.unshift({ path: "/", redirect: "/splash" });
  } else if (Object.keys(pages).some((f) => f.endsWith("Home.vue"))) {
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
