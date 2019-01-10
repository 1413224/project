<template>
  <el-container>
    <el-header>
      <div class="logo fl"><img src="../../assets/images/ecloud-logo-white.png" alt=""></div>
      <div class="fr"><router-link to="/login" class="reg">已有账号？立即登录</router-link></div>
    </el-header>
    <div class="ad">注册有礼，送代金券</div>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">
/* div{
  font-size: 24px;
  color: @bordercolor;
} */
.el-header, .el-footer {
  background-color: #454545;
  color: #fff;
  line-height: 60px;
  min-width: 1170px;
  padding: 0 50px;
}
.el-header{
  .reg{
    color: #fff;
  }
  .logo{
    width: 150px;
    height: 50px;
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
.ad{
  background: #fa8334;
  color: #fff;
  font-size: 16px;
  width: 100%;
  line-height: 42px;
  text-align: center;
}
.el-main{
  max-width: 1170px;
  margin:40px auto 0;
}
</style>
