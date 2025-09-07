<template>
  <div class="login">
    <div class="loginform">
        <h2 class="login-title">登录</h2>
        
        <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="用户名" class="form-input"/>
        <input type="password" v-model="password" placeholder="密码" class="form-input"/>
        <button type="submit" class="login-btn">登录</button>
        <div class="forgot-password">
            <a-popconfirm
                title="你确定忘记密码了吗?"
                cancel-text="记得"
                ok-text="确定"
                @cancel="cancel"
                @confirm="confirm"
            >
                <a href="#">忘记密码?</a>
            </a-popconfirm>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false
    }
  },
  // 页面加载时检查是否已经登录过
  created() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    }
  },
  methods: {
    async handleLogin() {
       // 2. 发送GET请求到json-server，查询是否有对应用户
      try {
        const response = await axios.get('http://localhost:3001/users', {
          params: {
            username: this.username,
            password: this.password
          }
        });
        console.log(response.data)
         // 3. 判断返回的数组是否有一条数据（说明用户存在）
        if (response.data.length === 1) {
          const user = response.data[0];
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', user.username);
          localStorage.setItem('name', user.name); // 可以存更多信息
          message.success(`欢迎回来，${user.name}！`);
          this.$router.push('/');
        } else {
          this.username = '';
          this.password = '';
          message.error('用户名或密码错误！');
        }
      } catch (error) {
        console.error('登录请求失败：', error);
        alert('网络请求失败，请稍后重试');
      }
    },
    confirm(){
        message.info('我咋知道你密码');
    },
    cancel(){
        message.error('记得还点啥');
    }
  }
}
</script>

<style scoped>
    /* 基本的页面样式 */
    .login {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5; /* 背景为浅灰色 */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    /* 表单样式 */
    .loginform {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    .login-title {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }

    /* 输入框样式 */
    .form-input {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
    }

    .form-input:focus {
        border-color: #4a90e2;
        outline: none;
        box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
    }

    /* 按钮样式 */
    .login-btn {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #4a90e2, #3273dc);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .login-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .login-btn:active {
        transform: translateY(0);
    }

    /* 忘记密码链接样式 */
    .forgot-password {
        text-align: right;
        margin-top: 15px;
    }

    .forgot-password a {
        color: #4a90e2;
        text-decoration: none;
        font-size: 14px;
    }

    .forgot-password a:hover {
        text-decoration: underline;
    }
</style>