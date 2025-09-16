// auth.js
import api from "@/api";

let codeClient;
let scriptLoaded = false;

// Load Google script dynamically
function loadGoogleScript(callback) {
  if (scriptLoaded) {
    callback();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  script.onload = () => {
    scriptLoaded = true;
    callback();
  };

  document.body.appendChild(script);
}

// Initialize Google OAuth2 Code Client (supports requestCode)
function initGoogle() {
  codeClient = window.google.accounts.oauth2.initCodeClient({
    client_id: import.meta.env.VITE_GOOGLE_IDENTITY_CLIENT_ID,
    scope: "openid email profile",
    ux_mode: "popup", // force popup on mobile + desktop
    callback: async (response) => {
      if (response.code) {
        await exchangeCodeForToken(response.code);
      }
    },
  });
}

// Trigger sign-in with popup (works on mobile too)
function signin() {
  loadGoogleScript(() => {
    if (!codeClient) initGoogle();
    codeClient.requestCode(); // ✅ available here
  });
}

// Exchange auth code for tokens with your backend
async function exchangeCodeForToken(code) {
  try {
    const { data } = await api.post("/auth", { code });
    console.log("Backend response:", data);

    if (data.idToken) {
      centralAuth(data.idToken);
    }
  } catch (err) {
    console.error("Auth error:", err);
  }
}

function centralAuth(idToken) {
  const iframe = document.createElement("iframe");
  iframe.name = "centralAuthFrame";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.method = "POST";
  form.action = import.meta.env.VITE_AUTH_DOMAIN + "/auth";
  form.target = "centralAuthFrame";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "token";
  input.value = idToken;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => form.remove(), 1000);
}

export default { signin };
