<template>
  <main id="container">
    <CommonTable v-bind="tableProps">
      <template v-slot:table_head_left="">
        <section id="filter">
          <el-popover placement="bottom" trigger="click">
            <template #reference>
              <el-button class="m-2" :icon="Filter">Device Filter</el-button>
            </template>
          </el-popover>
        </section>
      </template>
      <template v-slot:table_head_right="">
        <el-icon><Plus /></el-icon>
      </template>
    </CommonTable>
  </main>
</template>

<script setup lang="ts">
import CommonTable, { Props } from '@/components/common_table/index.vue'
import { Filter, Plus } from '@element-plus/icons-vue'
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
      label: '电子邮件',
      prop: 'email',
    },
    {
      label: '国家',
      prop: 'country',
    },
    {
      label: '城市',
      prop: 'city',
    },
  ],
  maxHeight: '',
  name: '客户',
  pagination: {
    page_size: 10,
    page_sizes: [10, 20, 50],
    total: 21,
    current_page: 1,
    layout: 'total, sizes, prev, pager, next',
  },
  emptyDescription: '未发现客户',
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
    &:hover {
      cursor: pointer;
      color: $second-color;
    }
  }
}
</style>
