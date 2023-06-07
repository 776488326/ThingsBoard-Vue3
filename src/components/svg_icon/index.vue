<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    default: 'icon',
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  color: {
    default: '',
    type: String,
  },
  width: {
    default: '14px',
    type: String,
  },
  height: {
    default: '14px',
    type: String,
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg :style="{ width, height }">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
