import SvgIcon from './svg_icon/index.vue'
const globalComponents = {
  SvgIcon,
}
console.log('globalComponents', globalComponents)
export default {
  install(app: any) {
    Object.entries(globalComponents).forEach((item) => {
      app.component(item[0], item[1])
    })
  },
}
