import Vue from 'vue'
import App from './App.vue'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入路由
import router from '@/router'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  // 挂载
  router,
  render: h => h(App)
}).$mount('#app')
