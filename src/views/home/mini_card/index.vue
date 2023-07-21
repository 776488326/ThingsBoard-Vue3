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
      <SvgIcon :name="iconName"></SvgIcon>
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
  background-color: #eee;
  height: 100%;
  border: 2px solid $themeLightColor;
  border-radius: $borderRadius;
  padding: 16px 0;

  &:hover {
    background-color: $themeColor;
    border-color: $borderLineColor;

    #title {
      color: $loginFsLightColor;
    }
  }

  #title {
    font-size: 16px;
    font-weight: 400;
    color: $themeLightColor;
    text-align: center;
  }

  #content {
    font-size: 24px;
    color: $loginFsLightColor;
  }
}

.container::after {
  display: flex;
  position: absolute;
  content: url(/thingsboard.ico);
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
}
</style>
