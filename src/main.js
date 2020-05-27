// 入口文件
import Vue from 'vue'

// 按需导入 Mint-ui中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 mint-ui
// import MintUI from 'mint-ui'
// 这里可以省略node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 将 MintUI 安装到vue中
// Vue.use(MintUI)

// 导入MUI的样式
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)
// 1.3导入自己的router.js 路由模块
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)

// 导入APP根组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})