<script setup>
import { onMounted, ref, reactive } from 'vue'

</script>

<template>
    <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>
  

<style lang='scss' scoped>
.el-breadcrumb__item:last-child {
    :deep(.el-breadcrumb__inner) {
        color: $sideBarHoverFontColor;
    }
}

:deep(.el-breadcrumb__inner) {
    color: $sideBarFontColor;

    .is-link {
        color: $sideBarHoverFontColor;
    }
}
</style>
