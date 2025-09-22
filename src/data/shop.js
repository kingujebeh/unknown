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
    name: "services",
    label: "Services",
    icon: {
      active: "material-symbols-light:build",
      inactive: "material-symbols-light:build-outline",
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

const color = "#111518";
const bgColor = "#ffffff";
const showLabel = true;
const fonts = `'Public Sans', 'Noto Sans', sans-serif`;

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

const shop = {
  color,
  bgColor,
  showLabel,
  fonts,
  tabs,
  routes,
};

export default shop;
