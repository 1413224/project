export default [
	{
		name:'shop',
		path:'/shop',
		component:resolve => require(['@/pages/shop/index'],resolve),
		meta:{
			title:'店铺首页',
			smatch:'shop'
		}
	},
	{
		name:'shopnav',
		path:'/shop/shopnav',
		component:resolve => require(['@/pages/shop/shopnav'],resolve),
		meta:{
			title:'店铺导航',
			smatch:'shopnav'
		}
	}
]