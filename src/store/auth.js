import api from "@/api";
import { useStore } from "@/store";

async function signin() {
  let googleClient = null;

  // Initialize only once
  if (!googleClient) {
    googleClient = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "199011519338-dpeg8krd6645st6k8jr6fbuhncceb90c.apps.googleusercontent.com",
      scope: "openid profile email",
      ux_mode: "popup",
      callback: authUser,
    });
  }

  // Trigger popup
  googleClient.requestAccessToken();
}

async function authUser(response) {
  console.log("Google token:", response, response.credential);

  try {
    const { data } = await api.post("/auth", {
      token: response.credential,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default { signin };
