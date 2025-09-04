import { createApp } from 'vue'
import { Layout,Menu,Grid,Flex,Button,Col } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(Layout).use(Menu).use(Grid).use(Flex).use(Button)
.use(Col)
.use(store).use(router).mount('#app')
