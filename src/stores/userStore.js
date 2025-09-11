import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 初始值：优先从sessionStorage取真实用户，否则设为「未登录」
  const currentUser = ref(
    JSON.parse(sessionStorage.getItem('currentUser')) || { username: '未登录' }
  )

  // 登录成功时：存储用户信息到Pinia和sessionStorage
  const setUser = (userInfo) => {
    currentUser.value = userInfo
    sessionStorage.setItem('currentUser', JSON.stringify(userInfo))
  }

  // 登出时：清空用户信息，重置为「未登录」
  const clearUser = () => {
    currentUser.value = { username: '未登录' }
    sessionStorage.removeItem('currentUser')
  }

  return {
    currentUser, // 全局可访问的用户信息（未登录时为 { username: '未登录' }）
    setUser,     // 登录成功时调用，存储真实用户
    clearUser    // 登出时调用，重置为未登录
  }
})