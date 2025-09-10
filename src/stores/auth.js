import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginApi } from '@/api/auth' // 假设有一个登录的API函数

export const useAuthStore = defineStore('auth', () => {
  const token = ref(sessionStorage.getItem('token'))
  const isAuthenticated = computed(() => !!token.value)

  function setToken(newToken) {
    token.value = newToken
    sessionStorage.setItem('token', newToken)
  }

  function clearToken() {
    token.value = null
    sessionStorage.removeItem('token')
  }

  async function login(credentials) {
    try {
      const response = await loginApi(credentials) // 调用登录API
      setToken(response.data.token) // 假设返回数据中有token
      return Promise.resolve(response)
    } catch (error) {
      clearToken()
      return Promise.reject(error)
    }
  }

  function logout() {
    clearToken()
  }

  return {
    token,
    isAuthenticated,
    login,
    logout
  }
})