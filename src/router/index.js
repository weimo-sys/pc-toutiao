// 配置路由
import VueRouter from 'vue-router'

// 使用路由
import Vue from 'vue'
// 导入登录组件
import Login from '@/views/login'

Vue.use(VueRouter)

// 路由实例化
const router = new VueRouter({
  routes: [
    // 配置路由地址和组件对应关系
    { path: '/login', component: Login }
  ]
})

// 导出路由
export default router
