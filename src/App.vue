<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
import { useHead } from "@vueuse/head";

useTitle(import.meta.env.VITE_PROJECT);

if (import.meta.env.PROD) {
  useHead({
    link: [
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
  });
}
</script>
