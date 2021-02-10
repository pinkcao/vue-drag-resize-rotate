import Vue from 'vue'
import App from './App.vue'
import vueDragResizeRotate from './lib/vueDragResizeRotate.vue';
import './assets/iconfont/iconfont.css'

Vue.use(vueDragResizeRotate)
new Vue({
  el: '#app',
  render: h => h(App)
})
