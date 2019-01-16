<template>
  <div class="header">
    <span class="tit">智慧零售</span>
    <div class="right">
      <span>客户消息</span>
      <span 
        @mouseenter="noticEnter"
        @mouseleave="noticLeave">系统通知</span>
      <i 
        class="iconfont icon-menu"
        @mouseenter="menuEnter"
        @mouseleave="menuLeave"></i>
    </div>
    <!-- 系统消息开始 -->
    <div class="pop-notice"
         v-show="noticShow"
         @mouseenter="noticSover"
         @mouseleave="noticSout">
      <div class="notic-h">
        <!-- <span>您有0条未读通知</span> -->
        <span>暂无未读通知</span>
        <i class="iconfont icon-setting fr"></i>
      </div>
      <div class="notic-b"></div>
      <div class="notic-no"><img src="../assets/images/global/dec-envelope.png" alt=""></div>
    </div>
    <!-- 系统消息结束 -->
    <!-- 右侧menu开始 -->
    <div 
      class="acount-menu"
      v-show="menuShow"
      @mouseenter="menuSover"
      @mouseleave="menuSout">
      <ul>
        <li>
          <p><i class="iconfont icon-shop-fill"></i><span>切换店铺</span></p>
        </li>
        <li>
          <p><i class="iconfont icon-fuwushang"></i><span>账号信息</span></p>
        </li>
        <li>
          <p><i class="iconfont icon-info-circle-fill"></i><span>帮助中心</span></p>
        </li>
        <li>
          <p><i class="iconfont icon-rollback"></i><span>返回旧版</span></p>
        </li>
        <li>
          <p><i class="iconfont icon-login"></i><span>退出账号</span></p>
        </li>
      </ul>
    </div>
    <!-- 右侧menu结束 -->

  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      noticShow:false,
      menuShow:false
    }
  },
  methods:{
    noticEnter(){
      this.noticShow = true
    },
    noticLeave(){
      this.noticShow = false
    },
    noticSover(){
      this.noticShow = true
    },
    noticSout(){
      this.noticShow = false
    },
    menuEnter(){
      this.menuShow = true
    },
    menuLeave(){
      this.menuShow = false
    },
    menuSover(){
      this.menuShow = true
    },
    menuSout(){
      this.menuShow = false
    }
  }
}
</script>

<style scoped lang="less">
.header{
  position: relative;
  padding-right: 20px;
	.tit{
		font-size: 14px;
		color: #595961;
		font-weight: bold;
	}
  .right{
    float: right;
    span{
      cursor: pointer;
      display: inline-block;
      padding:0 15px;
      &:hover{
        color:#2589ff;
      }
    }
    i{
      font-weight: bolder;
      font-size: 18px;
      position: relative;
      top: 3px;
      padding-left: 10px;
      display: inline-block;
      padding: 0 5px;
      &:hover{
        cursor:pointer;
      }
    }
  }
  .pop-notice{
    width: 300px;
    /*height: 100px;*/
    background: #fff;
    box-shadow: 0 6px 13px 0 rgba(73,85,115,0.3);
    border-radius: 4px;
    position: absolute;
    top: 60px;
    right: 22px;
    padding:0 8px;
    color: #595961;
    .notic-no{
      padding: 10px 20px;
      text-align: center;
    }
    .notic-h{
      color: #595961;
      /*font-weight: bolder;*/
      font-size: 14px;
      border-bottom: 1px solid #e3e2e5;
      line-height: 38px;
      i{
        &:hover{
          cursor:pointer;
        }
      }
    }
  }
  .acount-menu{
    position: absolute;
    top: 60px;
    right: -10px;
    width: 200px;
    z-index: 3000;
    font-size: 14px;
    color: #61616A;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(15,12,70,0.1);
    border:1px solid #E5E4E9;
    border-radius: 4px;
    /*padding: 0 10px;*/
    ul{
      /*padding: 0 10px;*/
      li{
        line-height: 50px;
        padding: 0 10px;
        color: #61616A;
        p{
          border-bottom: 1px solid #E5E4E9;
          padding-left: 15px;
          i{
            font-size: 20px;
            position: relative;
            top: 2px;
          }
          span{
            display: inline-block;
            padding-left: 15px;
          }
        }
        &:hover{
          background:#F7F7F7;
          color: #3E96FE;
          cursor: pointer;
        }
        &:last-child{
          p{
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
