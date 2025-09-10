<template>
    <div id="hottop">
        <!-- {{ hottopData }} -->
        <div class="box">
            <div :style="{ height: '300vh', padding: '10px' }">
                <div class="name">
                    <h2>今日热搜榜</h2>
                </div>
                <div class="bar" v-for="item in hottopData" :key="item.index">
                    <div class="ind">{{item.index}}</div>
                    <div class="content"><a :href="item.url">{{ item.title }}</a></div>
                    <div class="num">
                        <img src="@/assets/hot.png" alt="hot" width="20px" height="20px">
                        {{ item.hot }}
                    </div>
                </div>
                <a-back-top style="position: fixed; right: 440px;"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getHotTop } from '@/network/hottop';
import { ref } from 'vue';

//存储热搜数据
const hottopData = ref([]);

//获取热搜数据
getHotTop().then(res=>{
    hottopData.value = res.data.data;
})

</script>

<style scoped>
#hottop{
    background-color: #F2F2F2;
}
.box{
    width: 500px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
}
.box .name{
    text-align: center;
    border-bottom: 10px solid #F2F2F2;
    background-color: red;
    color: white;
}
.box .name h2{
    margin-top: 10px;
    padding-top: 10px;
}
.bar{
    display: flex;
    align-items: center;
    border: 1px solid #F2F2F2;
    padding: 10px;
    width: 100%;
}
.bar .ind{
    color: red;
    font-weight: bold;
    font-style: italic;
    font-size: 18px;
}
.bar .content{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
}
.bar .ind,.content{
    margin-right: 10px;
}
a{
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>