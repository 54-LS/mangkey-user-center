<template>
  <div class="home">
    <router-link to="/weather" style="height: 200px; width: 200px; display: block;">
      <img alt="Vue logo" src="../assets/logo.png" style="height: 200px;" title="恭喜你！发现隐藏机关，点击一下试试~">
    </router-link>
    <h1 style="font-size: 30px; font-weight: bolder; font-family: 'Pangolin', cursive;">
      Welcome to mangkey User center ! ! !
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>

<style scoped>
#home{
    /* background: linear-gradient(135deg, #88c09b 0%, #09a62e 100%); */
    color: #333;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
</style>
