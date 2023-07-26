<template>
  <el-pagination
    v-model:current-page="pagination.current_page"
    v-model:page-size="pagination.page_size"
    :page-sizes="pagination.page_sizes"
    :small="small"
    :disabled="disabled"
    :background="background"
    :layout="pagination.layout"
    :total="pagination.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :hide-on-single-page="true"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const emits = defineEmits(['changeSize', 'changePage'])
interface Pager {
  current_page: number
  page_size: number
  page_sizes: number[]
  total: number
  layout: string
}
export interface TablePagerProps {
  pagination: Pager
}

//#region 分页
defineProps<TablePagerProps>()
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

function handleSizeChange(val: number) {
  console.log('当前每页尺寸为val：', val)
  emits('changeSize', val)
}
function handleCurrentChange(val: number) {
  console.log('当前页为val：', val)
  emits('changePage', val)
}

//#endregion
</script>

<style lang="scss" scoped>
.el-pagination {
  min-height: 50px;
}
</style>
