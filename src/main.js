import Vue from 'vue'
import App from './App.vue'
// 引入组件工具
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'
import router from './router/router.js'
// 注册组件工具
Vue.use(ElementUI)
// Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
