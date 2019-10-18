<template>
  <div class="hosintro-wrapper">
    <top-logo></top-logo>
    <top-nav></top-nav>
        <div class="top-banner"></div>    
     <div class="intro-main-con clearfix">
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
          {title:"医院概况",pagename:"hosPreview"},
          {title:"领导介绍",pagename:"leaderIntro"},
          {title:"职业登记",pagename:"hosIdentity"},
          {title:"医院规章",pagename:"hosRules"},
          {title:"高新设备",pagename:"hosEquip"},
          {title:"医院文化",pagename:"hosCulture"},      
          ]
    };
  }
};
</script>

