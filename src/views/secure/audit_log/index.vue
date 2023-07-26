<template>
  <main id="container">
    <CommonTable v-bind=tableProps>
      <template v-slot:table_head_left="">
        <el-popover placement="bottom" trigger="click">
          <template #reference>
            <el-button class="m-2" :icon="Clock">
              最后一天
            </el-button>
          </template>
        </el-popover>
      </template>
    </CommonTable>
  </main>
</template>

<script setup lang="ts">
import CommonTable,{ Props } from "@/components/common_table/index.vue";
import { Clock } from "@element-plus/icons-vue";
const tableProps: Props = {
  tableData: [],
  columns: [
    {
      label: "时间戳",
      prop: "timestamp",
    },
    {
      label: "实体类型",
      prop: "entityType"
    },
    {
      label: "实体名称",
      prop: "name"
    },
    {
      label: "用户",
      prop: "email"
    },
    {
      label: "类型",
      prop: "type",
    },
    {
      label: "状态",
      prop: "status",
    },
  ],
  name: "",
  maxHeight: "",
  pagination: {
    page_size: 10,
    page_sizes: [10,20,50],
    total: 21,
    current_page: 1,
    layout: "total, sizes, prev, pager, next"
  },
  emptyDescription: "未找到日志"
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