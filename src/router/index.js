import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotTop from '@/views/hottop/HotTop.vue'
import Dujitang from '@/views/dujitang/Dujitang.vue'
import Weather from '@/views/weather/Weather.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/register/Register.vue'
import Admin from '@/components/Admin.vue'

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

  },
  {
    path:'/register',
    name:'register',
    component:Register,
  },
  {
    path:'/admin',
    name:'admin',
    component:Admin,
    meta: { requiresAuth: true }  //需要验证登录的页面
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router/index.js 中导航守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth) //boolean值判断是否需要验证访问
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true' //调用getItem方法，如果存储过isLoggedIn,读取浏览器会话存储中的登录标记，有标记则为true
  
  //以下用于测试查看当前信息
  console.log('导航守卫检查:', {
    to: to.path,
    requiresAuth,
    isLoggedIn, // 关键：登录后这里是否为 true？
    // token: sessionStorage.getItem('isLoggedIn') // 查看 token 是否存在
  })
  
  //判断是否该页面需要验证并且未标记
  if (requiresAuth && !isLoggedIn) {
    //如果是
    sessionStorage.setItem('redirectPath', to.fullPath)
    next('/login') // 跳转到login登录页面
  } else {
    next()  //如果不是，直接放行
  }
})

export default router
