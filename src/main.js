import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Layout,Menu,Grid,Flex,Button,Col,FloatButton,Popconfirm,Popover,Table } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'

const pinia = createPinia()

createApp(App).use(Layout).use(Menu).use(Grid).use(Flex).use(Button).use(FloatButton)
.use(Col).use(Popconfirm).use(Popover).use(Table)
.use(pinia).use(store).use(router).mount('#app')
