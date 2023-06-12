<script setup>
import TopBreadCrumb from '@/components/top_breadcrumb/index.vue'
import { ref } from 'vue'
const isfull = ref(false)
function changeFull() {
  if (!isfull.value) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
  isfull.value = !isfull.value
}
</script>

<template>
  <div class="container">
    <TopBreadCrumb></TopBreadCrumb>
    <section id="function">
      <el-container>
        <SvgIcon
          name="fullscreen"
          width="18px"
          height="18px"
          color="red"
          v-if="!isfull"
          @click="changeFull"
          style="cursor: pointer"
        ></SvgIcon>
        <SvgIcon
          name="offscreen"
          width="18px"
          height="18px"
          color="red"
          v-else
          @click="changeFull"
          style="cursor: pointer"
        ></SvgIcon>
        <SvgIcon
          name="bell"
          width="18px"
          height="18px"
          style="cursor: pointer"
        ></SvgIcon>
        <section id="user">
          <section id="avatar"></section>
          <section id="info"></section>
        </section>
        <SvgIcon
          name="more"
          width="18px"
          height="18px"
          style="cursor: pointer"
        ></SvgIcon>
      </el-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #function {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
