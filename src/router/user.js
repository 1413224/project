export default [
	{
		name:'register',
		path:'/user/register',
		component:resolve => require(['@/pages/user/register'], resolve),
		meta:{
			title:'注册'
		}
	},
	{
		name:'login',
		path:'/user/login',
		component:resolve => require(['@/pages/user/login'],resolve),
		meta:{
			title:'登录'
		}
	}
]