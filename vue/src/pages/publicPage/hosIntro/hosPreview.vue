<template>
  <div class="hosprev-wrapper">
    <div class="preview-title">
      <div class="line"></div>
      <div class="title">医院概况</div>
    </div>
    <div class="hos-img">
        <img src="@/assets/images/hospitalk.jpg" alt="">
    </div>
    <p class="pre-intro-article" v-for="(item,index) in 9" :key="index">
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Velit provident sit optio quae.
         Nihil, ipsum quae iste ullam 
         quo quidem voluptate quasi ex dis
         tinctio earum accusamus quaerat, simi
         lique nobis soluta.

    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>