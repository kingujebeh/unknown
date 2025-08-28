<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
import { useHead } from "@vueuse/head";
import { onMounted } from "vue";
import { useStore } from "@/store";

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

const store = useStore();
onMounted(() => {
  store.initGoogle();
});
</script>
