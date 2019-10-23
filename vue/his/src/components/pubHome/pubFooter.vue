<template>
  <div class="pub-footer-wrapper">
    <div class="footer-top-wrapper">
      <div class="footer-top-inner clearfix">
        <div class="divider-line"></div>
        <div class="inner-content-left">
          <div class="fl-title">卫生系统网站</div>
          <div class="link-con">
            <div class="link-item">国家卫生委员会</div>
            <div class="link-item">国家卫生委员会</div>
            <div class="link-item">国家卫生委员会</div>
          </div>
        </div>
        <div class="inner-content-left">
          <div class="fl-title">友院链接</div>
          <div class="link-con clearfix">
            <div class="link-item">中科大附院</div>
            <div class="link-item">安医大附院</div>
            <div class="link-item">弋矶山医院</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-wrapper">
      <div class="bottom-inner">
        <div class="rights-content">
          <div class="site-tip">
            <span style="cursor:pointer;" @click="showRight">版权与免责声明</span>
            <span>|</span>
            <span>隐私安全</span>
          </div>
          <div class="declare">
            <span>Copyright © 2017 XXX医院网站版权所有</span>
            &emsp;
            <span>域名：www.siruikeji.com.cn</span>
            &emsp;
            <span>POWERED BY RAY</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="版权与免责声明"
      :visible.sync="isShow"
      width="50%"
      >
      <p style="font-size:24px">
        本网站仅供本人大学期间毕业设计使用,非商用，非公共展示，其中网站图标，网站结构布局，大部分来自<strong @click="jumpTo" style="cursor:pointer; text-decoration:underline;color:blue">浙江省人民医院网站</strong></p>
         <p style="font-size:24px">使用到的素材未涉及到任何医生信息以及医院相关技术性文章 </p>
       <p style="font-size:24px"> 任何人或组织（包括但不限于老师、学校、和此页面源码有直接接触的人）不得传播至互联网 </p> 
       <p style="font-size:24px"> 否则对
         <strong @click="jumpTo" style="cursor:pointer; text-decoration:underline;color:blue">浙江省人民医院网站</strong>造成的损失，
       均由传播者承担
       </p>
      <p>任何访问过此网站的人，均视为已阅读过此免责声明</p>
    </el-dialog>
    
  </div>
</template>
<script>
export default {
  name: "pubFooter",
  data(){
    return{
      isShow: false
    }
  },
  methods: {
    showRight(){
      this.isShow=true
    },
    jumpTo(){
      location.href='http://www.hospitalstar.com/'
    }
  },
};
</script>
<style lang="scss">
.pub-footer-wrapper {
  .footer-top-wrapper {
    background: #2d313d;
    min-width: 1000px;
    color: #f2f3f3;
  }
  .footer-top-inner {
    width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .divider-line {
    height: 2px;
    width: 100%;
    border-bottom: 1px solid #3b3f4b;
    padding-top: 20px;
  }
  .inner-content-left {
    padding: 25px 0;
    float: left;
    width: 50%;
  }
  .fl-title {
    color: #f2f3f3;
  }
  .link-item {
    width: 50%;
    float: left;
    // text-indent: 20px;
    margin-top: 15px;
    font-size: 12px;
    color: #d8d8d8;
    background: url(~/assets/images/pic_link_arrow);
  }
  .footer-bottom-wrapper {
    min-width: 1000px;
    font-size: 14px;
    margin-top: 20px;
    .bottom-inner {
      width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .rights-content {
      padding: 20px 0;
      color: #3b3f4b;
    }
    .declare {
      margin-top: 20px;
      color: #999;
    }
  }
}
</style>