import { getProjects } from "@/data";

// Convert "Home" -> "home", "OnBoardOne" -> "on-board-one"
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // split camel/pascal
    .replace(/[_\s]+/g, "-") // replace underscores/spaces
    .toLowerCase();
}

// Normalize path segments by removing the first 3 folders
// (so "pro/interface/fairpay/..." → becomes "auth/...")
function normalizePathSegments(filePath) {
  const segments = filePath.split("/");
  return segments.slice(3); // drop "pro/interface/fairpay"
}

// Extract meta objects from index.js files
async function collectMeta(pages) {
  const metaMap = {};
  await Promise.all(
    Object.keys(pages).map(async (filePath) => {
      if (filePath.endsWith("index.js")) {
        const mod = await pages[filePath]();
        if (mod.meta) {
          for (const key in mod.meta) {
            metaMap[key] = { ...(metaMap[key] || {}), ...mod.meta[key] };
          }
        }
      }
    })
  );
  return metaMap;
}

function addToTree(tree, filePath, component, metaMap) {
  const segments = normalizePathSegments(filePath);
  if (!segments || segments.length === 0) return;

  const fileName = segments.pop();
  if (fileName === "index.js") return; // skip meta files

  const name = toKebabCase(fileName.replace(".vue", ""));
  const pagePath = name === "index" ? "" : name;

  let current = tree;

  // Walk through folder segments → build nested nodes
  for (let i = 0; i < segments.length; i++) {
    const seg = toKebabCase(segments[i]);

    let child = current.find(
      (c) => c.path === seg && Array.isArray(c.children)
    );
    if (!child) {
      child = {
        path: seg,
        name: seg,
        children: [],
        ...(metaMap[seg] ? { meta: metaMap[seg] } : {}), // attach folder meta
      };
      current.push(child);
    }
    current = child.children;
  }

  // Meta: root pages get root meta, nested pages get their folder’s
  let routeMeta = {};
  if (segments.length === 0) {
    routeMeta = metaMap.root || {};
  } else {
    const topFolder = toKebabCase(segments[0]);
    routeMeta = metaMap[topFolder] || {};
  }

  current.push({
    path: pagePath,
    name,
    component,
    ...(Object.keys(routeMeta).length ? { meta: routeMeta } : {}),
  });
}

async function loadRoutes(project) {
  project = project || import.meta.env.VITE_PROJECT;
  const software = getProjects(project);
  if (!software)
    throw new Error(`No software found for VITE_PROJECT=${project}`);

  const pages = software.interface();

  // collect meta definitions from index.js
  const metaMap = await collectMeta(pages);

  const children = [];
  Object.keys(pages).forEach((filePath) => {
    addToTree(children, filePath, pages[filePath], metaMap);
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

  console.log(routes);
  return routes;
}

export { loadRoutes };
