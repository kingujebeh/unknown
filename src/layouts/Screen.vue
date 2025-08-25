<template>
  <div class="max-h-screen flex flex-col" :id="software.name">
    <div
      class="flex-1"
      :style="{ paddingBottom: navHeight, fontFamily: fonts }"
    >
      <router-view></router-view>
    </div>
    <bottom-navigation></bottom-navigation>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import BottomNavigation from "@/components/ui/Navigation/Bottom.vue";

const store = useStore();
const software = store.software.name;
const fonts = store.software.fonts;

const navHeight = ref("0px");

onMounted(() => {
  const navEl = document.querySelector("nav[role='tablist']");
  if (navEl) {
    navHeight.value = navEl.offsetHeight + "px";
  }
});
</script>
