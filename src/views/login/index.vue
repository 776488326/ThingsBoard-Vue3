<script setup lang="ts">
import { Message, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import FadeTransition from '@/components/fade_transition/index.vue'
import { userMessageStore } from '@/stores/user.ts'
import router from '@/router/index.ts'
const store = userMessageStore()
const loginForm = reactive({
  userName: '',
  password: '',
})
let isRemeber = ref(false)
// 处理记住密码
let tempStatus = localStorage.getItem('isRemeber')
if (tempStatus) {
  isRemeber.value = JSON.parse(tempStatus)
  if (isRemeber.value) {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      isRemeber.value = false
    } else {
      const { userName, password } = JSON.parse(userInfo)
      loginForm.password = password
      loginForm.userName = userName
    }
  }
}

let signUp = reactive({
  firstName: '',
  lastName: '',
  password: '',
  email: '',
})
let loading = ref(false)
let isRegistrySuccess = ref(false)
let isSignUp = ref(false)
async function submitForm() {
  let res = await store.userLogin(loginForm)
  if (res) {
    localStorage.setItem('userInfo', JSON.stringify(loginForm))
    localStorage.setItem('isAuthenticated', JSON.stringify(true))
    localStorage.setItem('isRemeber', JSON.stringify(isRemeber.value))
    router.push({ name: 'Layout' })
  }
}

async function registryUser() {
  loading.value = true
  let res = await store.userRegistry(signUp)
  isRegistrySuccess.value = !!res
  loginForm.password = store.user_message.password as string
  loginForm.userName = store.user_message.userName as string
  loading.value = false
}
</script>

<template>
  <div class="container">
    <el-scrollbar height="800px" id="login_container">
      <form>
        <header id="login_logo">
          <img
            id="img"
            aria-label="logo"
            src="/logo_title_white.svg"
            alt="login_icon"
          />
        </header>
        <label id="label">Log in to see ThingsBoard in action</label>
        <fieldset id="login_btn">
          <el-button disabled class="elb" size="default" @click="">
            Google登录
          </el-button>
          <el-button disabled class="elb" size="default" @click="">
            Facebook登录
          </el-button>
          <el-button disabled class="elb" size="default" @click="">
            Github登录
          </el-button>
          <el-button disabled class="elb" size="default" @click="">
            Apple登录
          </el-button>
        </fieldset>
        <fieldset id="login_divider">
          <section class="left"></section>
          <section class="center">或</section>
          <section class="right"></section>
        </fieldset>
        <FadeTransition name="bounce">
          <fieldset id="sign_up" v-if="isSignUp">
            <section id="registry_operate">
              <legend id="sign_up_title">注册账号</legend>
              <el-button size="default" @click="isSignUp = false" text>
                返回登录
              </el-button>
            </section>
            <section id="fullname">
              <el-input v-model="signUp.firstName" placeholder="姓"></el-input>
              <span id="place">&nbsp</span>
              <el-input v-model="signUp.lastName" placeholder="名"></el-input>
            </section>
            <el-input
              :prefix-icon="Message"
              v-model="signUp.email"
              type="email"
              placeholder="用户名（电子邮件）*"
            ></el-input>
            <el-input
              :prefix-icon="Lock"
              show-password
              v-model="signUp.password"
              type="password"
              placeholder="密码"
            ></el-input>

            <el-button
              id="registry"
              type="primary"
              @click="registryUser"
              :loading="loading"
            >
              {{ isRegistrySuccess ? '注册成功' : '注册' }}
            </el-button>
          </fieldset>
          <fieldset v-else>
            <fieldset id="login_form">
              <el-input
                v-model="loginForm.userName"
                placeholder="用户名（电子邮件）*"
                type="email"
                :prefix-icon="Message"
              ></el-input>
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
                type="password"
                show-password
                :prefix-icon="Lock"
              ></el-input>
            </fieldset>
            <fieldset id="login_operate">
              <el-checkbox v-model="isRemeber" label="记住密码" />
              <el-button text size="default" @click="isSignUp = true">
                注册账号
              </el-button>
            </fieldset>
            <fieldset id="login_submit">
              <el-button id="submit" type="primary" @click="submitForm">
                登录
              </el-button>
            </fieldset>
          </fieldset>
        </FadeTransition>
      </form>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;

  #login_container {
    background-color: $theme-color;
    width: 35%;
    height: 800px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
      color: $font-color;
      text-align: center;
    }
    #login_btn {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      .elb {
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
      .left,
      .right {
        height: 2px;
        width: 45%;
        // background-color: $loginFsLightColor;
      }
    }
    #login_form {
      margin: 10px 20px;
      :deep(.el-input__wrapper) {
        margin: 25px 0px;
      }
    }
    #login_operate {
      margin: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #sign_up {
      margin: 50px 20px;
      #registry_operate {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      #sign_up_title {
        color: $font-color;
        font-weight: bold;
        font-size: 24px;
        margin: 20px;
      }
      #fullname {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
      }
      :deep(.el-input__wrapper) {
        margin: 10px 0px;
      }
    }
    #login_submit {
      margin: 40px 20px 10px;
    }
    #submit,
    #registry {
      margin: 10px 0px;
      width: 100%;
      background-color: $second-light-color;
      border: none;
      padding: 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (width<=768px) {
    #login_container {
      width: 80%;
    }
  }
  @media (width>=1920px) {
    #login_container {
      width: 20%;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
