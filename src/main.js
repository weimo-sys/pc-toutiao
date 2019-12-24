import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  // 挂载
  router,
  render: h => h(App)
}).$mount('#app')
