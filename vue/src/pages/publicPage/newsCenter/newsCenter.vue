<template>
    <div class="news-center-wrapper">
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
    name:"",
    components: {
    TopLogo,
    TopNav,
    SideBar
  },
    data(){
        return{
navList:[
    {title:"院内新闻",pagename:"newsCenter"}
]
        }
    }
}
</script>

