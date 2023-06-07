import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { userMessageStore } from '@/stores/user.ts'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes],
})

router.beforeEach((to) => {
  nprogress.start()
  const store = userMessageStore()
  if (!store.user_message.isAuthenticated && to.name !== 'Login') {
    return {
      name: 'Login',
    }
  }
})
router.afterEach(() => {
  nprogress.done()
})

export default router
