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
        @click.stop="goPages(item,$event)">
    		<span><i :class="item.type"></i>{{item.text}}</span>
    	</li>
    </ul>
    <ul class="child-nav">
      <li 
        v-for="(item,index) in curdetail.child">
        <dl>
          <dt class="title">{{item.title}}</dt>
          <template v-for="(itm,idx) in item.child">
            <dd 
              :class="{active:$route.meta.childSmatch==itm.childSmatch}"
              @click="goChildPage(itm)">
              {{itm.text}}
            </dd>
          </template>
        </dl>
        <p class="xian"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	isActive:-1,
      isChildActive:-1,
      kind:'',
      smatch:'',
      arr:[],
    	items:[
    		{
          text:'概况',
          src:'/survey',
          smatch:'survey',
          type:'iconfont icon-frown',
          child:[
            {
              title:'会员',
              child:[
                {
                  text:'会员1',
                  childSmatch:'people'
                }
              ]
            }
          ]
        },
    		{
          text:'店铺',
          src:'/shop',
          smatch:'shop',
          type:'iconfont icon-info-circle',
          child:[
            {
              title:'个性装修',
              child:[
                {
                  text:'店铺页面',
                  childSmatch:'shop',
                  src:'/shop'
                },
                {
                  text:'店铺导航',
                  childSmatch:'shopnav',
                  src:'/shop/shopnav'
                }
              ]
            }
          ]
        },
    		// {text:'商品'},
    	]
    }
  },
  created(){
    this.smatch = this.$route.meta.smatch

    this.arr = this.items.filter((item)=>{
      return item.smatch == this.smatch
    })
    this.kind = this.arr[0].type
    // console.log(this.$route.meta.childSmatch)
  },
  mounted(){
    // console.log(this.curdetail)
  },
  computed:{
    curdetail(){
      return this.items.filter(item=> item.type === this.kind)[0]
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
    goPages(item,e){
      this.kind = e.currentTarget.querySelector('i').className
      this.$router.push({
        path:item.src
      })
    },
    goChildPage(item){
      this.$router.push({
        path:item.src
      })
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
				display: inline-block;
				padding: 10px 20px;
        i{
          padding-right: 8px;
        }
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
    /*background: #ccc;*/
    color: #595961;
    padding: 10px;
    position: fixed;
    top: 70px;
    left: 120px;
    padding: 10px;
    li:last-child{
      &:after{
        content:'';
        width: 130px;
        height: 0;
        position: absolute;
        bottom: 0;
        background: #e3e2e5;
      }
    }
    li{
      &:after{
        content:'';
        width: 130px;
        height: 1px;
        position: absolute;
        bottom: 0;
        background: #e3e2e5;
      }
      .title{
        color: #595961;
        font-weight: bold;
        font-size: 14px;
        padding: 10px;
      }
      dd{
        padding: 10px;
        font-size: 14px;
        margin-bottom: 3px;
        cursor: pointer;
        &:hover{
          background: #E9EAF0;
          border-radius: 6px;
        }
      }
      dd.active{
        background: #E9EAF0;
        border-radius: 6px;
      }
      /* .xian{
        height: 1px;
        background: #e3e2e5;
        margin-top:15px;
      } */
    }
  }
}
</style>
