let routes = [];
const project = import.meta.env.VITE_PROJECT;

// ----------------------------
// Route factory functions
// ----------------------------
const onBoardOne = () => ({
  path: "on-board-one",
  name: "on-board-one",
  component: () => import("@/interface/auth/OnBoardOne.vue"),
});

const onBoardTwo = () => ({
  path: "on-board-two", // fixed typo, was "on-board-one"
  name: "on-board-two",
  component: () => import("@/interface/auth/OnBoardTwo.vue"),
});

// ----------------------------
// Pages + availability
// ----------------------------
const pages = [
  {
    projects: ["handyfix", "handyman", "fairpay"], // allowed projects
    route: onBoardOne,
  },
  {
    projects: ["handyfix", "handyman", "fairpay"],
    route: onBoardTwo,
  },
];

// ----------------------------
// Filter & build routes
// ----------------------------
routes = pages
  .filter((page) => page.projects.includes(project)) // only include for active project
  .map((page) => page.route()); // call the factory to get the route object

const auth = {
  path: "/auth",
  children: routes,
};
export default auth;
