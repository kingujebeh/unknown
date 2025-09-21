<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <div class="flex items-center px-4 py-4">
      <button class="text-gray-700">
        <span class="material-icons">arrow_back</span>
      </button>
      <h1 class="flex-1 text-center text-lg font-semibold">Sign In</h1>
    </div>

    <!-- Logo + Welcome -->
    <div class="flex flex-col items-center px-6 mt-6 text-center">
      <div
        class="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-2xl"
      >
        <span class="material-icons text-white text-3xl">construction</span>
      </div>
      <h2 class="mt-4 text-xl font-bold">Welcome Back</h2>
      <p class="text-gray-500 text-sm mt-1">
        Sign in to continue managing your jobs and earnings
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-3 px-6 mt-8">
      <ContinueWithGoogle class="rounded-lg border" />
    </div>

    <!-- Help -->
    <p class="text-center text-xs text-gray-400 mt-2">Need help signing in?</p>
  </div>
</template>

<script setup>
import ContinueWithGoogle from "@/components/auth/ContinueWithGoogle.vue";
</script>
