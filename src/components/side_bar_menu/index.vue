<script setup lang="ts">
import dynamicRoutes from '@/router/dynamicRoutes.ts'
import { ref } from "vue";
import { useRoute } from "vue-router"
let active = ref(useRoute().path);
function changeAct(){
  let path:string = [...arguments][1][1];
  active.value = path;
}
</script>

<template>
  <el-menu
    :default-active="active"
    background-color="rgba(0, 0, 0, 0)"
    :router="true"
    :unique-opened="true"
    active-text-color="#ff6433"
    text-color="#fff"
    @select="changeAct"
  >
    <template v-for="route in dynamicRoutes" :key="route.name">
      <el-sub-menu v-if="route.children" :index="route.name">
        <template #title>
          <SvgIcon
            width="24px"
            height="24px"
            color="#fff"
            v-if="route.meta.icon"
            :name="route.meta.icon"
          ></SvgIcon>
          &nbsp
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="subroute in route.children"
          :index="subroute.path"
          :key="subroute.path"
        >
          <SvgIcon
            width="24px"
            height="24px"
            color="#fff"
            v-if="subroute.meta.icon"
            :name="subroute.meta.icon"
          ></SvgIcon>
          &nbsp
          <span>{{ subroute.name }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="route.path">
        <SvgIcon
          width="24px"
          height="24px"
          color="#fff"
          v-if="route.meta.icon"
          :name="route.meta.icon"
        ></SvgIcon>
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
