<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    default: 'icon',
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    default: '#ddd',
    type: String,
  },
  width: {
    default: '16px',
    type: String,
  },
  height: {
    default: '16px',
    type: String,
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg :style="{ width, height, margin: 8 }" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
