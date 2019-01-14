import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/index'
// import Display from '@/pages/display'
import Manage from '@/pages/manage/index'
import User from './user.js'
import Member from './member.js'
import Shop from './shop.js'

Vue.use(Router)
//第一级，以侧边栏命名为准，smatch.
//第二级，childSmatch
const router = new Router({
  routes: [
  {
    path:'/manage',
    name:'manage',
    component:Manage,
    redirect:'/survey',
    children:[
      {
        path:'/shop',
        name:'shop',
        component:resolve => require(['@/pages/shop/index'],resolve),
        meta:{
          title:'店铺首页',
          smatch:'shop',
          childSmatch:'shop'
        }
      },
      {
        path:'/survey',
        name:'survey',
        component:resolve => require(['@/pages/survey/index'], resolve),
        meta:{
          title:'概况',
          smatch:'survey'
        }
      },
      {
        name:'shopnav',
        path:'/shop/shopnav',
        component:resolve => require(['@/pages/shop/shopnav'],resolve),
        meta:{
          title:'店铺导航',
          smatch:'shop',
          childSmatch:'shopnav'
        }
      }
    ]
  },
  /*{
    path:'/display',
    name:'display',
    component:Display,
  }*/
    /*{
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
    }*/
  ]
  /*.concat(
  	User,
  	Member,
    Shop
  )*/
})

 export default router
