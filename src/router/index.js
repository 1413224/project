import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import User from './user.js'
import Member from './member.js'
import Home from '@/pages/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Home
    }
  ].concat(
  	User,
  	Member
  )
})

 export default router
