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
    component: () => import("@/interface/fairpay/Home.vue"),
    meta: { auth: true },
  },
  {
    path: "/auth",
    children: [
      {
        path: "on-board-one",
        name: "on-board-one",
        component: () => import("@/interface/fairpay/auth/OnBoardOne.vue"),
      },
      {
        path: "on-board-two",
        name: "on-board-two",
        component: () => import("@/interface/fairpay/auth/OnBoardTwo.vue"),
      },
    ],
  },
];

const fairpay = { router, routes };

export default fairpay;
