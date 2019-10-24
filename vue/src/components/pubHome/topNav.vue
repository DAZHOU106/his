<template>
  <div class="top-nav-con" @mouseleave="hideNav">
    <div class="top-nav">
      <ul class="clearfix ">
        <span v-for="(item, index) in allNavData" :key="index" @mouseenter="showNav(item.child)">
          <router-link class="top-nav-item" :to="{name:item.pagename}" tag="li">{{item.title}}</router-link>
        </span>
      </ul>
    </div>
    <div class="second-menu" v-show="isShowNav" @mouseleave="hideNav">
      <div class="second-menu-inner">
        <ul class="nav-item-con clearfix" style="list-style:normal inside">
          <li v-for="(item, index) in secNavList" :key="index" class="sec-nav-item">
            <router-link :to="{name:item.pagename}" tag="span">
            {{item.title}}
            </router-link>
            </li>
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
          child: [
            { title: "医院概况", pagename: "hosPreview" },
            { title: "领导介绍", pagename: "leaderIntro" },
            { title: "职业登记", pagename: "hosIdentity" },
            { title: "医院规章", pagename: "hosRules" }
          ]
        },
        {
          title: "医疗团队",
          pagename: "docTeam",
          child: [{ title: "团队概括", pagename: "teamPreview" }]
        },
        {
          title:"就诊指南",
          pagename:"patiGuide",
          child:[
            { title: "门诊指南", pagename: "outpatient" },
            { title: "急诊指南", pagename: "emergency" },
            { title: "住院指南", pagename: "Hospitalization" },
            { title: "预约挂号", pagename: "reservation" },
            { title: "医保政策", pagename: "insurance" },
            { title: "诊室分布", pagename: "clinic" },
            { title: "医院地图", pagename: "map" },
            { title: "泊车指南", pagename: "park" },
            { title: "服务电话", pagename: "tel" },
            ]
        },
        {
          title: "新闻中心",
          pagename: "newsCenter",
          child: [{ title: "新闻中心", pagename: "newsCenter" }]
        },
      
        {
          title: "党建工作",
          pagename: "constrWork",
          child: [{ title: "党建工作", pagename: "constrWork" }]
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
    border-bottom: 3px solid #ffffff;
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
    height: 220px;
    top: 60px;
    padding: 20px 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px 0px 0px 0px;
    color: #221815;
    .link-active {
      background: #ffffff;
      color:$theme-blue;
    }
  }
  .second-menu-inner {
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
  .nav-item-con {
    width:450px;
  }
  .sec-nav-item {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    margin-left: 30px;
    padding-left: 20px;
    background: url(~images/pic_link_arrow_black.png) left center no-repeat;
    cursor: pointer;
    width:150px;
    margin-top:20px;
    float: left;
  }
  .sec-nav-item:hover {
    text-decoration: underline;
    text-decoration-color: #999;
  }
}
</style>