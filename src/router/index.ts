import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { userMessageStore } from '@/stores/user.ts'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach((to) => {
  nprogress.start()
  const store = userMessageStore()
  if (!store.user_message.isAuthenticated && to.name !== 'Login') {
    console.log('redirect')
    return {
      name: 'Login',
    }
  }
})
router.afterEach((to) => {
  nprogress.done()
  document.title = `ThingsBoard | ${to.meta.title}`
})

export default router
