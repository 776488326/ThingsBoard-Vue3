<script setup>
import TopBreadCrumb from "@/components/top_breadcrumb/index.vue"
</script>

<template>
    <div class="container">
        <TopBreadCrumb></TopBreadCrumb>
        <section id="function">
            <el-container>
                <SvgIcon name="FullScreen"></SvgIcon>
            </el-container>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #function {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>