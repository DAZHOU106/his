<template>
  <div class="pubHome-wrapper">
    <!-- 头部logo+登陆 -->
    <top-logo  @logOut="logOut"/>
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
            <div class="btn-service" @click="showLogin" v-if="!isLogin">
              <img src="@/assets/images/ic_home_internet.png" />
              <div class="service-name">登录/注册</div>
            </div>
             <div class="btn-service" @click="moveToPerson('personalCenter')" v-if="isLogin">
              <i class="iconfont icongeren" style="float:left; width:35px;text-align: center; font-size:32px;line-height:38px"></i>
              <div class="service-name">个人中心</div>
            </div>
             <div class="btn-service" @click="moveToReser('appointment')">
              <img src="@/assets/images/ic_home_register.png" />
              <div class="service-name">预约挂号</div>
            </div>
             <div class="btn-service" @click="moveToReport('myReport')" >
              <img src="@/assets/images/ic_home_inquire.png" />
              <div class="service-name">化验单查询</div>
            </div>
             <div class="btn-service" @click="moveToCommu('communicate')">
              <img src="@/assets/images/ic_home_advisory.png" />
              <div class="service-name">互动交流</div>
            </div>
             <div class="btn-service" @click="moveToSurvey('survey')">
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
      <login-register :isShowLogin="isShowLogin" @closeDia="closeDia" />
  </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
import PubFooter from "@/components/pubHome/pubFooter";
import LoginRegister from "@/components/loginRegister/loginRegister";
export default {
  name: "pubHome",
  components: {
    TopLogo,
    TopNav,
    PubFooter,
    LoginRegister
  },
  data() {
    return {
      isShowLogin:false,
      imgList: [//轮播图图片
        require("@/assets/images/anhuiyiyuan.jpg"),
        require("@/assets/images/banner_z.png"),
        require("@/assets/images/70year.jpg")
      ],
    
      line1: [ //九宫格图片以及信息
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          pagename:"outpatient",
          img: require("images/ic_home_outpatient.png")
        },
        {
          name: "急诊指南",
          detail: "急诊流程，急诊就诊范围",
           pagename:"emergency",
          img: require("images/ic_home_emergency.png")
        },
        {
          name: "住院指南",
          detail: "住院须知、住院流程等信息",
          pagename:"Hospitalization",
          img: require("images/ic_home_hospitalization.png")
        },
        {
          name: "预约挂号",
          detail: "预约挂号须知说明",
          pagename:"reservation",
          img: require("images/ic_home_reservation.png")
        },
        {
          name: "医保政策",
          detail: "医保卡办理说明，报销须知等",
          pagename:"insurance",
          img: require("images/ic_home_insurance.png")
        },
        {
          name: "诊室分布",
          detail: "医院诊室分布图文介绍",
          pagename:"clinic",
          img: require("images/ic_home_clinic.png")
        },
         {
          name: "医院地图",
          detail: "医院地图位置，周边建筑",
          pagename:"map",
          img: require("images/ic_home_map.png")
        },
        {
          name: "泊车指南",
          detail: "周围停车场位置",
          pagename:"park",
          img: require("images/ic_home_parking.png")
        },
        {
          name: "服务电话",
          detail: "医院常用联系电话投诉方式",
          pagename:"tel",
          img: require("images/ic_home_tel.png")
        }
      ],
      logout: false,
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
  computed:{
    isLogin:{
      get(){
          if(localStorage.getItem("userName")!=""||localStorage.getItem("userName")!=null){
        return true
      }else{
        return false;
      }
      },
    set(val){
      // console.log(val)
      this.isLogin = val
    }
    }
  },
  methods: {

    jumpTo(pagename){
      this.$router.push({name:pagename})
    },
    //展开登录弹窗
     showLogin() {
      this.isShowLogin = true;
    },
    // 切换表单
    switchForm(type){
      this.formType = type
    },
    closeDia() {
      this.isShowLogin = false
    },
    // 用户登录
    userLogin(){
     
      this.$http.post(
        "http://localhost:8088/biyesheji/his/PHP/pubaction/index/login",
        this.loginForm
      ).then(res=>{
        console.log(res)
      })
    },
    // 点击注销
    logOut(){
      console.log(this.isLogin)
      localStorage.removeItem('username')
    },
    moveToReser(pageName){
      this.$router.push({name:pageName})
    }
  }
};
</script>
