import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/views/login/index')
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
