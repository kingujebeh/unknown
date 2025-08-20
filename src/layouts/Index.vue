<template>
  <div id="software">
    <h1>Software Name: {{ software }}</h1>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      &nbsp;
      <RouterLink to="/market">Go to Market</RouterLink>
      &nbsp;
      <RouterLink to="/info">Info</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { reactive } from "vue";
const software = reactive(window.SOFTWARE);
</script>
