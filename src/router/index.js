import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotTop from '@/views/hottop/HotTop.vue'
import Dujitang from '@/views/dujitang/Dujitang.vue'
import Weather from '@/views/weather/Weather.vue'
import Login from '@/views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dujitang',
    name: 'dujitang',
    component: Dujitang,
    meta: { requiresAuth: true }  //需要验证登录的页面
  },
  {
    path: '/hottop',
    name: 'hottop',
    component: HotTop,
    meta: { requiresAuth: true }  //需要验证登录的页面
  },
  {
    path:'/weather',
    name:'weather',
    component:Weather,
    meta: { requiresAuth: true }  //需要验证登录的页面
  },
  {
    path:'/login',
    name:'login',
    component:Login,

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router/index.js 中导航守卫的关键逻辑
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // 重点检查这里的判断逻辑！
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'
  
  console.log('导航守卫检查:', {
    to: to.path,
    requiresAuth,
    isLoggedIn, // 关键：登录后这里是否为 true？
    token: sessionStorage.getItem('isLoggedIn') // 查看 token 是否存在
  })
  
  if (requiresAuth && !isLoggedIn) {
    sessionStorage.setItem('redirectPath', to.fullPath)
    next('/login') // 如果登录后这里仍进入，说明 isLoggedIn 为 false
  } else {
    next()
  }
})

export default router
