<script setup>
import dynamicRoutes from '@/router/dynamicRoutes.ts'
</script>

<template>
  <el-menu
    default-active="/home"
    background-color="rgba(0, 0, 0, 0)"
    :router="true"
    :unique-opened="true"
  >
    <template v-for="(route, index) in dynamicRoutes" :key="index">
      <el-sub-menu v-if="route.children" :index="route.name">
        <template #title>
          <SvgIcon v-if="route.meta.icon" :name="route.meta.icon"></SvgIcon>
          &nbsp
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="(subroute, index) in route.children"
          :index="subroute.path"
          :key="subroute.path"
        >
          <SvgIcon
            v-if="subroute.meta.icon"
            :name="subroute.meta.icon"
          ></SvgIcon>
          &nbsp
          <span>{{ subroute.name }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="route.path">
        <SvgIcon v-if="route.meta.icon" :name="route.meta.icon"></SvgIcon>
        &nbsp
        <span>{{ route.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none !important;
}
</style>
