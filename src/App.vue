<template>
  <h1>African Kingdom!</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    &nbsp;
    <RouterLink to="/market">Go to Market</RouterLink>
    &nbsp;
    <RouterLink to="/info">Info</RouterLink>
  </nav>
  <main>
    {{ appType }}
    <RouterView />
  </main>
</template>

<script setup>
import { reactive } from "vue";
const appType = reactive(window.APP_TYPE);
</script>
