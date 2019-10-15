<template>
  <div style="position:relative;">
    <div class="top-nav-con">
      <div class="top-nav">
        <ul class="clearfix">
          <li class="top-nav-item" @mouseenter="showNav" @mouseleave="hideNav">
            <router-link to tag="span">网站首页</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">医院介绍</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">智慧医院</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">医疗团队</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">就医指南</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">新闻中心</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">党建工作</router-link>
          </li>
          <li class="top-nav-item">
            <router-link to tag="span">网站首页</router-link>
          </li>
        </ul>
      </div> 
    </div>
   <!-- ???问题 -->
  </div>
</template>

<script>
export default {
    name:"nav-bar",
    data(){
        return{
            isShowNav:false
        }
    },
    methods:{
    showNav () {
        this.isShowNav = true

        console.log("123")
    },
    hideNav() {
        this.isShowNav = false
    }
    }
};
</script>

<style lang="scss" scoped>
.top-nav-con {
  width: auto;
  min-width: 1000px;
  background: #2ebfe1;
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
    height: 34px;
    top: 22px;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    width: 8%;
    padding: 0 10px;
    margin-right: 10px;
  }
  .top-nav-item:hover {
    border-bottom: 4px solid #ffffff;
  }
  .nav-bottom {
      background-color: #ffffff;
      position: absolute;
      width:100%;
      z-index:-1;
  }
}
</style>