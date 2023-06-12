<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item
      v-show="item.meta.title"
      :to="{ name: item.name }"
      v-for="item in $route.matched"
      :key="item.name"
    >
      <template # class="content">
        <SvgIcon
          v-if="item.meta.icon"
          :name="item.meta.icon"
          color="#fff"
        ></SvgIcon>
        &nbsp
        <span>{{ item.meta.title }}</span>
      </template>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: $loginBtnColor;
}
:deep(.el-breadcrumb__item .el-breadcrumb__inner) {
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
}
</style>
