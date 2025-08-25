<template>
  <!-- Bottom Navigation -->
  <nav
    v-if="$route.path !== '/'"
    role="tablist"
    aria-label="Bottom Navigation"
    class="fixed bottom-0 inset-x-0 z-30"
  >
    <div class="mx-auto w-full max-w-screen-sm">
      <div class="bg-white/80 dark:bg-neutral-800/80 backdrop-blur shadow-lg"
      :style="{background: bgColor}"
      >
        <div class="relative flex">
          <!-- Active indicator -->
          <div
            class="absolute top-1 h-[52px] dark:bg-white/10 transition-transform duration-300"
            :style="{
              width: `calc(${100 / tabs.length}% - 0.5rem)`,
              left: `calc(${activeIndex * (100 / tabs.length)}% + 0.25rem)`,
            }"
          />

          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.name"
            class="flex-1 relative z-10 h-14 flex flex-col items-center justify-center gap-0 text-xs font-medium"
            role="tab"
            :aria-selected="$route.name === tab.name"
          >
            <Icon
              :icon="
                $route.name === tab.name ? tab.icon.active : tab.icon.inactive
              "
              class="w-8 h-8"
              :style="{ color }"
            />
            <div v-if="showLabel" class="text-center" :style="{ color }">
              {{ tab.label }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { Icon } from "@iconify/vue";

const store = useStore();
const route = useRoute();

const tabs = store.software.navigation.tabs;
const showLabel = store.software.navigation.showLabel;
const color = store.software.navigation.color;
const bgColor = store.software.navigation.bgColor;

const activeIndex = computed(() =>
  tabs.findIndex((t) => t.name === route.name)
);
</script>
