import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.config.productionTip = false;
global.API_PROXY = 'https://bird.ioliu.cn/v2?url=';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
