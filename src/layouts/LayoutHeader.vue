<script setup>
import TopBreadCrumb from '@/components/top_breadcrumb/index.vue'
import { userMessageStore } from "@/stores/user.ts"
import { requestLogout } from "@/api/user/logout.ts"
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router"
const isfull = ref(false)
function changeFull() {
  if (!isfull.value) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
  isfull.value = !isfull.value
}
const useStore = userMessageStore();
const router = useRouter();
async function logout(params) {
  let { code, message } = await requestLogout();
  if(code===200){
    ElMessage({
      message,
      type: 'success',
    })
    localStorage.setItem('isAuthenticated', JSON.stringify(false));
    router.push({name: "Login"});
  }else{
    ElMessage({
      message,
      type: 'error',
    })
  }
}
</script>

<template>
  <div class="container">
    <TopBreadCrumb></TopBreadCrumb>
    <section id="function">
      <el-container>
        <SvgIcon
          name="fullscreen"
          width="18px"
          height="18px"
          color="red"
          v-if="!isfull"
          @click="changeFull"
          style="cursor: pointer"
        ></SvgIcon>
        <SvgIcon
          name="offscreen"
          width="18px"
          height="18px"
          color="red"
          v-else
          @click="changeFull"
          style="cursor: pointer"
        ></SvgIcon>
        <SvgIcon
          name="bell"
          width="18px"
          height="18px"
          style="cursor: pointer"
        ></SvgIcon>
        <section id="user">
          <section id="avatar">
            <SvgIcon
            name="fire"
            width="18px"
            height="18px"
            style="cursor: pointer"
          ></SvgIcon>
          </section>
          <section id="info">
            {{useStore.user_message.userName}}
          </section>
        </section>
        <el-dropdown trigger="click">
          <SvgIcon
            name="more"
            width="18px"
            height="18px"
            style="cursor: pointer"
            @click="toogleMenu"
          ></SvgIcon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="Tools">属性</el-dropdown-item>
              <el-dropdown-item icon="Avatar">安全</el-dropdown-item>
              <el-dropdown-item icon="Expand" @click="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
    .el-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      #user{
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .el-dropdown-item{
        color: $white;
      }
    }
  }
}
</style>
