import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/currencyPair',
      name: 'currencyPair',
      component: () => import('@/components/currencyPair/currencyPair')
    },
    {
      path: '/successfulPage',
      name: 'successfulPage',
      component: () => import('@/components/resultPage/successfulPage')
    },
    {
      path: '/failedPage',
      name: 'failedPage',
      component: () => import('@/components/resultPage/failedPage')
    }
  ]
})
