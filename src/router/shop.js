export default [
	{
		name:'shop',
		path:'/shop',
		component:resolve => require(['@/pages/shop/index'],resolve),
		meta:{
			title:'店铺首页',
			smatch:'shop'
		}
	}
]