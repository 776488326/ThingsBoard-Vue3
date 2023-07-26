<template>
  <el-table
    :data="tableData"
    style="width: 100%; height: 100%"
    :max-height="maxHeight"
  >
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
      :fixed="column.fixed"
    />
    <el-table-column v-if="expend" fixed="right" label="操作">
      <slot name="expand"></slot>
    </el-table-column>
    <template v-slot:empty="">
      <el-empty :description="emptyDescription" />
    </template>
  </el-table>
</template>

<script lang="ts" setup>
export interface Column {
  fixed?: true | 'left' | 'right'
  prop: string
  label: string
  width?: string | number
}
export interface TableProps {
  tableData: Array<any>
  columns: Array<Column>
  expend?: boolean
  maxHeight: string | number
  emptyDescription: string
}

withDefaults(defineProps<TableProps>(), {
  tableData: () => [],
  maxHeight: '678px',
  expend: true,
  emptyDescription: '无数据',
})
</script>

<style lang="scss" scoped>
.el-table {
  height: 100%;
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
}
</style>
