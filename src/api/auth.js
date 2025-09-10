import instance from "@/network/request"

export const loginApi = (credentials) => {
  // 根据JSON Server的规则，我们可以通过GET请求/users?username=xxx&password=xxx来查找用户
  // 注意：在实际应用中，密码不会以明文方式传输，也不会以明文形式存储在数据库中。这里仅为演示。
  return instance.get('/users', {
    params: {
      username: credentials.username,
      password: credentials.password
    }
  }).then(response => {
    // 如果找到用户，数组长度应大于0
    if (response.data.length > 0) {
      // 返回用户信息和模拟的token
      return {
        user: response.data[0],
        token: '模拟的token'
      }
    } else {
      throw new Error('用户名或密码错误')
    }
  })
}