<script setup>
import TreeNode from "./TreeNode.vue";

const props = defineProps({
  value: { type: [Object, Array], required: true },
  collapsedDepth: { type: Number, default: 1 },
  sortKeys: { type: Boolean, default: true },
});

const filter = ""; // root-level filter
</script>

<template>
  <div class="object-viewer">
    <TreeNode
      :node="value"
      :level="0"
      :filter="filter"
      :collapsed-depth="collapsedDepth"
      :sort-keys="sortKeys"
    />
  </div>
</template>
