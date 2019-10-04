import Vue from 'vue'
import App from './App.vue'
import router from './router'  //引入配置好的router/index.js文件
import ElementUI from 'element-ui'  //引入饿了么UI框架
import 'element-ui/lib/theme-chalk/index.css'   //引入UI框架样式
import axios from 'axios'   //引入axios

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false


new Vue({
  router,     //注入VueRouter
  render: h => h(App),
}).$mount('#app')
