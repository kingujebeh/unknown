import routes from "../router/routes/index.js";

const projects = [
  { name: "kingdom", routes: routes.kingdom, outDir: "dist/kingdom" },
  { name: "community", routes: routes.community, outDir: "dist/community" },
  { name: "business", routes: routes.community, outDir: "dist/business" },
  { name: "pro", routes: routes.pro, outDir: "dist/pro" },
  { name: "store", routes: routes.store, outDir: "dist/store" },
  { name: "shop", routes: routes.shop, outDir: "dist/shop" },
  { name: "me", routes: routes.me, outDir: "dist/me" },
];

export default { projects };
