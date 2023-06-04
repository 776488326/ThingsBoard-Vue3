import { defineStore } from "pinia";
import { reactive } from "vue";
import type { LoginForm, Counter } from "@/api/user/type"
import { requestLogin, requestSignUp } from "@/api/index.ts";
import type { Success, Fail } from "@/api/common_type"
export const userMessageStore = defineStore("userMessage",()=>{
    // computed 是 getters
    // function 是 actions
    // ref 是 state
    interface UserMessage {
        userName: String,
        password: String,
        isAuthenticated: Boolean
    }

    const user_message: UserMessage = reactive({
        userName: "",
        password: "",
        isAuthenticated: false
    });

    async function userLogin(data: LoginForm){
        
        const res : Success | Fail | any  =  await requestLogin(data);

        if(res){
            user_message.userName = res.data.userName;
            user_message.password = res.data.password;
            user_message.isAuthenticated = !!res.data.isAuthenticated;
        }else{
            console.log('userLogin: ',res);
        }
        return res;
    }
    async function userRegistry(data:Counter) {
        const res: Success | Fail | any = await requestSignUp(data);

        // 以下是正常的注册流程
        if(res){
            user_message.userName = res.data.userName;
            user_message.password = res.data.password;
        }else{
            console.log("userRegistry: ",res)
        }
        return res;
    }
    return {
        user_message,
        userRegistry,
        userLogin
    }
} )