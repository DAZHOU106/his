<template>
  <div class="pubHome-wrapper">
    <top-logo />
    <top-nav />
    <div class="swiper-con" style="z-index:20">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <div class="img-con">
            <img :src="item" class="banner-img" />
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="navigation"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next" slot="navigation"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

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
            <span class="title">病患服务</span>
          </div>
          <div class="btn-service" v-for="(item, index) in btnGroup" :key="index">
            <img :src="item.img" />
            <span class="service-name">{{item.name}}</span>
          </div>
         
      </div>
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
