import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        next({
          path: `/index/order/list`,
          replace: true
        })
      }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve),
      children: [
        {
          path: '/index/order/list',
          name: 'OrderList',
          component: resolve => require(['@/pages/order/list'], resolve)
        },
        {
          path: '/index/order/detail/:id',
          name: 'OrderDetail',
          component: resolve => require(['@/pages/order/detail'], resolve)
        },
        {
          path: '/index/product/create',
          name: 'ProductCreate',
          component: resolve => require(['@/pages/product/create'], resolve)
        }
      ]
    }
  ]
})
