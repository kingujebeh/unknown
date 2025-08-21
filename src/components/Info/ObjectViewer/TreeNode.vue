<template>
  <div class="ov-row" :style="{ marginLeft: level * 16 + 'px' }">
    <!-- Object / Array -->
    <template v-if="node.kind === 'object' || node.kind === 'array'">
      <span class="ov-toggle" @click="toggle">
        {{ isOpen ? "▼" : "▶" }}
      </span>
      <span class="ov-key">
        {{ node.kind === "object" ? "Object" : "Array" }}
        <span class="ov-size">
          ({{
            node.kind === "object" ? node.entries.length : node.items.length
          }})
        </span>
      </span>
    </template>

    <!-- Primitive -->
    <template v-else-if="node.kind === 'primitive'">
      <span class="ov-val" :class="`t-${node.type}`">
        {{ node.value === "" ? '""' : String(node.value) }}
      </span>
    </template>

    <!-- Circular -->
    <template v-else-if="node.kind === 'circular'">
      <span class="ov-val t-circular">[Circular → {{ node.refPath }}]</span>
    </template>
  </div>

  <!-- Children -->
  <div v-if="isOpen && node.kind === 'object'">
    <TreeNode
      v-for="entry in node.entries"
      :key="entry.key"
      :node="entry.child"
      :level="level + 1"
      :collapsed-depth="collapsedDepth"
      :sort-keys="sortKeys"
      :filter="filter"
      :show-types="showTypes"
      @toggle="$emit('toggle', $event[0], $event[1])"
    />
  </div>

  <div v-if="isOpen && node.kind === 'array'">
    <TreeNode
      v-for="(child, i) in node.items"
      :key="i"
      :node="child"
      :level="level + 1"
      :collapsed-depth="collapsedDepth"
      :sort-keys="sortKeys"
      :filter="filter"
      :show-types="showTypes"
      @toggle="$emit('toggle', $event[0], $event[1])"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  node: { type: Object, required: true },
  level: { type: Number, required: true },
  collapsedDepth: { type: Number, default: 1 },
  sortKeys: { type: Boolean, default: true },
  filter: { type: String, default: "" },
  showTypes: { type: Boolean, default: false },
});

const emit = defineEmits(["toggle"]);

const isOpen = ref(false);

// auto collapse/expand based on depth
watch(
  () => props.level,
  (lvl) => {
    isOpen.value = lvl < props.collapsedDepth;
  },
  { immediate: true }
);

function toggle() {
  isOpen.value = !isOpen.value;
  emit("toggle", [props.node.path, isOpen.value]);
}
</script>
