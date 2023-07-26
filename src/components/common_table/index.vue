<template>
    <main id="table_box">
        <section id="header">
            <TableHeader :name="name" :search-placehold="searchPlacehold">
                <template v-slot:left="">
                    <slot name="table_head_left"></slot>
                </template>
                <template v-slot:right="">
                    <slot name="table_head_right"></slot>
                </template>
            </TableHeader>
        </section>
        <section id="table">
            <Table :table-data="tableData" :columns="columns" :max-height="maxHeight" :expend="expend" :empty-description="emptyDescription">
                <template v-slot:expand="">
                    <slot name="table_column"></slot>
                </template>
            </Table>
        </section>
        <section id="pagination">
            <TablePager :pagination="pagination"></TablePager>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import TableHeader from './TableHeader.vue';
import Table from './Table.vue';
import TablePager from './TablePager.vue';
import type { TableProps } from "./Table.vue";
import type { TableHeaderProps } from "./TableHeader.vue";
import type { TablePagerProps } from "./TablePager.vue"

export type Props = TableProps & TableHeaderProps & TablePagerProps;

defineProps<Props>()

onMounted(() => {
    const obs = new ResizeObserver((entries)=>{
            entries.forEach((item)=>{
            console.log('item.borderBoxSize',item.borderBoxSize);
        })
    });
    let target = document.querySelector("#table_box");
    if(target){
        obs.observe(target, {
            box: "border-box"
        })
    }
})
</script>

<style lang="scss" scoped>
    #table_box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        #header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        #table {
            margin: $space 0;
            flex: 1;
        }
        #pagination {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>

