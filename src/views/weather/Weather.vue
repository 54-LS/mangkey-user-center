<template>
    <div id="weather">
        <div class="container">
            <p class="title">天气预报</p>
            <input type="text" placeholder="请输入要查询的城市" v-model="cityName" class="inputBox"/>
            <a-space warp>
                <a-tooltip title="search">
                    <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" @click="summit"/>
                </a-tooltip>
            </a-space>
            <div class="weatherShow">
                <h2 style="font-family: 'Comic Neue', cursive;">城市：{{ weatherData.city }}</h2>
                <table align="center" style="background-color: aliceblue;border-radius: 10px;">
                    <tr>
                        <th>日期</th>
                        <th>温度</th>
                        <th>天气</th>
                        <th>风向</th>
                        <th>空气质量</th>
                    </tr>
                    <tr v-for="data in weatherData.data" :key="data.id" 
                    cellspacing="10px">
                        <td>{{ data.date }}</td>
                        <td>{{ data.temperature }}</td>
                        <td>{{ data.weather }}</td>
                        <td>{{ data.wind }}</td>
                        <td>{{ data.air_quality }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getWeatherData } from '@/network/home';
import { reactive, ref } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';

//城市
let cityName = ref('');
//天气数据
const weatherData = ref([]);

const summit = ()=>{
    if (cityName.value===''){
        alert('请输入城市的名称');
    }else{
        getWeatherData(cityName.value).then(res=>{
            weatherData.value = res.data.data;
            cityName.value = '';
            document.querySelector('.weatherShow').style.display='block';
        })
    }
}


</script>

<style scoped>
#weather{
    background: linear-gradient(135deg, #7184a2 0%, #09295e 100%);
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
.container .title{
    font-size: 30px;
    font-family: 'Indie Flower', cursive;
    color: #074a9c;
    font-weight: 800;
    margin-bottom: 10px;
}
.container .inputBox{
    width: 60%;
    height: 35px;
    border: 1px solid #074a9c;
    border-radius: 10px;
    margin-right: 20px;
}
.weatherShow{
    display: none;
    margin-top: 10px;
    font-size: 22px;
    color: black;
}
.weatherShow td{
    padding: 10px;
}
</style>