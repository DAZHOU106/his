<template>
  <div class="pubHome-wrapper">
    <!-- 头部logo+登陆 -->
    <top-logo />
    <!-- 中间导航栏 -->
    <top-nav />
    <!-- 轮播图 -->
    <div class="swiper-con" style="z-index:20">
      <swiper :options="bannerOption">
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <div class="img-con">
            <img :src="item" class="banner-img" />
          </div>
        </swiper-slide>
        <div class="swiper-button-prev banner-switch" slot="button-prev"></div>
        <div class="swiper-button-next banner-switch" slot="button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
    <!-- 患者服务 -->
    <div class="pati-serv-con pub-home-layout">
      <div class="layout-inner clearfix">
        <div class="pati-guide">
          <div class="guide-title clearfix">
            <div class="line"></div>
            <span class="title">就诊指南</span>
          </div>
          <div class="guid-btn-container">
            <div class="el-col clearfix"  
            v-for="(item, index) in line1" 
            :key="index"
            @click="jumpTo(item.pagename)">
              <div class="guid-btn">
                <img :src="item.img" alt />
              </div>
              <div class="info">
                <div class="info-name">{{item.name}}</div>
                <div class="info-detail">{{item.detail}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pati-service">
          <div class="service-title clearfix">
            <div class="line"></div>
            <span class="title">医患服务</span>
          </div>
          <div class="btn-group">
            <div class="btn-service" @click="showLogin">
              <img src="@/assets/images/ic_home_internet.png" />
              <div class="service-name">登录/注册</div>
            </div>
             <div class="btn-service" >
              <img src="@/assets/images/ic_home_register.png" />
              <div class="service-name">预约挂号</div>
            </div>
             <div class="btn-service" >
              <img src="@/assets/images/ic_home_inquire.png" />
              <div class="service-name">化验单查询</div>
            </div>
             <div class="btn-service" >
              <img src="@/assets/images/ic_home_advisory.png" />
              <div class="service-name">互动交流</div>
            </div>
             <div class="btn-service" >
              <img src="@/assets/images/ic_home_survey.png" />
              <div class="service-name">满意度调查</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 系统特色 -->
    <div class="special-point pub-home-layout">
      <div class="layout-inner">
        <el-row>
          <el-col :span="6">
            <div class="special-name" style="background:#ffbd27;">
              <div class="intro">系统特色</div>
              <div class="intro">Sysyem Characteristic</div>
            </div>
            <div class="special-pic">
              <img src="@/assets/images/pic_doctor_communitypic.jpeg" alt srcset class="spec-img" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="special-pic">
              <img src="@/assets/images/pic_remote_consultation2.jpeg" alt srcset class="spec-img" />
            </div>
            <div class="special-name" style="background:#f1f1f1;">
              <div class="intro" style="color:#333">在线挂号</div>
              <div class="intro" style="color:#333">Online Reservation</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="special-name" style="background:#f1f1f1;">
              <div class="intro" style="color:#333">住院监控</div>
              <div class="intro" style="color:#333">Sysyem Characteristic</div>
            </div>
            <div class="special-pic">
              <img src="@/assets/images/pic_twoway_referral.jpeg" alt srcset class="spec-img" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="special-pic">
              <img src="@/assets/images/pic_remote_consultation1.jpeg" alt srcset class="spec-img" />
            </div>
            <div class="special-name" style="background:#ffbd27;">
              <div class="intro">系统特色</div>
              <div class="intro">Sysyem Characteristic</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 专家风采 -->
    <div class="doc-intro pub-home-layout">
      <div class="layout-inner">
        <div class="intro-title clearfix">
          <div class="line"></div>
          <div class="title">专家风采</div>
          <div class="page-ctrl">
            <div class="page-btn page-btn-prev" slot="button-prev" title="上一组">
              <i class="iconfont iconzuojiantou"></i>
            </div>
            <div class="page-btn page-btn-next" slot="button-next" title="下一组">
              <i class="iconfont iconyoujiantou"></i>
            </div>
            <div class="page-btn" title="更多医生">
              <i class="iconfont iconmore"></i>
            </div>
          </div>
        </div>
        <swiper :options="docOption" style="padding:5px">
          <swiper-slide v-for="(item,index) in 10" :key="index">
            <div class="doc-info">
              <div class="doc-avatar">
                <img src="@/assets/images/sunDog.jpg" alt class="avatar-img" />
              </div>
              <div class="info-detail">
                <div class="doc-name">
                  <span>孙笑川</span>
                  <span class="check-detail">详情</span>
                </div>
                <div class="doc-major">科室：精神科</div>
                <div class="job-title">职称：主任医师</div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 科室介绍 -->
    <div class="department-intro pub-home-layout">
      <div class="layout-inner">
        <div class="intro-title clearfix">
          <div class="line"></div>
          <div class="title">科室介绍</div>
          <div class="page-ctrl">
            <div class="page-btn depart-prev" slot="button-prev" title="上一组">
              <i class="iconfont iconzuojiantou"></i>
            </div>
            <div class="page-btn depart-next" slot="button-next" title="下一组">
              <i class="iconfont iconyoujiantou"></i>
            </div>
            <div class="page-btn" title="更多科室">
              <i class="iconfont iconmore"></i>
            </div>
          </div>
        </div>
        <swiper :options="departOption"  style="padding:5px">
          <swiper-slide v-for="(item,index) in 10" :key="index">
            <div class="depart-info clearfix">
              <div class="depart-logo">
                <span class="logo">普外科</span>
              </div>
              <div class="depart-preview">
                <div class="depart-name">普外科</div>
                <div class="manage-doctor">主任：孙笑川</div>
                <div
                  class="depart-word"
                >主任助理：袁宏钧、郑雅娟浙江省人民医院乳腺甲状腺外科是浙江省最早设立，专门诊治乳腺、甲状腺和甲状旁腺疾病的专业化科室。集临床、科研、教学为一体，设有专科门诊和一个住…</div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 新闻和通知 -->
    <div class="news-notice pub-home-layout">
      <div class="layout-inner clearfix">
        <div class="news-con clearfix">
          <div class="news-title clearfix">
            <div class="line"></div>
            <div class="title">资讯中心</div>
          </div>
          <div class="news-content clearfix">
            <div class="news-left">
              <div class="news-item" v-for="(item, index) in 8" :key="index">
                <img src="@/assets/images/ic_home_news.png" alt class="icon-news" />
                <span class="content">中央委员会特批今天是个好日子十八大的五年来</span>
                <span class="time">07-09</span>
              </div>
            </div>
            <div class="news-right">
              <div class="news-item" v-for="(item, index) in 8" :key="index">
                <img src="@/assets/images/ic_home_news.png" alt class="icon-news" />
                <span class="content">中央委员会特批今天是个好日子十八大的五年来</span>
                <span class="time">07-09</span>
              </div>
            </div>
          </div>
        </div>
        <div class="notice-con clearfix" style="margin-left:20px;">
          <div class="notice-title clearfix">
            <div class="line"></div>
            <div class="title">通知中心</div>
          </div>
          <div class="news-left">
            <div class="news-item" v-for="(item, index) in 8" :key="index">
              <img src="@/assets/images/ic_home_news.png" alt class="icon-news" />
              <span class="content">123</span>
              <span class="time">123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pub-footer />
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
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <div class="button-con">
             <el-button type="primary" class="btn-login">登录</el-button>       
          </div>
         

        </el-form>
        <!-- 注册表单 -->
         <el-form :model="form2" class="register-form animated fadeInRight" v-if="formType==2">
          <el-form-item label="请输入用户名" :label-width="formLabelWidth">
            <el-input v-model="form2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" :label-width="formLabelWidth">
            <el-input v-model="form2.password" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="请再次输入密码" :label-width="formLabelWidth">
            <el-input v-model="form2.password" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="请输入验证码" :label-width="formLabelWidth" class="verify-con">
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
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
import PubFooter from "@/components/pubHome/pubFooter";
export default {
  name: "pubHome",
  components: {
    TopLogo,
    TopNav,
    PubFooter
  },
  data() {
    return {
      isShowLogin:false,
      formType:1, //1登录，2注册
      formLabelWidth: "120px",
      diaWidth:"600px",
        form: {
        name: "",
        password: "", 
      },
      form2:{
         name: "",
        password: "",      
      },
      imgList: [
        require("@/assets/images/anhuiyiyuan.jpg"),
        require("@/assets/images/banner_z.png"),
        require("@/assets/images/70year.jpg")
      ],
    
      line1: [
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          pagename:"hosPreview",
          img: require("images/ic_home_outpatient.png")
        },
        {
          name: "急诊指南",
          detail: "急诊流程，急诊就诊范围",
           pagename:"leaderIntro",
          img: require("images/ic_home_emergency.png")
        },
        {
          name: "住院指南",
          detail: "住院须知、住院流程等信息",
          pagename:"hosPreview",
          img: require("images/ic_home_hospitalization.png")
        },
        {
          name: "预约挂号",
          detail: "预约挂号须知说明",
          pagename:"hosPreview",
          img: require("images/ic_home_reservation.png")
        },
        {
          name: "医保政策",
          detail: "医保卡办理说明，报销须知等",
          pagename:"hosPreview",
          img: require("images/ic_home_insurance.png")
        },
        {
          name: "诊室分布",
          detail: "医院诊室分布图文介绍",
          pagename:"hosPreview",
          img: require("images/ic_home_clinic.png")
        },
         {
          name: "医院地图",
          detail: "医院地图位置，周边建筑",
          pagename:"hosPreview",
          img: require("images/ic_home_map.png")
        },
        {
          name: "泊车指南",
          detail: "周围停车场位置",
          pagename:"hosPreview",
          img: require("images/ic_home_parking.png")
        },
        {
          name: "服务电话",
          detail: "医院常用联系电话头数方式",
          pagename:"hosPreview",
          img: require("images/ic_home_tel.png")
        }
      ],

      bannerOption: {
        loop: true,
        // direction: "horizontal"
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      docOption: {
        loop: true,
        // direction: "horizontal"
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        navigation: {
          nextEl: ".page-btn-next",
          prevEl: ".page-btn-prev"
        }
      },
      departOption: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        navigation: {
          nextEl: ".depart-next",
          prevEl: ".depart-prev"
        }
      }
    };
  },
  methods: {
    jumpTo(pagename){
      this.$router.push({name:pagename})
    },
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
