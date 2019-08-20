import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'

Vue.config.productionTip = false

//引入axios
Vue.use(VueAxios, axios)
//引入elment
Vue.use(Element)
//设置ajax访问基础路径
// Vue.http.options.root = 'http://localhost:3000/';
// Vue.http.options.emulateJSON = true;   //ajax post 访问格式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
