import "./assets/css/main.css";
import { auth, onAuthStateChanged } from "./firebase";

import { createApp } from "vue";

import router from "./router";

import App from "./App.vue";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  } else {
    console.log(user);
  }
});

const app = createApp(App);

app.use(router);
app.mount("#app");
