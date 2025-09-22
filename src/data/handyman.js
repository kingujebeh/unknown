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
    component: () => import("@/interface/handyman/Home.vue"),
  },
  {
    path: "/auth",
    children: [
      {
        path: "/on-board-one",
        component: () => import("@/interface/handyman/auth/OnBoardOne.vue"),
      },
      {
        path: "/on-board-two",
        component: () => import("@/interface/handyman/auth/OnBoardTwo.vue"),
      },
    ],
  },
];

const handyman = { routes, router };

export default handyman;
