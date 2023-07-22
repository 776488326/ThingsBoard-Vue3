import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import globalComponentsRegistry from '@/components/index.ts'
import '@/styles/index.scss'
import store from '@/stores/index.ts'
import router from '@/router/index.ts'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.config.errorHandler = (err) => {
  // 自定义全局未捕获错误处理
  console.log(err)
}
app.use(ElementPlus, {
  locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(globalComponentsRegistry)
app.use(router)
app.mount('#app')
