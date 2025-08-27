import { expect, test, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useStore } from "@/store";

let store;

beforeEach(() => {
  // Create a fresh Pinia instance for each test
  const pinia = createPinia();
  setActivePinia(pinia);  // <-- this makes Pinia "active"
  store = useStore();
});

test("software store has correct name from env", () => {
  expect(store.name).toBe(import.meta.env.VITE_PROJECT);
});
