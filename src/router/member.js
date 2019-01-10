export default [
	{
		name:'survey',
		path:'/survey/index',
		component:resolve => require(['@/pages/survey/index'], resolve),
		meta:{
			title:'概况'
		}
	},
]