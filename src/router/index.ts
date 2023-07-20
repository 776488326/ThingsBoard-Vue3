import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach((to) => {
  nprogress.start()
  const isAuth = JSON.parse(localStorage.getItem("isAuthenticated")||"false");
  console.log('isAuth',isAuth)
  if (!isAuth && to.name !== 'Login') {
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
