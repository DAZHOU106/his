<template>
  <div class="top-nav-con" @mouseleave="hideNav">
    <div class="top-nav">
      <ul class="clearfix">
        <li class="top-nav-item" v-for="(item, index) in allNavData" :key="index" @mouseenter="showNav(item.child)" >
          <router-link to tag="span">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="second-menu" v-show="isShowNav" @mouseleave="hideNav">
        <div class="second-menu-inner">
          <div v-for="(item, index) in secNavList" :key="index">{{item}}</div>
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
      allNavData:[
        {
          title:"首页",
          child:[]
        },
        {
          title: "医院介绍",
          child:[
            {title:'医院概况',name:'hospIntro'},
           {title:'领导介绍',name:'leaderIntro'},
            ]
        },
          {
          title: "智慧医院",
          child:['医院概况',"领导界面"]
        },
         {
          title: "医院介绍",
          child:['医院概况',"领导界面"]
        },
         {
          title: "医院介绍",
          child:['医院概况',"领导界面"]
        },
      ],
      secNavList:[]
    };
  },
  methods: {
    showNav(child) {   
        console.log(child)
      this.secNavList = child
      if(this.secNavList.length>0){
        this.isShowNav=true;
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
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    width: 8%;
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
    padding: 30px 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px 0px 0px 0px;
    color: #221815;
  }
  .second-menu-inner {
    width: 1000px;
    margin: 0 auto
  }
}
</style>