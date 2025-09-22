const color = "#ffffff";
const bgColor = "#1b2127";
const fonts = `'Plus Jakarta Sans', 'Noto Sans', sans-serif`;
const showLabel = true;
const tabs = [
  {
    name: "about",
    label: "About",
    icon: {
      active: "material-symbols-light:person",
      inactive: "material-symbols-light:person-outline",
    },
  },
  {
    name: "projects",
    label: "Projects",
    icon: {
      active: "material-symbols:folder",
      inactive: "material-symbols:folder-outline",
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/splash",
  },
  {
    path: "/splash",
    component: () => import("@/interface/Splash.vue"),
  },
  {
    path: "/about",
    component: () => import("@/interface/About.vue"),
  },
  {
    path: "/projects",
    component: () => import("@/interface/Projects.vue"),
  },
];

const pro = {
  routes,
  color,
  bgColor,
  fonts,
  showLabel,
  tabs,
};

export default pro;
