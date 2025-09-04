import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotTop from '@/views/hottop/HotTop.vue'
import Dujitang from '@/views/dujitang/Dujitang.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
