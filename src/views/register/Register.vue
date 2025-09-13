<template>
  <div class="register">
    <div class="registerform">
        <h2 class="register-title">注册</h2>   
        <form @submit.prevent="handleRegister">
            <input type="text" v-model="name" placeholder="姓名" class="form-input"/>
            <input type="text" v-model="username" placeholder="用户名" class="form-input"/>
            <input type="password" v-model="password" placeholder="密码" class="form-input"/>
            <input type="password" v-model="passwordConfirm" placeholder="确认密码" class="form-input"/>
            <button type="submit" class="register-btn">注册</button>
        </form>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
import { registerUser } from '@/network/register';
import { getUserData } from '@/network/login';
import router from '@/router';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    async handleRegister() {
      // 首先验证输入是否为空
      if (!this.username.trim()) {
        message.warning('请输入用户名！');
        return; // 阻止后续请求
      }
      if (!this.password.trim()) {
        message.warning('请输入密码！');
        return; // 阻止后续请求
      }
      if (!this.passwordConfirm.trim()) {
        message.warning('请确认密码！');
        return; // 阻止后续请求
      }
      if (!this.name.trim()) {
        message.warning('请输入姓名！');
        return; // 阻止后续请求
      }
      if (this.password!=this.passwordConfirm){
        message.warning('两次密码不一致');
        return; // 阻止后续请求
      }

    try {
        // 从JSON Server获取用户（模拟后端请求）
        const response = await getUserData(this.username, this.password)
        
        if(response.data.length>0){
            message.error('该用户已存在，请更换用户名！');
            return; // 阻止后续请求
        }
        else{
            await registerUser(this.name,this.username,this.password)
            message.success('注册成功！');
            router.push('/login');
        }
      } 
    catch (error) {
        console.error('登录请求失败：', error);
        alert('网络请求失败，请稍后重试');
      }
    }
  }
}
</script>

<style scoped>
    /* 基本的页面样式 */
    .register {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5; /* 背景为浅灰色 */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    /* 表单样式 */
    .registerform {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    .register-title {
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
    .register-btn {
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