// auth.js
import api from "@/api"

function initGoogle() {
  window.google.accounts.id.initialize({
    client_id: "199011519338-xxxx.apps.googleusercontent.com",
    callback: authUser,
    ux_mode: "popup",
  })
}

function signin() {
  // Don’t call prompt here — let button click open Google flow
  window.google.accounts.id.prompt() // ❌ Not needed for button flow
}

async function authUser(response) {
  console.log("Google ID Token:", response.credential)

  try {
    const { data } = await api.post("/auth", {
      token: response.credential,
    })
    console.log("Backend response:", data)
  } catch (err) {
    console.error("Auth error:", err)
  }
}

export default { initGoogle, signin }
