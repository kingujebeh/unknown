<script setup>
import { RouterView } from "vue-router";
import { inject, ref } from "vue";

const software = inject("software");
</script>

<template>
  <div class="max-h-screen" :id="software.name">
    <RouterView></RouterView>
  </div>
</template>
