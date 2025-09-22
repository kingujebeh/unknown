const color = "#639155";
const bgColor = "#ffffff";
const showLabel = false;
const fonts = `'Space Grotesk', 'Noto Sans', sans-serif`;
const tabs = [
  {
    name: "home",
    label: "Home",
    icon: {
      active: "material-symbols-light:home",
      inactive: "material-symbols-light:home-outline",
    },
  },
  {
    name: "shop",
    label: "Shop",
    icon: {
      active: "material-symbols-light:shopping-bag",
      inactive: "material-symbols-light:shopping-bag-outline",
    },
  },
  {
    name: "wishlist",
    label: "Wishlist",
    icon: {
      active: "material-symbols-light:favorite",
      inactive: "material-symbols-light:favorite-outline",
    },
  },
  {
    name: "cart",
    label: "Cart",
    icon: {
      active: "material-symbols-light:shopping-cart",
      inactive: "material-symbols-light:shopping-cart-outline",
    },
  },
  {
    name: "profile",
    label: "Profile",
    icon: {
      active: "material-symbols-light:person",
      inactive: "material-symbols-light:person-outline",
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/interface/Home.vue"),
  },
];

const store = { routes, tabs, color, bgColor, showLabel, fonts };

export default store;
