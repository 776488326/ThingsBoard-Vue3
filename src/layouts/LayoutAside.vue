<script setup>

</script>

<template>
    <el-container :direction="vertical">
        <el-header>
            <!-- Header content -->
        </el-header>
        <el-main>
            <!-- Main content -->
        </el-main>
        
    </el-container>
    
</template>

<style lang="scss" scoped>
    .el-container {
        height: 100%;
        .el-header,.el-main{
            width: 100%;
        }
        .el-header{
            height: $headerHeight;
            background-color: #fff;
        }
    }
</style>