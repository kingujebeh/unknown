<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="text-center">
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      &nbsp;
      <RouterLink to="/signup">Sign Up</RouterLink>
      &nbsp;
      <RouterLink to="/info">Info</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div>
</template>
