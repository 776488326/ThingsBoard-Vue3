<template>
  <main id="container">
    <CommonTable v-bind=tableProps>
      <template v-slot:table_head_right="">
        <el-icon><Plus /></el-icon>
      </template>
    </CommonTable>
  </main>
</template>

<script setup lang="ts">
import CommonTable,{ Props } from "@/components/common_table/index.vue";
import { Plus } from "@element-plus/icons-vue";
const tableProps: Props = {
  tableData: [],
  columns: [
    {
      label: "创建时间",
      prop: "createTime",

    },
    {
      label: "名称",
      prop: "name"
    },
    {
      label: "边缘类型",
      prop: "type",
    },
    {
      label: "标签",
      prop: "label",
    },
    {
      label: "客户",
      prop: "customr",
    },
    {
      label: "公开",
      prop: "public",
    },
  ],
  maxHeight: "",
  name: "边缘实例",
  expend: false,
  pagination: {
    page_size: 10,
    page_sizes: [10,20,50],
    total: 21,
    current_page: 1,
    layout: "total, sizes, prev, pager, next"
  },
  emptyDescription: "未找到边缘"
}
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 100%;
    background-color: $page-color;
    padding: $space;
    .el-icon {
      color: $second-light-color;
      font-size: 24px;
      &:hover{
        cursor: pointer;
        color: $second-color;
      }
    }
  }
</style>