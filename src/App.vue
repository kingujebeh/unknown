<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useTitle } from "@vueuse/core";

useTitle(import.meta.env.VITE_INTERFACE);
</script>
