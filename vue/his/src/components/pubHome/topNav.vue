<template>
  <div class="top-nav-con" @mouseleave="hideNav">
    <div class="top-nav">
      <ul class="clearfix">
        <li class="top-nav-item">
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
    <!-- <div class="second-menu" v-show="isShowNav" @mouseleave="hideNav">123</div> -->
  </div>
  <!-- ???问题 -->
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isShowNav: false
    };
  },
  methods: {
    showNav(e) {
      this.isShowNav = true;
        console.log(e)
      
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
    transition: .2s ease;
    position: absolute;
    z-index: 2000;
    width: 100%;
    top: 56px;
    padding: 30px 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px 0px 0px 0px;
    color: #221815;
  }
}
</style>