import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { userMessageStore } from "@/stores/user.ts"


const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes],
})

router.beforeEach((to)=>{
  const store = userMessageStore();
  if(!store.user_message.isAuthenticated&&to.name!=="Login"){
    return {
      name: "Login"
    }
  }
})

export default router
