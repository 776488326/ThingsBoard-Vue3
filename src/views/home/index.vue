<script setup>

import { ElNotification } from 'element-plus';
import { onMounted, ref } from "vue";
import { userMessageStore } from "@/stores/user.ts";
const useStore = userMessageStore();
const message = ref("上午好");

onMounted(() => {
    const time = new Date();
    let hour = time.getHours();
    if (hour < 12 && hour >= 6) {
        message.value = "早上好"
    } else if (hour >= 12 && hour < 19) {
        message.value = "下午好"
    } else {
        message.value = "晚上好"
    }
    ElNotification({
        title: `hi, ${useStore.user_message.userName}`,
        message: message.value,
        type: "success",
    })
})
</script>

<template>
    <main id="container">
        <section id="use_case">
    
        </section>
        <section id="start">
            
        </section>
        <section id="device"></section>
        <section id="alarm"></section>
        <section id="dashboard"></section>
        <section id="activity"></section>
        <section id="links"></section>
        <section id="document"></section>
        <section id="usage"></section>
    </main>
</template>

<style scoped lang="scss">
#container {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(11,1fr);
    grid-template-rows: 1fr 1fr 2fr 1fr;
    gap: 16px;
    section{
        background-color: #fff;
    }
    #use-case{
        grid-column: 1/8;
        grid-row: 1;
    }
    #start{
        grid-column: 9/11;
        grid-row: 1 / 5;
    }
    #device{
        grid-column: 1/4;
        grid-row: 2;
    }
    #alarm{
        grid-column: 5/8;
        grid-row: 2;
    }
    #dashboard{
        grid-column: 1/4;
        grid-row: 3/4;
    }
    #activity{
        grid-column: 5/8;
        grid-row: 3/4;
    }
    #links{
        grid-column: 1/2;
        grid-row: 5;
    }
    #document{
        grid-column: 3/5;
        grid-row: 5;
    }
    #links{
        grid-column: 6/8;
        grid-row: 5;
    }
}
</style>
