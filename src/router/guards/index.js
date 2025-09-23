import { useStore } from "../../store/index.js";

// ----------------------------
// Route guard functions
// ----------------------------
function isAuthenticated(to, from, next, store) {
  const isLoggedIn = store.user.isAuthenticated;

  if (to.meta?.auth && !isLoggedIn) {
    next({ name: "on-board-one", query: { redirect: to.fullPath } });
  } else {
    next();
  }
}

function analytics(to, from) {
  console.log("Analytics log:", to.fullPath);
}

// ----------------------------
// Guards configuration
// ----------------------------
const beforeEachGuards = [
  { projects: ["handyfix", "handyman", "fairpay"], route: isAuthenticated },
  { projects: ["pro", "store", "fairpay"], route: analytics },
];

const afterEachGuards = [
  { projects: ["handyfix", "handyman", "fairpay"], route: isAuthenticated },
  { projects: ["pro", "store", "shop"], route: analytics },
];

// ----------------------------
// Generate function strings
// ----------------------------
function beforeEach(software) {
  return `
  function beforeEach(to, from, next) {
    const store = useStore();
    ${beforeEachGuards
      .filter((g) => g.projects.includes(software))
      .map((g) => {
        const fnName = g.route.name || "anonymousGuard";
        return `${fnName}(to, from, next, store); return;`;
      })
      .join("\n")}
    next();
  }`;
}

function afterEach(software) {
  return `
  function afterEach(to, from) {
    const store = useStore();
    ${afterEachGuards
      .filter((g) => g.projects.includes(software))
      .map((g) => {
        const fnName = g.route.name || "anonymousGuard";
        return `${fnName}(to, from, undefined, store); return;`;
      })
      .join("\n")}
  }`;
}

export default function getGuards() {
  return { beforeEach: beforeEach(), afterEach: afterEach() };
}
