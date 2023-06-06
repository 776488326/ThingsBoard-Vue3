import { defineStore } from "pinia"
import { ref } from "vue"
export const useCommonStore = defineStore("useCommon", ()=>{
    const percentage = ref(10);
    return {
        percentage
    }
})