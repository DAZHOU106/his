<template>
  <div class="login-register-wrapper">
    <!-- 登录注册弹窗 -->
    <el-dialog
      title="登录/注册"
      class="login-register-dia"
      :visible.sync="isShowLogin"
      :width="diaWidth"
      @close="closeDia"
      :close-on-click-modal="false"

    >
      <i class="iconfont iconfork" @click="closeDia"></i>
      <div class="logig-register">
        <div class="login-register-switch">
          <div class="switch-con">
            <span
              class="login-switcher"
              :class="formType==1 ? 'choosed':''"
              @click="switchForm(1)"
            >登录</span>
            <span
              class="register-switcher"
              :class="formType==2 ? 'choosed':''"
              @click="switchForm(2)"
            >注册</span>
          </div>
        </div>
        <!-- 登录表单 -->
        <el-form :model="form" class="login-form animated fadeInLeft" v-if="formType==1">
          <el-form-item label="用户名:" :label-width="formLabelWidth" style="padding-right:40px">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" :label-width="formLabelWidth" style="padding-right:40px">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <div class="button-con">
            <el-button type="primary" class="btn-login" @click="doLogin">登录</el-button>
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
            <el-button type="primary" class="btn-register" @click="doRegister">注册</el-button>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isShowLogin: {
      type: Boolean,
      default: false
    },
    ft:{
        type: Number,
        default: 1
    }
  },
  
    
  
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      form2: {
        name: "",
        password: ""
      },
      formType: 1, 
      formLabelWidth: "120px",
      diaWidth: "600px"
    };
  },
  methods: {
      closeDia() {
      this.$emit("closeDia")
    },
    switchForm(type) {
      this.formType = type;
    },
   doLogin(){
     console.log(1);
       localStorage.setItem("username",1)
       this.$store.commit('AUTH_MUTATION')
       this.closeDia()
   },
   doRegister(){
       
   }
  }
};
</script>