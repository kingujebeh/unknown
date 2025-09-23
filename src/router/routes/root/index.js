let project;

// ----------------------------
// Route factory functions
// ----------------------------
const Splash = () => ({
  path: "/splash",
  name: "splash",
  component: () => import("@/interface/Splash.vue"),
});

const Home = () => ({
  path: "/home",
  name: "home",
  component: () => import("@/interface/Home.vue"),
});

// ----------------------------
// Pages + availability
// ----------------------------
const pages = [
  {
    projects: ["pro", "store", "shop"],
    route: Splash,
  },
  {
    projects: ["handyfix", "handyman", "fairpay", "store", "shop"],
    route: Home,
  },
];

const hasNav = ["pro", "store", "shop"];

// ----------------------------
// Filter & build routes
// ----------------------------
export default function getRoutes(software) {
  project = software;

  // Filter pages for this project
  const projectPages = pages
    .filter((page) => page.projects.includes(project))
    .map((page) => {
      const route = page.route();

      // Add meta.nav if project requires nav
      if (hasNav.includes(project)) {
        return {
          ...route,
          meta: { ...(route.meta || {}), nav: true },
        };
      }

      return route;
    });

  // Determine root redirect
  const splashExists = projectPages.some((r) => r.path === "/splash");
  const homeExists = projectPages.some((r) => r.path === "/home");

  const rootRedirect = splashExists ? "/splash" : homeExists ? "/home" : "/"; // fallback if neither exists

  // Add root route
  return [
    {
      path: "/",
      redirect: rootRedirect,
    },
    ...projectPages,
  ];
}
