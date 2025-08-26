import { expect, test } from "vitest";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { useStore } from "@/store";
import App from "@/App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const store = useStore();

test(() => {
  expect(store.name).toBe(import.meta.env.VITE_INTERFACE);
});
