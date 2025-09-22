import community from "./community.js";
import fairpay from "./fairpay.js";
import krane from "./krane.js";
import handyman from "./handyman.js";
import handyfix from "./handyfix.js";
import i from "./i.js";
import pro from "./pro.js";
import store from "./store.js";
import shop from "./shop.js";

const projects = {
  fairpay,
  krane,
  pro,
  store,
  shop,
  handyman,
  handyfix,
  i,
  community,
};

function getProjects(name) {
  if (!name) return projects;
  else return projects[name];
}

export { getProjects };
