// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style/index.scss'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局守卫
router.beforeEach((to, from, next) => {
// 如果用户没用登入，则，运行进入出login外的路径
// 如果客户端有token，则代表已经登入，则跳转到hone页面，反之跳转到登入页面
  let token = localStorage.getItem('mytoken')
  if (token) {
    // 已登入
    next()
  } else {
    if (to.path !== '/login') {
      next({name: 'login'})
    } else {
      next()
    }
  }
})
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
