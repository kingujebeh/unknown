const router = {
  beforeEach: (to, from, next, store) => {
    const isLoggedIn = store.user.isAuthenticated;
    console.log(to.meta.auth);
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
    component: () => import("@/interface/handyfix/Home.vue"),
  },
  {
    path: "/auth",
    children: [
      {
        path: "/on-board-one",
        component: () => import("@/interface/handyfix/auth/OnBoardOne.vue"),
      },
      {
        path: "/on-board-two",
        component: () => import("@/interface/handyfix/auth/OnBoardTwo.vue"),
      },
    ],
  },
];

const handyfix = { routes, router };

export default handyfix