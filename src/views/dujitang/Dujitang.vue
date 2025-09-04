<template>
    <div id="dujitang">
        dujitang
    </div>
</template>

<script setup>
import { getDujitang } from '@/network/hottop';
import { ref } from 'vue';

const jitangData = ref([]);
getDujitang().then(res=>{
    jitangData.value = res.data.data;
    console.log(jitangData.value);
})
</script>