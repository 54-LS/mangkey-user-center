<template>
    <div id="dujitang">
        <div class="container">
            <h1 style="font-size: 30px; font-family: 'Gochi Hand', cursive;">每日一言</h1>
            <div class="jitangwords">
                <ul style="list-style-type: none;">
                    <li v-for="item in jitangData" :key="item.id" class="words">{{ item }}</li>
                </ul>
            </div>
            <a-space wrap>
                <a-button type="primary" @click="getwords">点击获得一句毒鸡汤</a-button>
            </a-space>
        </div>
    </div>
</template>

<script setup>
import { getDujitang } from '@/network/hottop';
import { reactive, ref } from 'vue';
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

//存储鸡汤数据
const jitangData = reactive([])

const router = useRouter()

onMounted(() => {
  // 检查是否有额外的权限验证逻辑，如果有，确保正确实现
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
  }
})
//点击按钮获取鸡汤
const getwords = ()=>{
    getDujitang().then(res=>{
        jitangData.push(res.data.data)
    })
}

</script>

<style>
#dujitang{
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: #333;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.container {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    text-align: center;
    padding: 10px;
}
.words{
    font-size: 20px;
    color: black;
    font-family:'Indie Flower', cursive;
    padding: 10px;
}
</style>