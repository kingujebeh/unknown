import { softwares } from "@/data";

async function createAuthRoutes(software) {
  const isToCreate = softwares[software].auth;

  if (isToCreate) {
    // Filter Auth pages separately
    const authPages = import.meta.glob("../pages/Auth/**/*.vue");

    return {
      path: "/auth",
      name: "auth",
      component: () => import("@/layouts/Auth.vue"),
      children: Object.keys(authPages).map((path) => {
        let name = path
          .replace(`../pages/Auth/`, "")
          .replace(".vue", "")
          .toLowerCase(); // convert to lowercase

        if (name == "forgotpassword") name = "forgot-password";

        // Automatically generate route path from file name
        let routePath = name === "index" ? "" : name;

        return {
          path: routePath,
          name,
          component: authPages[path], // lazy-loaded
        };
      }),
    };
  }
}

export { createAuthRoutes };
