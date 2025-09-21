<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <div class="flex items-center px-4 py-4">
      <button class="text-gray-700">
        <span class="material-icons">arrow_back</span>
      </button>
      <h1 class="flex-1 text-center text-lg font-semibold">Sign Up</h1>
    </div>

    <!-- Logo + Welcome -->
    <div class="flex flex-col items-center px-6 mt-6 text-center">
      <div
        class="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-2xl"
      >
        <span class="material-icons text-white text-3xl">build</span>
      </div>
      <h2 class="mt-4 text-xl font-bold">Welcome to HandyFix</h2>
      <p class="text-gray-500 text-sm mt-1">
        Create your account to book trusted handyman services
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col px-6 mt-8">
      <ContinueWithGoogle class="rounded-lg border" />
    </div>

    <!-- Security Notice -->
    <div
      class="flex items-center gap-2 mx-6 mt-6 p-3 border rounded-lg bg-green-50 text-green-700 text-sm"
    >
      <span class="material-icons text-green-500">verified_user</span>
      <span>Your data is protected with bank-level security</span>
    </div>

    <!-- Terms -->
    <p class="text-center text-xs text-gray-400 mt-2 px-6">
      By continuing, you agree to our
      <a href="#" class="text-blue-600">Terms of Service</a>
      and
      <a href="#" class="text-blue-600">Privacy Policy</a>
    </p>

    <!-- Why Join -->
    <div class="bg-gray-50 mt-8 px-6 py-6 rounded-t-3xl">
      <h3 class="text-center font-semibold">Why Join HandyFix?</h3>
      <ul class="mt-4 space-y-3">
        <li class="flex items-center gap-2 text-gray-700">
          <span class="material-icons text-blue-500">check_circle</span>
          Verified & trusted professionals
        </li>
        <li class="flex items-center gap-2 text-gray-700">
          <span class="material-icons text-blue-500">check_circle</span>
          Same-day service available
        </li>
        <li class="flex items-center gap-2 text-gray-700">
          <span class="material-icons text-blue-500">check_circle</span>
          Secure payments & satisfaction guarantee
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ContinueWithGoogle from "@/components/auth/ContinueWithGoogle.vue";
</script>
