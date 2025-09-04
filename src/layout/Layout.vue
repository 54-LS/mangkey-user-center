<template>
    <div id="Layout">
        <a-layout>
            <a-layout-header class="header">
                <Navbar/>
            </a-layout-header>
            <a-layout-content class="content">
                <RouterView></RouterView>
            </a-layout-content>
            <a-layout-footer class="footer">已经是最底，不要滑了~</a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default{
    name:'Layout',
    components:{
        Navbar
    }
}
</script>

<style scoped>
.footer{
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    color: black;
    background-color: #efefef;
    text-align: center;
    height: 100px;
    padding: 40px;
}
.content{
    margin-top: 64px;
}
.header{
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
}
</style>