<template>
    <div class="doc-team-wrapper">
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
      navList:[{title:"团队概括",pagename:"teamPreview"}]
    }
  },
}

</script>