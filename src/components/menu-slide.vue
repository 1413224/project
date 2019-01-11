<template>
  <div id="menu-slide">
    <div class="menu-logo">
      <div class="logo"><img src="../assets/images/user/logo.png" alt=""></div>
    </div>
    <ul class="nav">
    	<li 
    		v-for="(item,index) in items"
    		:key="index"
    		:class="{active:index==isActive || $route.meta.smatch==item.smatch}"
    		@mouseover="addActive(index)" 
    		@mouseout="removeActive(index)"
        @click="goPages(item)">
    		<span>{{item.text}}</span>
    	</li>
    </ul>
    <ul class="child-nav">
      <li>
        <dl>
          <dt>ddd</dt>
          <dd>vvvv</dd>
        </dl>
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
    		{text:'概况',src:'/',smatch:'survey'},
    		{text:'店铺',src:'/shop',smatch:'shop'},
        

    		// {text:'商品'},
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
  	},
    goPages(item){
      this.$router.push({
        path:item.src
      })
      // console.log(this.$route)
    }
  }
}
</script>

<style scoped lang="less">
#menu-slide{
  /*position: relative;*/
  width: 120px;
  background-color: #222430;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: #878997;
  overflow: auto;
  .menu-logo{
    padding: 20px;
    .logo{
      width: 40px;
      height: 40px;
      margin:10px auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
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
  .child-nav{
    width: 130px;
    background: #ccc;
    color: #595961;
    padding: 10px;
    position: fixed;
    top: 70px;
    left: 120px;
    padding: 10px;
  }
}
</style>
