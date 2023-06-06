<script setup>
import SideBarMenu from "@/components/side_bar_menu/index.vue"
</script>

<template>
    <el-container :direction="vertical">
        <el-header>
            <img src="/logo_title_white.svg" alt="logo">
        </el-header>
        <el-main>
            <el-scrollbar>
                <SideBarMenu></SideBarMenu>
            </el-scrollbar>
        </el-main>

    </el-container>
</template>

<style lang="scss" scoped>
.el-container {
    height: 100%;

    .el-header,
    .el-main {
        width: 100%;
    }

    .el-header {
        height: $headerHeight;
        box-shadow: 5px 5px 10px $themeLightColor;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 70%;
        }
    }

    .el-main {
        .el-scrollbar {
            height: 100%;
        }
    }
}
</style>