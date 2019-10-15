<template>
  <div class="pubHome-wrapper">
    <!-- 头部logo+登陆 -->
    <top-logo />
    <!-- 中间导航栏 -->
    <top-nav />
    <!-- 轮播图 -->
    <div class="swiper-con" style="z-index:20">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <div class="img-con">
            <img :src="item" class="banner-img" />
          </div>
        </swiper-slide>
        <div class="swiper-button-next" slot="navigation"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next" slot="navigation"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination" slot="pagination"></div>
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
          <div class="service-title">
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
            <div class="special-name">系统特色</div>
            <div class="special-pic"></div>
          </el-col>
          <el-col :span="6">
             <div class="special-pic"></div>
            <div class="special-name">系统特色</div>
           
          </el-col>
          <el-col :span="6">
           <div class="special-name">系统特色</div>
            <div class="special-pic"></div>
          </el-col>
          <el-col :span="6">
             <div class="special-pic"></div>
            <div class="special-name">系统特色</div>
           
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
export default {
  name: "pubHome",
  components: {
    TopLogo,
    TopNav
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

      swiperOption: {
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
      }
    };
  },
  methods: {}
};
</script>
