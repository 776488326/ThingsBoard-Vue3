<script setup lang="ts">
import LayoutAside from './LayoutAside.vue'
import LayoutMain from './LayoutMain.vue'
import LayoutHeader from './LayoutHeader.vue'
</script>

<template>
  <el-container direction="horizontal" class="layout">
    <el-aside>
      <LayoutAside></LayoutAside>
    </el-aside>
    <el-container direction="vertical">
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutMain></LayoutMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;

  .common {
    background-color: $theme-color;
    color: $font-color;
  }

  .el-aside {
    @extend .common;
    width: $sideBar-width;
  }

  .el-header {
    @extend .common;
    height: $header-height;
  }

  .el-main {
    background-color: $bg-color;
  }
}
</style>
