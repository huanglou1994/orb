import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Main from '../views/main.vue'
import axios from 'axios'

Vue.use(VueRouter)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
// 将token给到一个前后台约定好的key中，作为请求发送
  let token = localStorage.getItem('mytoken')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
// Do something with request error
  return Promise.reject(error)
})

export default new VueRouter({
  routes: [
    {path: '/login', name: 'login', component: Login},
    {path: '/', name: 'home', component: Home, redirect: {path: 'main'}, children: [{path: 'main', name: 'main', component: Main}]}
  ],
  mode: 'history'
})
