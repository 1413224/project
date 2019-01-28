<template>
  <div class="main-content">
		<p class="crumbs">
			<span class="text-md">单品库分类</span>
			<span class="text-base">同级分类可拖拽调整排序</span>
		</p>
		<div class="wrap-full">
			<div class="category-container">
				<div class="category">
          <ul class="category-ul">
            <!-- <SlickList 
              @sort-start="onsortStart($event)" 
              @sort-end="onsortEnd($event)"
              @input="SlickEvent(catelist)" 
              lockAxis="y" 
              v-model="catelist"
              helperClass="task-move">
              <SlickItem v-for="(item,index) in catelist" :index="index" :key="index">
                <p @click.self="changeClick()">{{item.name}}</p>
              </SlickItem>
            </SlickList> -->
            
            <draggable 
              v-model="catelist" 
              :options="draggableOptions"
              @start="onStart($event)" 
              @end="onEnd($event,catelist)">
              <div 
                class="category-item clearfix" 
                :class="{active:currentIndex == index}"
                v-for="(item,index) in catelist"
                @click="searchChild(item.id,index)">
                  <!-- 主内容item -->
                  <div class="item-content fl">
                    <div class="category-title">
                      {{item.name}}
                    </div>
                  </div>
                  <!-- 主内容item end -->
                  <!-- 右侧内容 -->
                  <div class="fr">
                    <i 
                    class="iconfont icon-caret-right"
                    v-if="item.is_leaf!=0"></i>
                      <!-- 这里有两个判断，还有一个是有无分类 -->
                    <span class="edit-icon">
                      <i class="iconfont icon-edit-square"></i>
                      <i 
                        class="iconfont icon-delete-fill"
                        @click="delCategory(item.id)"></i>
                    </span>
                  </div>
                  <!-- 右侧内容end -->
                </div>
            </draggable>
          </ul>
          <button class="btn-edit">新增分类</button>
        </div>
			</div>
		</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import { SlickList, SlickItem } from 'vue-slicksort'
export default {
  name: 'shopnav',
  data () {
    return {
     catelist:[
        {name:'1'},
        {name:'2'},
        {name:'3'},
     ],
     currentIndex:-1,//用以区分选中的列表
     showEdit:null,
     draggableOptions:{
      sort:true,//在里面排序列表
      animation:150,
      scroll:true,
      /*onStart:function(evt){
        console.log(evt)
      }*/
     },
    }
  },
  components:{
    /*SlickList,
    SlickItem,*/
    draggable
  },
  created(){
  	// console.log(this.$route)
    this.getCategoryList()
  },
  methods:{
    /*onsortStart(event){
      console.log(event)
    },
    onsortEnd(event){
      console.log(event)
    },
    SlickEvent(list){
      console.log(list);
    },
    changeClick(){
      alert(9)
    }*/
    searchChild(id,index){
      this.currentIndex = index
      console.log(id)
    },
    onStart(event){

    },
    //获取一级分类信息
    getCategoryList(){
      var _this = this 
      _this.$http.get(_this.url.GetCategoryList,{
        params:{
          parentId:'',
          status:-1
        }
      }).then((res)=>{
        if(res.data.ret == '200'){
          _this.catelist = res.data.data.list
        }
      })
    },
    //删除分类
    delCategory(id){
      var _this = this
      _this.$http.get(_this.url.DelCategoryById,{
        params:{
          id:122
        }
      }).then((res)=>{
        if(res.data.ret == '200'){

        }else{
          // this.$message('这是一条消息提示');
        }
      })
    }

  }
}
</script>

<style scoped lang="less">
.main-content{
	/* position: fixed;
	  width: calc(100% - 290px);
	  top: 70px;
	  bottom: 10px;
	  right: 10px;
	  background: #fff; 
	  box-shadow: 0 0 4px 0 rgba(200,200,200,.5);
	  overflow: auto; */
	  position: absolute;
	  width: calc(100% - 290px);
	  top: 70px;
	  right: 10px;
	  background: #fff; 
	  box-shadow: 0 0 4px 0 rgba(200,200,200,.5);
	  min-height: 90%; 
  .crumbs{
  	margin-top: 20px;
  	padding-left: 20px;
  	margin-bottom: 20px;
  	.text-md{
  		font-size: 14px;
  		color: #595961;
  		font-weight: 700;
  	}
  	.text-base{
			color: #9797a1;
			padding-left: 10px;
		}
  }
  .wrap-full{
  	width: 98%;
  	margin: 0 auto;
  	background: #f2f2f6;
  	border-radius: 6px;
  	padding: 10px;
    /* position: absolute;
    min-height: 100%; */
  	.category-container{
			background: #fff;
			padding: 10px;
      position: relative;
      .category{
        width: 19%;
        height: 79vh;
        margin-right: 1%;
        border: 1px solid #e3e2e5;
        border-radius: 4px;
        position: relative;
        .category-ul{
          overflow-x: hidden;
          overflow-y: auto;
          .category-item{
            height: 50px;
            /*line-height: 50px;*/
            padding: 0 10px 0 15px;
            border-bottom: 1px solid #eee;
            &:hover{
              cursor:move;
            }
            .item-content{
              line-height: 50px;
            }
            .fr{
              position: relative;
              .iconfont{
                font-size: 12px;
                color: #B2AEBC;
              }
              .icon-caret-right{
                line-height: 50px;
              }
              .edit-icon{
                width: 50px;
                line-height: 50px;
                position: absolute;
                top: 0;
                right:-18px; 
                display: none;
                /*background: #fff;*/
                z-index: 1;
                .iconfont{
                  font-size: 14px;
                  &:hover{
                    cursor:pointer;
                  }
                }
              }
            }
          }
          .active{
            background: #f2f2f6;
          }
        }
        .btn-edit{
          width: 85%;
          border: 1px solid #2589ff;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: #2589ff;
          background: #fff;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
  	}
  }

}
.category-item:hover .fr .edit-icon{
  display: block !important;
}
</style>
