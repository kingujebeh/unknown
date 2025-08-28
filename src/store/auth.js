import api from "@/api";
import { useStore } from "@/store";

async function signin() {
  let googleClient = null;

  const store = useStore();
  // Initialize only once
  if (!googleClient) {
    googleClient = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "199011519338-dpeg8krd6645st6k8jr6fbuhncceb90c.apps.googleusercontent.com",
      scope: "openid profile email",
      ux_mode: "popup",
      callback: async (response) => {
        console.log("Google token:", response);
      },
    });
  }

  // Trigger popup
  googleClient.requestAccessToken();
}

export default { signin };
