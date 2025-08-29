import { useStore } from "@/store";

async function follow() {
  const store = useStore();

  await store.signin();
}

export default { follow };
