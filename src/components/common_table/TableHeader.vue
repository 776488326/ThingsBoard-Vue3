<template>
    <main id="box">
        <section id='left'>
            <h2 v-if="name" style="margin-right: 16px;">{{name}}</h2>
            <slot name="left"></slot>
        </section>
        <section id="right">
            <slot name="right"></slot>
            <el-icon @click="refreshTable"><RefreshLeft /></el-icon>
            <el-icon @click="toggleSearch" v-if="!issearch"><Search /></el-icon>
            <el-input v-model="searchValue" v-else placeholder="searchPlacehold" clearable @blur="closeSearch" @input="searchTable">
                <template #prefix>
                <el-icon :size="18" class="el-input__icon"><search /></el-icon>
                </template>
            </el-input>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { RefreshLeft, Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
export interface TableHeaderProps {
    name: string
    searchPlacehold?: string
}
withDefaults(defineProps<TableHeaderProps>(),{
    name: "",
    searchPlacehold: "搜索"
})
const searchValue = ref("");
const issearch = ref(false);

const emits = defineEmits(["refresh", "search"])
function refreshTable(){
    emits("refresh");
}

function searchTable(){
    emits("search", searchValue.value);
}

function toggleSearch(){
    issearch.value = true;
}
function closeSearch(){
    issearch.value = false;
}
</script>

<style lang="scss" scoped>
    #box {
        width: 100%;
        min-height: 50px;
        position: relative;
        display: flex;
        justify-content: space-between;
        #left , #right{
            display: flex;
            align-items: center;
        }
        #right {
            .el-input {
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
            }
            .el-icon {
                margin-left: $space;
                font-size: 24px;
                color: $second-light-color;
                &:hover{
                    cursor: pointer;
                    color: $second-color;
                }
            }
        }
    }
    
</style>