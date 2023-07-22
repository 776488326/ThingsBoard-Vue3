<script setup lang="ts">
type FadeMode = 'out-in' | 'default' | 'in-out' | undefined

const props = defineProps({
  name: {
    default: 'fade',
    type: String,
  },
  mode: {
    default: 'out-in',
    type: String as () => FadeMode,
  },
})
</script>

<template>
  <transition :name="props.name" :mode="props.mode">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
