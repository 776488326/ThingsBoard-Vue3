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

<style lang="scss" scoped>
:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: $loginBtnColor;
}
</style>
