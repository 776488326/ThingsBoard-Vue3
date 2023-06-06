import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register'
import globalComponentsRegistry from '@/components/index.ts'
import '@/styles/index.scss'
import store from '@/stores/index.ts'
import router from '@/router/index.ts'


const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
  // 自定义全局未捕获错误处理
  console.table([err, instance, info], ['err', 'component', 'info'])
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

console.log('import.meta.env', import.meta.env)
