<template>
  <main id="container">
    <CommonTable v-bind="tableProps">
      <template v-slot:table_column="">
        <el-icon><MoreFilled /></el-icon>
      </template>
    </CommonTable>
  </main>
</template>

<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'
import CommonTable, { Props } from '@/components/common_table/index.vue'
const tableProps: Props = {
  tableData: [],
  columns: [
    {
      label: '创建时间',
      prop: 'createTime',
    },
    {
      label: '标题',
      prop: 'title',
    },
    {
      label: '分配给客户',
      prop: 'customr',
    },
    {
      label: '公开',
      prop: 'public',
    },
  ],
  maxHeight: '',
  name: '仪表板库',
  expend: false,
  pagination: {
    page_size: 10,
    page_sizes: [10, 20, 50],
    total: 21,
    current_page: 1,
    layout: 'total, sizes, prev, pager, next',
  },
  emptyDescription: '未发现仪表板',
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
  background-color: $page-color;
  padding: $space;
}
</style>
