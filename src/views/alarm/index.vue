<template>
  <main id="container">
    <CommonTable v-bind="tableProps">
      <template v-slot:table_head_left="">
        <section id="filter">
          <el-popover placement="bottom" trigger="click">
            <template #reference>
              <el-button class="m-2" :icon="Filter">Filter: 激活</el-button>
            </template>
          </el-popover>
          <el-popover placement="bottom" trigger="click">
            <template #reference>
              <el-button class="m-2" :icon="Clock">For All Time</el-button>
            </template>
          </el-popover>
        </section>
      </template>
    </CommonTable>
  </main>
</template>

<script setup lang="ts">
import CommonTable, { Props } from '@/components/common_table/index.vue'
import { Filter, Clock } from '@element-plus/icons-vue'
const tableProps: Props = {
  tableData: [],
  columns: [
    {
      label: '创建时间',
      prop: 'createTime',
    },
    {
      label: '发起者',
      prop: 'name',
    },
    {
      label: '类型',
      prop: 'type',
    },
    {
      label: '严重程度',
      prop: 'severity',
    },
    {
      label: 'Assignee',
      prop: 'assignee',
    },
    {
      label: '状态',
      prop: 'status',
    },
    {
      fixed: 'right',
      label: '详情',
      prop: 'detail',
    },
  ],
  maxHeight: '',
  name: '',
  expend: false,
  pagination: {
    page_size: 10,
    page_sizes: [10, 20, 50],
    total: 21,
    current_page: 1,
    layout: 'total, sizes, prev, pager, next',
  },
  emptyDescription: '未发现告警',
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
