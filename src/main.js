/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-08 14:29:30
 * @LastEditors: tao
 * @LastEditTime: 2021-01-30 16:02:40
 */
import Vue from 'vue'
import './ant'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')