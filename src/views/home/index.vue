<script setup>

import { ElNotification } from 'element-plus';
import { onMounted, ref }from "vue";
import { userMessageStore } from "@/stores/user.ts";
const useStore = userMessageStore();
const message = ref("上午好");

onMounted(() => {
    const time = new Date();
    let hour = time.getHours();
    if(hour<12&&hour>=6){
        message.value = "早上好"
    }else if(hour>=12&&hour<19){
        message.value = "下午好"
    }else{
        message.value = "晚上好"
    }
    ElNotification({
        title: `hi, ${useStore.user_message.userName}`,
        message: message.value,
        type: "success"
    })
})
</script>

<template>hahah</template>
