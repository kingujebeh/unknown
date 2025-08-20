<template>
  <div id="software" class="text-center">
    <h1>
      Software Name: <span class="capitalize">{{ software }}</span>
    </h1>
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
const software = reactive(window.SOFTWARE) || "Center of worship";
</script>
