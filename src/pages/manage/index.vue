<template>
  <div class="appwrap">
    <el-header>
      <menu-top></menu-top>
    </el-header>
    <menu-slide></menu-slide>
    <router-view/>
  </div>
  
</template>

<script>
import MenuTop from '@/components/menu-top.vue'
import MenuSlide from '@/components/menu-slide.vue'
export default {
  name: 'manage',
  data () {
    return {
      
    }
  },
  created(){
  	// console.log(this.$route)
  },
  components:{
    MenuTop,
    MenuSlide
  },
}
</script>

<style scoped lang="less">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-header{
  position: fixed;
  left: 120px;
  z-index: 1000;
  /*饿了么UI 提示框2000*/
  width: calc(100% - 120px);
}
.el-container{
  margin-left: 60px;
}
.el-main{
  padding-left: 160px;
  /* position: fixed;
  top: 0;
  bottom:0;
  right: 0;
  background: #fff;
  overflow: auto; */
}
.el-header{
  background:#fff;
  box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
}


.main{
  /*width: 100%;*/
  /*position: relative;
  width: calc(100% - 290px);
  top: 70px;
  bottom: 0;
  right: 0;*/
  /*background: #fff; */
  /* position: absolute;
  width: calc(100% - 290px);
  top: 70px;
  bottom: 10px;
  right: 10px;
  background: #fff; 
  box-shadow: 0 0 4px 0 rgba(200,200,200,.5);
  min-height: 90%; */
}
.appwrap{
  height: 100%;
}
</style>
