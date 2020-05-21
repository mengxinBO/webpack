// 入口文件
import Vue from 'vue'

// 按需导入 Mint-ui中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 导入 mint-ui
// import MintUI from 'mint-ui'
// 这里可以省略node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 将 MintUI 安装到vue中
// Vue.use(MintUI)

// 导入MUI的样式
import '../lib/mui/css/mui.css'
// 导入APP根组件
import app from './app.vue'


var vm = new Vue({
    el:'#app',
    render: c => c(app)
})