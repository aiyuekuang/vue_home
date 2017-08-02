import Vue from 'vue'
import Router from 'vue-router'
import Today from './views/today.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['./views/home.vue'], resolve)
    },
    {
      path: '/today',
      component: Today
    }
  ]
})
