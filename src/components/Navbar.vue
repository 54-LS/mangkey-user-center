<template>
    <div id="navbar">
        <div flex="20px" class="logo1">
          <img src="@/assets/logo.png" style="height: 50px;border-radius: 20px;">
          <p>忙key用户中心</p>
        </div>
        <div flex="auto" class="menu2">
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" class="menubar" @click="menuClick"/>
        </div>
        <div flex="100px" class="btn3"><a-button type="primary">登录</a-button></div>
    </div>  
</template>
<script setup>
import { h, ref } from 'vue';
import { HomeOutlined,TaobaoCircleOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

//配置路由器
const router = useRouter();
//菜单点击触发事件
const menuClick = ({ item, key, keyPath })=>{
    router.push({
      path: key
    })
 }
const current = ref(['/']);
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
}
</style>