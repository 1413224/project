<template>
  <div class="">
    <el-container>
      <menu-slide></menu-slide>
      <el-container>
        <el-header>
        <menu-top></menu-top>
        </el-header>
    
        <el-main>
              <router-view/>
        </el-main>
    
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
/* .el-aside{
  background-color: #222430;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: #878997;
} */
.el-container{
  margin-left: 60px;
}
.el-main{
  padding-left: 160px;
}
.el-header{
  background:#fff;
  box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
}

</style>
