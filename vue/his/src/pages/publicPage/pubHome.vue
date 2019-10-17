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
          <el-row>
            <el-col :span="8" v-for="(item, index) in line1" :key="index">
              <div class="guid-btn">
                <img :src="item.img" alt />
              </div>
              <div class="info">
                <div class="info-name">{{item.name}}</div>
                <div class="info-detail">{{item.detail}}</div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" v-for="(item, index) in line1" :key="index">
              <div class="guid-btn">
                <img :src="item.img" alt />
              </div>
              <div class="info">
                <div class="info-name">{{item.name}}</div>
                <div class="info-detail">{{item.detail}}</div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" v-for="(item, index) in line1" :key="index">
              <div class="guid-btn">
                <img :src="item.img" alt />
              </div>
              <div class="info">
                <div class="info-name">{{item.name}}</div>
                <div class="info-detail">{{item.detail}}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="pati-service">
          <div class="service-title clearfix">
            <div class="line"></div>
            <span class="title">患者服务</span>
          </div>
          <div class="btn-group">
            <div class="btn-service" v-for="(item, index) in btnGroup" :key="index">
              <img :src="item.img" />
              <div class="service-name">{{item.name}}</div>
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
        <swiper :options="docOption" style="padding-bottom:10px;">
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
        <swiper :options="departOption">
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
      <div class="layout-inner  clearfix">
        <div class="news-con  clearfix">
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
        <div class="notice-con  clearfix" style="margin-left:20px;">
          <div class="notice-title clearfix">
            <div class="line"></div>
            <div class="title">通知中心</div>
          </div>
          <div class="news-left">
              <div class="news-item" v-for="(item, index) in 8" :key="index">
                <img src="@/assets/images/ic_home_news.png" alt="" class="icon-news">
                <span class="content">123</span>
                 <span class="time">123</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <pub-footer/>
  </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
import PubFooter from "@/components/pubHome/pubFooter"
export default {
  name: "pubHome",
  components: {
    TopLogo,
    TopNav,
    PubFooter
  },
  data() {
    return {
      imgList: [
        require("@/assets/images/1.jpg"),
        require("@/assets/images/nethis.png"),
        require("@/assets/images/党.png")
      ],
      btnGroup: [
        {
          name: "互联网医院",
          img: require("@/assets/images/ic_home_internet.png")
        },
        {
          name: "互联网医院",
          img: require("@/assets/images/ic_home_internet.png")
        },
        {
          name: "互联网医院",
          img: require("@/assets/images/ic_home_internet.png")
        },
        {
          name: "互联网医院",
          img: require("@/assets/images/ic_home_internet.png")
        },
        {
          name: "互联网医院",
          img: require("@/assets/images/ic_home_internet.png")
        }
      ],
      line1: [
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        }
      ],
      line2: [
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        }
      ],
      line3: [
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
        },
        {
          name: "门诊指南",
          detail: "医院门诊挂号示意图等信息",
          img: require("@/assets/images/ic_home_outpatient.png")
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
  methods: {}
};
</script>
