import { createApp } from 'vue'
import App from './App.vue'
import vueDragResizeRotate from './lib/vueDragResizeRotate.vue';
import './assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(vueDragResizeRotate)
app.mount('#app')
