const router = {
  beforeEach: (to, from, next, store) => {
    const isLoggedIn = store.user.isAuthenticated;
    if (to.meta.auth && !isLoggedIn) {
      // user not logged in, redirect to login
      next({ name: "on-board-one", query: { redirect: to.fullPath } });
    } else {
      next();
    }
    console.log("You need to Log In");
  },
};
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: {
      auth: true,
    },
    component: () => import("@/interface/Home.vue"),
  },
  {
    path: "/auth",
    children: [
      {
        path: "on-board-one",
        name: "on-board-one",
        component: () => import("@/interface/auth/OnBoardOne.vue"),
      },
      {
        path: "on-board-two",
        name: "on-board-two",
        component: () => import("@/interface/auth/OnBoardTwo.vue"),
      },
    ],
  },
];

const handyfix = { routes, router };

export default handyfix;
