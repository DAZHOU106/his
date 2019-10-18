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
</style>