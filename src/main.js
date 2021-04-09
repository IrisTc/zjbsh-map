import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import * as echarts from 'echarts'
import axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
