<template>
  <div class="top-logo-con">
    <div class="top-logo clearfix">
      <div class="logo-img-con">
        <img src="@/assets/logo1.png" alt class="logo-big" />
        <img src="@/assets/logo2.png" alt class="logo-sm" />
      </div>
      <div class="login-register">
        <span href="javascript:;" class="login" @click.passive="showLogin">登陆</span>
        <span>|</span>
        <span href="javascript:;" class="register">注册</span>
      </div>
    </div>
    <!-- 登录注册弹窗 -->
    <el-dialog
      title="登录/注册"
      class="login-register-dia"
      :visible.sync="isShowLogin"
      :width="diaWidth"
    >
     <i class="iconfont iconfork" @click="closeDia"></i>
      <div class="logig-register">
        <div class="login-register-switch">
          <div class="switch-con">
            <span class="login-switcher" :class="formType==1 ? 'choosed':''" @click="switchForm(1)">登录</span>
            <span class="register-switcher" :class="formType==2 ? 'choosed':''" @click="switchForm(2)">注册</span>
          </div>
        </div>
        <!-- 登录表单 -->
        <el-form :model="form" class="login-form animated fadeInLeft" v-if="formType==1">
          <el-form-item label="用户名:" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <div class="button-con">
             <el-button type="primary" class="btn-login">登录</el-button>       
          </div>
         

        </el-form>
        <!-- 注册表单 -->
         <el-form :model="form2" class="register-form animated fadeInRight" v-if="formType==2">
          <el-form-item label="请输入用户名:" :label-width="formLabelWidth">
            <el-input v-model="form2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码:" :label-width="formLabelWidth">
            <el-input v-model="form2.password" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="请再次输入密码:" :label-width="formLabelWidth">
            <el-input v-model="form2.password" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="请输入验证码:" :label-width="formLabelWidth" class="verify-con">
            <el-input v-model="form2.password" autocomplete="off"></el-input>
            <span class="varify-code">A S D Y</span>
          </el-form-item>
            <div class="button-con">
             <el-button type="primary" class="btn-register">注册</el-button>       
          </div>
        </el-form>
     
      </div>
       
    
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShowLogin: false,
      form: {
        name: "",
        password: "",
       
      },
      form2:{
         name: "",
        password: "",
       
      },
       formType: 1, //1代表登录表单，2代表注册表单
      formLabelWidth: "120px",
      diaWidth: "600px"
    };
  },
  components: {},
  methods: {
    showLogin() {
      this.isShowLogin = true;
    },
    switchForm(type){
      this.formType = type
    },
    closeDia() {
      this.isShowLogin = false
    }
  }
};
</script>

<style lang="scss">
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