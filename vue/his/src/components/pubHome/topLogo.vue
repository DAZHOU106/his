<template>
  <div class="top-logo-con">
    <div class="top-logo clearfix">
      <div class="logo-img-con">
        <img src="@/assets/logo1.png" alt class="logo-big" />
        <img src="@/assets/logo2.png" alt class="logo-sm" />
      </div>
      <div class="login-register">
        <span href="javascript:;" class="login">登陆</span>
        <span>|</span>
        <span href="javascript:;" class="register">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-logo-con {
width:100%;
.top-logo {
  width: auto;
  min-width: 1000px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 10px;
  .logo-img-con {
    float: left;
    margin-top: 10px;
    cursor: pointer;
    .logo-sm {
      margin: 0 0 20px 20px;
    }
  }
  .login-register {
    float: right;
    font-size: 18px;
    line-height: 106px;
    color: #333333;
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