<template>
  <div
    class="text-[#0e141b] flex size-12 shrink-0 items-center"
    @click="handleBack()"
  >
    <icon icon="material-symbols-light:arrow-left-alt" class="w-12 h-12">
    </icon>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>
