<template>
  <div :id="software.name" class="max-h-screen" :style="{ fontFamily: fonts }">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
import { RouterView } from "vue-router";

const store = useStore();
const software = store.software.name;
const fonts = store.software.fonts;
</script>
