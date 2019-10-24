<template>
    <div class="guide-wrapper">
           <top-logo></top-logo>
    <top-nav></top-nav>
     <div class="top-banner"></div> 
     <div class="intro-main-con">
       <side-bar :navList="navList"></side-bar>
       <div class="intro-con-right">
         <router-view></router-view>
       </div>
     </div>
    </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
import SideBar from "@/components/pubDetail/sideBar"
export default {
    name: "",
  components: {
    TopLogo,
    TopNav,
    SideBar
  },
  data() {
    return {
      navList:[
          {title:"门诊指南",pagename:"outpatient"},
          {title:"急诊指南",pagename:"emergency"},
          {title:"住院指南",pagename:"Hospitalization"},
          {title:"预约挂号",pagename:"reservation"},
          {title:"医保政策",pagename:"insurance"},
          {title:"诊室分布",pagename:"clinic"},
          {title:"医院地图",pagename:"map"},
          {title:"泊车指南",pagename:"park"},
          {title:"服务电话",pagename:"tel"},
          ]
    }
  },
}
</script>

<style lang="">
    
</style>