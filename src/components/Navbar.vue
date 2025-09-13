<template>
    <div id="navbar">
        <div flex="20px" class="logo1">
          <img src="@/assets/logo.png" style="height: 50px;border-radius: 20px; margin-top: 10px;">
          <p>忙key用户中心</p>
        </div>
        <div flex="auto" class="menu2">
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" class="menubar" @click="menuClick"/>
        </div>
        <div flex="200px" class="btn3">
          <div style="margin-right: 10px;">{{ userStore.currentUser.username }}</div>
          <a-button type="primary" @click="clickLogin"  v-if="userStore.currentUser.username == '未登录'" class="loginbtn">登录</a-button>
          <div v-if="userStore.currentUser.username !== '未登录'">

                  <a-popover>
                    <template #content>
                      <a-button danger @click="clickLoginOut">退出登录</a-button>
                    </template>
                    <a-button type="primary"  class="loginbtn">设置</a-button>
                  </a-popover>

          </div>
        </div>
    </div>  
</template>
<script setup>
import { h, ref } from 'vue';
import { HomeOutlined,TaobaoCircleOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore()
//配置路由器
const router = useRouter();
//菜单点击触发事件
const menuClick = ({ item, key, keyPath })=>{
    router.push({
      path: key
    })
 }

//点击登录按钮,跳转登录页面
const clickLogin = ()=>{
  router.push('/login');
}

// 点击退出登录按钮
const clickLoginOut = ()=>{
  const userStore = useUserStore()
  userStore.clearUser();
  // 1. 清除登录状态标识（与路由守卫逻辑一致）
  sessionStorage.removeItem('isLoggedIn');
  // 2. 清除用户信息（若有存储）
  sessionStorage.removeItem('currentUser');
  // 3. 跳转到登录页
  router.push('/login');
}



const current = ref(['/']);

//每次刷新导航条根据当前路由高亮
router.afterEach((to,form,next)=>{
  current.value = [to.path];
})

const items = ref([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '首页',
    title: 'home',
  },
  {
    key: '/dujitang',
    icon:()=>h('img',{
      src:require('@/assets/soup.png'),
      style:"width:15px;height:15px;"
    }),
    label: '毒鸡汤',
    title: 'dujitang',
  },
  {
    key: '/hottop',
    icon:()=>h('img',{
      src:require('@/assets/hottop.png'),
      style:"width:15px;height:15px;"
    }),
    label: '热搜',
    title: 'hottop',
  },
  {
    key: 'taobao',
    icon: () => h(TaobaoCircleOutlined),
    label: h(
      'a',
      {
        href: 'https://www.taobao.com/',
        target: '_blank',
      },
      '淘宝',
    ),
    title: '淘宝',
  },
]);
</script>

<style scoped>
#navbar{
  display: flex;
  height: 100%;
  text-wrap: nowrap;
}
.logo1{
  flex: 2;
}
.logo1 p{
    display: inline;
    position: relative;
    bottom: 15px;
    left: 10px;
    font-size: 20px;
    font-weight: 700;
}
.menu2{
  flex: 8;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 200px;
  padding-left: 20px;
}
.btn3{
  flex: 1;
  display: flex;
  justify-content: space-between
}
.btn3 .loginbtn{
  margin-top: 15px;
}
</style>