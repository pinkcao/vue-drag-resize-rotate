// // 导入入口样式文件
// import './styles/index.scss'
// 导入所有组件
import { vueDragResizeRotate } from './vueDragResizeRotate/index'
const components = {
  vueDragResizeRotate
}
// 定义 install 方法，在Vue中注册组件。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  //判断是否已经注册
  if (install.installed) return
  //循环注册组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  install,
  ...components
}
export default API
