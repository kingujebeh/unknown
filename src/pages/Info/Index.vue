<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import { useStore } from "@/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { info } = storeToRefs(store);
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Info</h1>
    <vue-json-pretty :data="info" :deep="2" />
  </div>
</template>
