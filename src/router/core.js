import { getProjects } from "@/data";
import { createAuthRoutes } from "./auth";

// Convert "home" -> "Home", "onboardone" -> "OnBoardOne"
function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());
}

// Find the base folder where the first .vue file is located
function findBaseFolder(pages) {
  const paths = Object.keys(pages);
  let base = null;

  paths.forEach((filePath) => {
    const segments = filePath.split("/");
    const vueIndex = segments.findIndex((s) => s.endsWith(".vue"));
    if (vueIndex > 0) {
      const candidate = segments[vueIndex - 1]; // folder before .vue file
      if (!base || candidate.length < base.length) {
        base = candidate;
      }
    }
  });

  return base;
}

// Normalize path segments by removing everything before the base folder
// and dropping the first folder (so top-level folders like "pro" don't appear)
function normalizePathSegments(filePath, baseFolder) {
  const segments = filePath.split("/");
  const baseIndex = segments.indexOf(baseFolder);

  // Get path parts starting from base folder
  let sliced = segments.slice(baseIndex);

  // Drop the first folder after base
  if (sliced.length > 1) {
    sliced = sliced.slice(1);
  }

  return sliced;
}

function addToTree(tree, filePath, component, baseFolder) {
  const segments = normalizePathSegments(filePath, baseFolder);
  const fileName = segments.pop();
  const name = toPascalCase(fileName.replace(".vue", ""));
  const path =
    name.toLowerCase() === "index"
      ? ""
      : fileName.replace(".vue", "").toLowerCase();

  let current = tree;
  for (const segment of segments) {
    const segName = segment.toLowerCase();
    let child = current.find((c) => c.path === segName);
    if (!child) {
      child = {
        path: segName,
        name: toPascalCase(segment),
        children: [],
      };
      current.push(child);
    }
    if (!child.children) child.children = [];
    current = child.children;
  }

  current.push({
    path,
    name,
    component,
  });
}

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = getProjects(project);
  if (!software)
    throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();

  // Find base folder
  const baseFolder = findBaseFolder(pages);

  // Build nested children
  const children = [];
  Object.keys(pages).forEach((filePath) => {
    addToTree(children, filePath, pages[filePath], baseFolder);
  });

  // Redirect priority: Splash → Home → Index
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
      name: "Screen",
      component: () => import("@/layouts/Screen.vue"),
      children,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
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
