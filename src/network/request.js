import axios from 'axios';
import { useAuthStore } from '@/stores/auth';


//小小API接口
export function request(config){
    const instance = axios.create({
        baseURL:'https://v2.xxapi.cn/api',
        timeout:5000
    })

    return instance(config)
}



// 创建实例
const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000
})


// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default instance