<script setup lang="ts">
import { requestLogin } from "@/api/index.ts";
import { Message, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from "vue";
const loginForm = reactive({
  username: "",
  password: ""
});
let ischecked = ref(false);

async function submitForm(){
  const res = await requestLogin(loginForm);
  if(ischecked.value){

  }
  console.log(res);
}
</script>

<template>
  <div class="container">
    <el-scrollbar height="700px" id="login_container">
      <form>
        <header id="login_logo">
          <img id="img" aria-label="logo" src="/logo_title_white.svg" alt="login_icon">
        </header>
        <label id="label">Log in to see ThingsBoard in action</label>
        <fieldset id="login_btn">
          <el-button class="elb" size="default" @click="">Google登录</el-button>
          <el-button class="elb" size="default" @click="">Facebook登录</el-button>
          <el-button class="elb" size="default" @click="">Github登录</el-button>
          <el-button class="elb" size="default" @click="">Apple登录</el-button>
        </fieldset>
        <fieldset id="login_divider">
          <section class="left"></section>
          <section class="center">或</section>
          <section class="right"></section>
        </fieldset>
        <fieldset id="login_form">
          <el-input v-model="loginForm.username" placeholder="用户名（电子邮件）*"  type="email" :prefix-icon="Message"></el-input>
          <el-input v-model="loginForm.password" placeholder="密码" type="password" show-password :prefix-icon="Lock"></el-input>
          <el-checkbox v-model="ischecked" label="记住密码"/>
        </fieldset>
        <fieldset id="login_submit">
          <el-button id="submit" type="primary" @click="submitForm" >登录</el-button>
        </fieldset>
      </form>
    </el-scrollbar>

  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variable.scss";

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: $BgColor;

  
  #login_container {
    background-color: $themeColor;
    width: 35%;
    height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    #login_logo {
      width: 50%;
      height: 60px;
      margin: 30px auto;
      #img {
        width: 100%;
      }
    }
    #label {
      display: block;
      width: 100%;
      color: $loginFsLightColor;
      text-align: center;
    }
    #login_btn {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      .elb{
        margin: 10px 20px;
        font-weight: bold;
      }
    }
    #login_divider {
      margin: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      .left,.right {
        height: 2px;
        width: 45%;
        background-color: $loginFsLightColor;
      }
    }
    #login_form {
      margin: 10px 20px;
      :deep(.el-input__wrapper){
        margin: 25px 0px;
      }
    }
    #login_submit{
      margin: 50px 20px;
      #submit {
        width: 100%;
        background-color: $loginBtnColor;
        border: none;
        padding: 20px;
        border-radius: 5px;
        color: $loginFsColor;
        cursor: pointer;
      }
    }
  }

  @media (width<=768px) {
    #login_container{
      width: 80%;
    }
  }
  @media (width>=1920px) {
    #login_container{
      width: 20%;
    }
  }
}
</style>