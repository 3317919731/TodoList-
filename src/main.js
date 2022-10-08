
//引入Vue
import Vue from 'vue'

//引入App
import App from './App'
Vue.config.productionTip = false

//创建Vue

new Vue({
    el:'#root',
    render: h=>h(App)
})