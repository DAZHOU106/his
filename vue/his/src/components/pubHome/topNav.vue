<template>
  <div class="top-nav-con" @mouseleave="hideNav">
    <div class="top-nav">
      <ul class="clearfix">
        <span v-for="(item, index) in allNavData" :key="index" @mouseenter="showNav(item.child)">
          <router-link class="top-nav-item" :to="{name:item.pagename}" tag="li">{{item.title}}</router-link>
        </span>
      </ul>
    </div>
    <div class="second-menu" v-show="isShowNav" @mouseleave="hideNav">
      <div class="second-menu-inner">
        <ul style="list-style:normal inside">
          <li v-for="(item, index) in secNavList" :key="index" class="sec-nav-item">{{item.title}}</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ???问题 -->
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isShowNav: false,
      allNavData: [
        {
          title: "首页",
          pagename: "pubHome",
          child: []
        },
        {
          title: "医院介绍",
          pagename: "hosIntro",
          child: [{ title: "领导介绍", pagename: "leaderIntro" }]
        },
        {
          title: "医疗团队",
          pagename: "onlineHos",
          child: [{ title: "领导介绍", pagename: "leaderIntro" }]
        },
         {
          title: "就医指南",
          pagename: "onlineHos",
          child: [{ title: "领导介绍", pagename: "leaderIntro" }]
        },
          {
          title: "新闻中心",
          pagename: "onlineHos",
          child: [{ title: "领导介绍", pagename: "leaderIntro" }]
        },
        {
          title: "党建工作",
          pagename: "onlineHos",
          child: [{ title: "领导介绍", pagename: "leaderIntro" }]
        }
      ],
      secNavList: []
    };
  },
  methods: {
    showNav(child) {
      this.secNavList = child;
      if (this.secNavList.length > 0) {
        this.isShowNav = true;
      } else {
        this.isShowNav = false;
      }
    },
    hideNav() {
      this.isShowNav = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav-con {
  width: auto;
  min-width: 1000px;
  background: #2ebfe1;
  position: relative;
  .link-active {
    border-bottom: 4px solid #ffffff;
  }
  .top-nav {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    height: 60px;
  }
  .top-nav-item {
    float: left;
    display: block;
    position: relative;
    // height: 34px;
    top: 25px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    width: 10%;
    padding: 0 10px 15px;
    margin-right: 10px;
  }
  .top-nav-item:hover {
    border-bottom: 4px solid #ffffff;
  }
  .second-menu {
    // display: none;
    position: absolute;
    z-index: 2000;
    width: 100%;
    min-width: 1000px;
    top: 60px;
    padding: 20px 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px 0px 0px 0px;
    color: #221815;
  }
  .second-menu-inner {
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
  .sec-nav-item {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    margin-left: 30px;
    padding-left: 20px;
    background: url(~images/pic_link_arrow_black.png) left center no-repeat;
    cursor: pointer;
  }
  .sec-nav-item:hover {
    text-decoration: underline;
    text-decoration-color: #999;
  }
}
</style>