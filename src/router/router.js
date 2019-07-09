import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { name: 'login', path: '/login', component: Login }
  ]
})
export default router
