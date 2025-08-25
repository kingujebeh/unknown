import api from "@/api";
import { useStore } from "@/store";

async function follow(router) {
  const store = useStore();

  const uid = store.user.uid;
  if (!uid) {
    router.push("/auth/signin");
  } else {
    const { data } = api.get(`/follow/${uid}`);
    if (data) store.user.isFollowing = true;
  }
}

export default { follow };
