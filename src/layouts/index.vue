<script setup>
import { ref, onMounted, nextTick } from "vue";
import LayoutAside from "./LayoutAside";
import LayoutMain from "./LayoutMain";
import LayoutHeader from "./LayoutHeader";

</script>

<template>
  <el-container :direction="horizontal" class="layout">
    <el-aside>
      <LayoutAside></LayoutAside>
    </el-aside>
      <el-container :direction="vertical">
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
.layout{
    width: 100%;
    height: 100vh;
    .common {
        background-color: $themeColor;
        color: $sideBarFontColor;
    }
    .el-aside {
        @extend .common;
        width: $sideBarWidth;
    }
    .el-header{
        @extend .common;
        height: $headerHeight;
    }
    .el-main{
        padding: 16px;
        background-color: #ddd;
        
    }
}
</style>
