<template>
  <button
    class="flex items-center justify-center gap-3 flex-1 py-3 font-medium hover:bg-gray-900 transition"
    @click="store.signin"
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      class="w-5 h-5 bg-white rounded-full p-0.5"
    />
    <span>Continue with Google</span>
  </button>
</template>

<script setup>
import { useStore } from "@/store";
const store = useStore();
</script>
