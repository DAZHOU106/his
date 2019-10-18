<template>
  <div class="top-logo-con">
    <div class="top-logo clearfix">
      <div class="logo-img-con">
        <img src="@/assets/logo1.png" alt class="logo-big" />
        <img src="@/assets/logo2.png" alt class="logo-sm" />
      </div>
      <div class="login-register">
        <span href="javascript:;" class="login" @click="show">登陆</span>
        <span>|</span>
        <span href="javascript:;" class="register">注册</span>
      </div>
    </div>
    <login-register></login-register>
  </div>
</template>

<script>
import LoginRegister from "../loginRegistDia.vue" 
export default {
  name:'',
  data(){
    return{

    }
  },
  components:{
    LoginRegister
  }
};
</script>

<style lang="scss" scoped>
.top-logo-con {
  width: auto;
  min-width: 1000px;
  .top-logo {
    width: auto;
    width: 1000px;
    margin: 0 auto;
    .logo-img-con {
      padding-top: 5px;
      display: inline-block;
      cursor: pointer;
      margin-left: 20px;
      .logo-big {
        height: 70px;
      }
      .logo-sm {
        margin: 0 0 10px 20px;
      }
    }
    .login-register {
      float: right;
      font-size: 14px;
      line-height: 80px;
      color: #333333;
      margin-right: 10px;
      span {
        margin: 0 5px;
      }
      .login,
      .register {
        cursor: pointer;
      }
      .login:hover,
      .register:hover {
        color: #2ebfe1;
      }
    }
  }
}
</style>