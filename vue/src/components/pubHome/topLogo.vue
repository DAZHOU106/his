<template>
  <div class="top-logo-con">
    <div class="top-logo clearfix">
      <div class="logo-img-con">
        <img src="@/assets/logo1.png" alt class="logo-big" />
        <img src="@/assets/logo2.png" alt class="logo-sm" />
      </div>
      <div class="login-register" v-if="!isLogin">
        <span href="javascript:;" class="login" @click="showLogin(1)">登陆</span>
        <span>/</span>
        <span href="javascript:;" class="register" @click="showLogin(2)">注册</span>
      </div>
      <div class="login-register welcome" v-if="isLogin">
        <el-dropdown  @command="handleCommand">
          <span class="el-dropdown-link">
            <span>欢迎您</span>
            <span>周医生</span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"> 
              <el-dropdown-item><router-link to="" tag="span" class="person-center">个人中心</router-link></el-dropdown-item>
            <el-dropdown-item command="logOut"><span>退出登录</span></el-dropdown-item>
           
          </el-dropdown-menu>
        </el-dropdown>
      
      </div>
    </div>
    <login-register :isShowLogin="isShowLogin" @closeDia="closeDia" :ft="formType" />
  </div>
</template>

<script>
import LoginRegister from "../loginRegister/loginRegister";
export default {
  name: "",
  data() {
    return {
      isShowLogin: false,
      formType: 1,
      isLogin: false
    };
  },
  components: {
    LoginRegister
  },
  mounted() {
    if (
      localStorage.getItem("username") != "" ||
      localStorage.getItem("username") != null
    ) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    showLogin(type) {
      this.isShowLogin = true;
      this.formType = type;
    },
    closeDia() {
      this.isShowLogin = false;
    },
    handleCommand(cmd){
      if(cmd=='logOut'){
          this.$message({
        type:"success",
        message:"退出成功"
      })
      this.isLogin = false;
      this.$emit("logOut")
      }
     
    
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
    .welcome {
      .person-center {
        color: $theme-blue;
        cursor: pointer;
      }
    }
    .login-register {
      float: right;
      font-size: 14px;
      padding: 30px 0;
      color: #333333;
      margin-right: 10px;
      cursor: pointer;
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