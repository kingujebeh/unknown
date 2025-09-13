<template>
  <div class="flex flex-col min-h-screen" :id="software.name">
    <!-- Main content with dynamic bottom padding -->
    <div
      class="flex-1 overflow-auto"
      :style="{ paddingBottom: navHeight, fontFamily: fonts }"
      ref="mainContent"
    >
      <router-view />
    </div>

    <!-- Fixed Bottom Nav -->
    <!-- <bottom-navigation v-if="route.meta" ref="bottomNav" /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useStore } from "@/store";
import BottomNavigation from "@/components/ui/Navigation/Bottom.vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.meta);
const store = useStore();
const software = store.software.name;
const fonts = store.software.fonts;

const navHeight = ref("0px");
const bottomNav = ref(null);

function updateNavHeight() {
  if (bottomNav.value?.$el) {
    navHeight.value = bottomNav.value.$el.offsetHeight + "px";
  }
}

onMounted(async () => {
  await nextTick();
  updateNavHeight();
  // Recalculate if window resizes (responsive)
  window.addEventListener("resize", updateNavHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateNavHeight);
});
</script>
