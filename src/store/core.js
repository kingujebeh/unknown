import { useStore } from "./index.js";

async function follow() {
  const store = useStore();

  await store.signin();
}

export default { follow };
