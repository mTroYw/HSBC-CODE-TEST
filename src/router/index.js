import Vue from 'vue'
import Router from 'vue-router'
import currencyPair from '@/components/currencyPair/currencyPair'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'currencyPair',
      component: currencyPair
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
