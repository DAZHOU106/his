<template>
  <div class="info-preview-wrapper">
    <div class="info-preview-card" v-for="(item, index) in cardInfo" :key="index">
      <div class="card-header fl">
        <slot></slot>
      </div>
      <div class="card-content fl">
        <div class="card-title">{{item.cardTitle}}</div>
        <div
          class="card-detail"
        >{{item.cardDetail}}</div>
      </div>
      <div class="check-now fr">
        <span>查看详情</span>
        <i class="iconfont iconxiangyou"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'fs';
export default {
    name: '',
    props:{
       cardInfo:{
           type: Array,
           default:[
               {disTitle:"*",disDetail:"*"}
               ]
       }
       
    },
    data() {
        
    },
    methods:{

    },
};
</script>

<style lang="scss">
.info-preview-wrapper {
  .info-preview-card {
    height: 110px;
    border: 1px solid #ededed;
    cursor: pointer;
    transition: box-shadow 0.1s ease;
    position: relative;
    overflow: hidden;
  }
  .info-preview-card:hover {
    box-shadow: 0 0 5px 5px $theme-light-grey;
  }
  .card-header {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: $theme-blue;
    text-align: center;
    color: #ffffff;
    margin: 15px 20px 0 20px;
  }
  .check-now {
    width: 200px;
    height: 100%;
    background: $theme-yellow;
    text-align: center;
    line-height: 110px;
    position: absolute;
    right: 0;
    transform: translateX(100%);
    transition: transform 0.2s ease;
  }

  .info-preview-card:hover .check-now {
    transform: translateX(0);
  }
  .card-content {
    height: 90px;
    width: calc(100% - 150px);
    margin: 10px 0;
  }
  .card-detail {
    color: #999;
    font-size: 14px;
    margin-top: 6px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>