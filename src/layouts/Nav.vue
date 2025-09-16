<template>
  <div>
    <router-view>
      <!-- Fixed Bottom Nav -->
      <bottom-navigation v-if="route.meta" ref="bottomNav" />
      Bottom Navigation
    </router-view>
  </div>
</template>

<script setup>
import BottomNavigation from "@/components/ui/Navigation/Bottom.vue";
</script>
