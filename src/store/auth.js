// auth.js
import api from "@/api";

function initGoogle() {
  window.google.accounts.id.initialize({
    client_id:
      "199011519338-dpeg8krd6645st6k8jr6fbuhncceb90c.apps.googleusercontent.com",
    callback: authUser,
    ux_mode: "popup",
  });

  console.info("Google Initialized");
}

async function signin() {
  window.google.accounts.id.prompt();
}

async function authUser(response) {
  console.log("Google ID Token:", response.credential);

  try {
    const { data } = await api.post("/auth", {
      token: response.credential,
    });
    console.log("Backend response:", data);
  } catch (error) {
    console.error("Auth error:", error);
  }
}

export default { initGoogle, signin };
