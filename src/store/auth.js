import api from "@/api";

async function signin() {
  // Initialize One Tap
  window.google.accounts.id.initialize({
    client_id:
      "199011519338-dpeg8krd6645st6k8jr6fbuhncceb90c.apps.googleusercontent.com",
    callback: authUser,
    ux_mode: "popup", // ensures popup instead of full redirect
  });

  // Render the Google Sign-In button (optional)
  window.google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    { theme: "outline", size: "large" }
  );

  // Or trigger the One Tap popup directly
  window.google.accounts.id.prompt();
}

async function authUser(response) {
  console.log("Google ID Token:", response.credential); // JWT

  try {
    const { data } = await api.post("/auth", {
      token: response.credential, // send ID token to backend
    });

    console.log("Backend response:", data);
  } catch (error) {
    console.error("Auth error:", error);
  }
}

export default { signin };
