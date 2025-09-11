const projects = {
  kingdom: {
    auth: false,
    interface: () => import.meta.glob("../interface/kingdom/**/*.vue"),
  },
  business: {
    auth: false,
    interface: () => import.meta.glob("../interface/business/**/*.vue"),
  },
  community: {
    auth: false,
    interface: () => import.meta.glob("../interface/community/**/*.vue"),
  },
  fairplay: {
    auth: false,
    interface: () => import.meta.glob("../interface/fairplay/**/*.vue"),
  },
  me: {
    auth: false,
    interface: () => import.meta.glob("../interface/me/**/*.vue"),
  },
  store: {
    auth: false,
    interface: () => import.meta.glob("../interface/store/**/*.vue"),
    color: "#639155",
    bgColor: "#ffffff",
    showLabel: false,
    fonts: `'Space Grotesk', 'Noto Sans', sans-serif`,
    tabs: [
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
    ],
  },
  shop: {
    auth: false,
    interface: () => import.meta.glob("../interface/shop/**/*.vue"),
    color: "#111518",
    bgColor: "#ffffff",
    showLabel: true,
    fonts: `'Public Sans', 'Noto Sans', sans-serif`,
    tabs: [
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
    ],
  },
  pro: {
    auth: true,
    interface: () => import.meta.glob("../interface/pro/**/*.vue"),
    color: "#ffffff",
    bgColor: "#1b2127",
    fonts: `'Plus Jakarta Sans', 'Noto Sans', sans-serif`,
    showLabel: true,
    tabs: [
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
    ],
  },
};

function getProjects(name) {
  if (!name) return projects;
  else return projects[name];
}

export { getProjects };
