<template>
  <div
    class="flex min-h-screen items-center justify-center bg-slate-50 px-4"
    style="font-family: Manrope, 'Noto Sans', sans-serif"
  >
    <!-- Centered Sign In Form -->
    <div class="w-full max-w-[420px] bg-white rounded-2xl shadow-md p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <back></back>
        <h2
          class="text-[#0e141b] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10"
        >
          Sign In
        </h2>
      </div>

      <button id="googleSignInBtn" @click="signin">Sign in with Google</button>
    </div>
  </div>
</template>

<script setup>
function signin() {
  let client;

  client = google.accounts.oauth2.initTokenClient({
    client_id:
      "199011519338-dpeg8krd6645st6k8jr6fbuhncceb90c.apps.googleusercontent.com",
    scope: "openid profile email",
    ux_mode: "popup",
    callback: (response) => {
      console.log("Access Token:", response.access_token);
      // send token to your backend if needed
    },
  });

  client.requestAccessToken();
}
</script>
