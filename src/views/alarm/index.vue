<template>
  <main id="alarm_container">
    <section id="table">
      <AlarmQueryVue></AlarmQueryVue>
      <el-table
        :data="alarmListData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="createdTime" label="创建时间" width="180" />
        <el-table-column prop="name" label="发起者" width="180" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="severity" label="严重程度" />
        <el-table-column prop="assignee" label="Assignee" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="details" label="详情">
          <template #default>
            <el-button link type="primary" size="small" @click="toDetail">
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
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
  </main>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { getAlarms } from '@/api/alarm/index.ts'
import type { Alarm, AlarmQuery } from '@/api/alarm/type.ts'
import type { Ref } from 'vue'
import AlarmQueryVue from './AlarmQuery.vue'
interface Pager {
  current_page: number
  page_size: number
  page_sizes: number[]
  total: number
  layout: string
}

//#region 表格
const tableRowClassName = ({ row }: { row: Alarm; rowIndex?: number }) => {
  if (row.status === 'unconfirm') {
    console.log('row', row)
    return 'warning-row'
  } else {
    return ''
  }
}

let alarmListData: Alarm[] = [
  {
    createdTime: '2023-05-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'cleared',
  },
  {
    createdTime: '2023-05-01',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'confirmed',
  },
  {
    createdTime: '2023-04-04',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'unconfirm',
  },
  {
    createdTime: '2023-02-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'cleared',
  },
  {
    createdTime: '2023-01-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'actived',
  },
  {
    createdTime: '2023-05-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'cleared',
  },
  {
    createdTime: '2023-05-01',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'confirmed',
  },
  {
    createdTime: '2023-04-04',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'unconfirm',
  },
  {
    createdTime: '2023-02-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'cleared',
  },
  {
    createdTime: '2023-01-03',
    name: 'Tom',
    type: '高温',
    severity: 'alarm',
    assignee: 'admin',
    status: 'actived',
  },
]
let alarm_query: Ref<AlarmQuery> = ref({
  pageSize: 10,
  page: 1,
})

function toDetail(row: Alarm): void {
  //TODO
  console.log('row', row)
}

async function getAlarmsList() {
  alarmListData = await getAlarms(unref(alarm_query))
}
//#endregion

//#region 分页
let pagination: Pager = {
  current_page: 1,
  page_size: 10,
  page_sizes: [10, 20, 50],
  total: 11,
  layout: 'sizes, prev, pager, next',
}
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

function handleSizeChange(val: number) {
  console.log('当前每页尺寸为val：', val)
  getAlarmsList()
}
function handleCurrentChange(val: number) {
  console.log('当前页为val：', val)
  getAlarmsList()
}

//#endregion
</script>

<style lang="scss" scoped>
#alarm_container {
  padding: $half-space;
  background-color: $page-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border-radius: $half-border-radius;
}

.el-table .warning-row {
  --el-table-tr-bg-color: $second-light-color;
}
.el-pagination {
  justify-content: flex-end;
}
</style>
