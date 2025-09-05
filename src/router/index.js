import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotTop from '@/views/hottop/HotTop.vue'
import Dujitang from '@/views/dujitang/Dujitang.vue'
import Weather from '@/views/weather/Weather.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dujitang',
    name: 'dujitang',
    component: Dujitang
  },
  {
    path: '/hottop',
    name: 'hottop',
    component: HotTop
  },
  {
    path:'/weather',
    name:'weather',
    component:Weather
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
