// auth.js
import api from "@/api";

function initGoogle() {
  window.google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_IDENTITY_CLIENT_ID,
    callback: authUser,
    ux_mode: "popup",
  });
}

function signin() {
  // Don’t call prompt here — let button click open Google flow
  window.google.accounts.id.prompt(); // ❌ Not needed for button flow
}

async function authUser(response) {
  console.log("Google ID Token:", response.credential);

  try {
    const { data } = await api.post("/auth", {
      token: response.credential,
    });

    console.log("Backend response:", data);

    // Send token to central auth iframe
    centralAuth(response.credential);
  } catch (err) {
    console.error("Auth error:", err);
  }
}

https://great-unknown.nw.r.appspot.com
function centralAuth(idToken) {
  // Create a hidden iframe
  const iframe = document.createElement("iframe");
  iframe.name = "centralAuthFrame";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Create a hidden form targeting the iframe
  const form = document.createElement("form");
  form.method = "POST";
  form.action = import.meta.env.VITE_AUTH_DOMAIN + "/auth";
  form.target = "centralAuthFrame";

  // Hidden input with the ID token
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "token";
  input.value = idToken;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();

  // Cleanup form element after submission (optional)
  setTimeout(() => form.remove(), 1000);
}

export default { initGoogle, signin };
