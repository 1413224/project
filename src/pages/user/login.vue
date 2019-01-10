<template>
  <div class="page-login">
    <div class="page-lr clearfix">
      <div class="sign-up-bg fl">
        <div class="sign-up-content">
          <div class="logo"></div>
          <div class="login-btn">登录</div>
        </div>
      </div>
      <div class="sign-up-formbox fl">
        <div class="sign-up-box">
          <p class="tit">登录</p>
          <el-form :rules="rules" :model="account" ref="account">
            <div class="form-body">
              <el-form-item prop="phone">
                <el-input placeholder="用户名" v-model="account.phone" clearable></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" placeholder="登录密码" v-model="account.pass" clearable></el-input>
              </el-form-item>
              <div class="sign-up-bottom clearfix">
                <span class="sign-remember fl"><el-checkbox v-model="account.isRememberName">记住用户名</el-checkbox></span>
                <span class="forgetpass fr">忘记密码？</span>
              </div>
              <div class="login">
                <el-button type="primary" @click="login">登录</el-button>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var checkPhone = (rule,phone,callback)=>{
      if(!phone){
        return callback(new Error('手机号不能为空'));
      }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        return callback(new Error('手机号不正确'))
      }else{
        callback()
      }
    }
    return {
      account:{
        phone:'',
        pass:'',
        isRememberName:true,
      },
      rules:{
        // phone:[{validator:checkPhone, trigger: 'blur'}],
        phone:[{required: true, message: '请输入用户名', trigger: 'blur'}],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods:{
    login(){
      var _this = this
      _this.$refs['account'].validate(valid=>{
        if(valid){
          // alert("跑登陆")
          _this.$router.push({
            path:'/index'
          })
        }else{
          return false
        }
      })
    }
  }
}
</script>

<style>
.form-body .el-form-item__content{
    margin-bottom: 40px;
}
.form-body .el-input__inner{
  border:none;
  border-bottom: 1px solid #dcdfe6 !important;
  border-radius: 0;
  padding: 0;
}
.form-body .login button{
  padding: 12px 70px !important;
  border-radius: 18px;
  background-color:#38f;
}
</style>
<style scoped lang="less">
.page-login{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: url(../../assets/images/user/TVYTbAXWheQpRcWDaDMu.svg);
  background-size: 100%;
  width: 100%;
  min-height: 100%;
  .page-lr{
    position: absolute;
    width: 800px;
    /*border: @border;*/
    /*height: 200px;*/
    border-radius: 3px;
    text-align: center;
    top: 50%;
    left: 50%;
    box-shadow:0 0 20px rgba(0,0,0,.2);
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    .sign-up-bg{
      position: relative;
      width: 300px;
      height: 600px;
      border-radius: 3px 0 0 3px;
      background: url(../../assets/images/user/register-bg.jpg) no-repeat center;
      vertical-align: middle;
      .sign-up-content{
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%);
        -moz-transform:translate(-50%,-50%);
        .logo{
          width: 120px;
          height: 30px;
          vertical-align: middle;
          background-image:url(https://img.myxiaochengxu.cn/images/global/vVez7FZN5nt5FN6yc2NVjT5nYv6TQ1.png);
          background-size: 100% 100%; 
        }
        .login-btn{
          width: 70px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
          border: 1px solid #fff;
          border-radius: 10px;
          font-size: 14px;
          color: #fff;
          margin: 20px auto 0;
        }
      }
    }
    .sign-up-formbox{
      /*position: relative;*/
      width: 380px;
      height: 400px;
      border-radius: 0 3px 3px 0;
      padding: 100px 60px;
      background-color: #fff;
      vertical-align: middle;
      .sign-up-box{
        /*border: @border;*/
        .tit{
          font-size: 16px;
          font-weight: 600;
          color: #000;
          letter-spacing: 3px;
          text-align: center;
        }
        .form-body{
          margin-top: 90px;
          .forgetpass{
            color: #38f;
            cursor: pointer;
            &:hover{
              color: #6da8fa;
            }
          }
          .login{
            margin-top: 60px;
          }
        }
      }
    } 
  }
}
</style>
