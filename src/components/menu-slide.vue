<template>
  <div id="menu-slide">
    <ul class="nav">
    	<li 
    		v-for="(item,index) in items"
    		:key="index"
    		:class="{active:index==isActive || $route.path==item.src}"
    		@mouseover="addActive(index)" 
    		@mouseout="removeActive(index)">
    		<span>{{item.text}}</span>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	isActive:-1,
    	items:[
    		{text:'概况',src:'/index'},
    		{text:'店铺'},
    		{text:'商品'},
    	]
    }
  },
  methods:{
  	addActive(index){
  		// $event.currentTarget.className="active"
  		this.isActive = index
  	},
  	removeActive(index){
  		// $event.currentTarget.className=""
  		this.isActive = null
  	}
  }
}
</script>

<style scoped lang="less">
#menu-slide{
	.nav{
		li{
			position: relative;
			cursor: pointer;
			span{
				font-size: 14px;
				color:#757993;
				font-weight: 400;
				display: block;
				padding: 10px 20px;
			}
		}
		li.active{
			&:after{
				content:'';
				width: 4px;
				background:#fff;
				border-radius: 2px;
				position: absolute;
				right: 10px;
				top: 25%;
				bottom: 25%;
			}
			span{
				color: #fff;
			}
		}
	}
}
</style>
