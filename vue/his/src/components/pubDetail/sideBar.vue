<template>
  <div class="side-bar-wrapper">
    <ul class="side-nav-bar">
      <router-link
        :to="{name:item.pagename}"
        tag="li"
        v-for="(item, index) in navList"
        :key="index"
        class="side-nav-item"
      >{{item.title}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    navList: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.side-bar-wrapper {
  position: sticky;
  top: 20px;
  width: 150px;
  float: left;
  .link-active {
    background: $theme-blue;
  }
  .side-nav-bar {
    background: $theme-grey;
  }
  .side-nav-item {
    color: #ffffff;
    padding: 15px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  .side-nav-item:hover {
    color: #ffffff;
    background: $theme-blue;
  }
}

</style>