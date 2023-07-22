<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'title',
    required: true,
  },
  iconName: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: 'content',
  },
})
</script>

<template>
  <div class="container">
    <header id="title">{{ title }}</header>
    <section>
      <span id="content">{{ content }}</span>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  border: 2px solid $theme-light-color;
  border-radius: $border-radius;
  padding: 16px 0;
  z-index: 3;
  text-align: center;
  color: $theme-light-color;
  &:hover {
    border-color: $second-light-color;
  }

  #title {
    font-size: 16px;
    font-weight: 400;
  }

  #content {
    font-size: 24px;
  }
}

.container::after {
  display: flex;
  position: absolute;
  content: url(/thingsboard.ico);
  top: 12px;
  right: 12px;
  width: 14px;
  height: 14px;
  z-index: 1;
  justify-content: center;
  align-items: center;
}
</style>
