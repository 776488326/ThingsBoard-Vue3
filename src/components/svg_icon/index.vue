<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    default: '#icon',
    type: String,
  },
  name: String,
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
const symbolId = computed(() => `${props.prefix}-${props.name}`)
</script>

<template>
  <svg :style="{ width, height }">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
