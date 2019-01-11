import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/index'
import User from './user.js'
import Member from './member.js'
import Shop from './shop.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      meta:{
        smatch:'survey'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      meta:{
        smatch:'survey'
      }
    }
  ].concat(
  	User,
  	Member,
    Shop
  )
})

 export default router
