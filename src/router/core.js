import { getProjects } from "@/data";

// Convert "Home" -> "home", "OnBoardOne" -> "on-board-one"
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // split camel/pascal
    .replace(/[_\s]+/g, "-")               // replace underscores/spaces
    .toLowerCase();
}

// Normalize path segments by removing the first 3 folders
// (so "pro/interface/fairpay/..." → becomes "auth/...") 
function normalizePathSegments(filePath) {
  const segments = filePath.split("/");
  return segments.slice(3); // drop "pro/interface/fairpay"
}

function addToTree(tree, filePath, component) {
  const segments = normalizePathSegments(filePath);
  if (!segments || segments.length === 0) return;

  const fileName = segments.pop(); // actual .vue file
  const name = toKebabCase(fileName.replace(".vue", ""));
  const pagePath = name === "index" ? "" : name;

  let current = tree;

  // Walk through folder segments → build nested nodes
  for (let i = 0; i < segments.length; i++) {
    const seg = toKebabCase(segments[i]);

    let child = current.find((c) => c.path === seg && Array.isArray(c.children));
    if (!child) {
      child = {
        path: seg,
        name: seg,
        children: [],
      };
      current.push(child);
    }
    current = child.children;
  }

  // Add the actual page node
  current.push({
    path: pagePath,
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

  const children = [];
  Object.keys(pages).forEach((filePath) => {
    addToTree(children, filePath, pages[filePath]);
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

  console.log(JSON.stringify(routes, null, 2));
  return routes;
}

export { loadRoutes };
