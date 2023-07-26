<template>
    <el-table :data="tableData" style="width: 100%" :max-height="maxHeight">
        <el-table-column v-for="(column, index) in columns" :key="index" :prop="column.prop" :label="column.label" :width="column.width" :fixed="column.fixed" />
        <el-table-column fixed="right" label="Operations" width="120" :v-if="expend">
            <slot name="expand">
                
            </slot>
        </el-table-column>
        <template v-slot:empty="">
            <el-empty :description="emptyDescription" />
        </template>
    </el-table>
</template>

<script lang="ts" setup>
export interface Column {
    fixed?: boolean
    prop: string
    label: string
    width?: string | number
}
export interface TableProps {
    tableData: Array<any>
    columns: Array<Column>
    expend?: boolean,
    maxHeight: string | number,
    emptyDescription: string
}

withDefaults(defineProps<TableProps>(),{
    tableData: ()=>[],
    maxHeight: "678px",
    expend: true,
    emptyDescription: "无数据"
})

</script>

<style lang="scss" scoped>
    .el-table{
        height: 100%;
    }
</style>