<template>
  <div class="pub-footer-wrapper">
    <div class="footer-top-wrapper">
      <div class="footer-top-inner clearfix">
        <div class="divider-line"></div>
        <div class="inner-content-left">
          <div class="fl-title">卫生系统网站</div>
          <div class="link-con">
              <div class="link-item">
                  国家卫生委员会
              </div>
              <div class="link-item">
                  国家卫生委员会
              </div>
               <div class="link-item">
                  国家卫生委员会
              </div>
          </div>
        </div>
           <div class="inner-content-left">
          <div class="fl-title">友院链接</div>
          <div class="link-con clearfix">
              <div class="link-item">
                  中科大附院
              </div>
              <div class="link-item">
                  安医大附院
              </div>
               <div class="link-item">
                  弋矶山医院
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-wrapper">
        <div class="bottom-inner">
            <div class="rights-content">
                <div class="site-tip">
                    版权与免责声明 | 隐私安全
                </div>
                <div class="declare">
                   <span>Copyright © 2017 XXX医院网站版权所有</span>
                   &emsp;
                   <span>域名：www.siruikeji.com.cn</span> 
                   &emsp;
                   <span> POWERED BY RAY </span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pubFooter"
};
</script>
<style lang="scss">
.pub-footer-wrapper {
  .footer-top-wrapper {
    background: #2d313d;
    min-width: 1000px;
    color: #F2F3F3;
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
      color:#F2F3F3
  }
  .link-item {
    width: 50%;
    float: left;
    // text-indent: 20px;
    margin-top:15px;
    font-size: 12px;
    color:#D8D8D8;
    background: url(~/assets/images/pic_link_arrow)
  }
  .footer-bottom-wrapper {
      min-width: 1000px;
      font-size: 14px;
      margin-top: 20px;
      .bottom-inner {
          width:1000px;
          margin: 0 auto;
          padding: 0 20px;
      }
      .rights-content {
          padding: 20px 0;
          color:#3b3f4b;
      }
      .declare {
          margin-top: 20px;
          color:#999;
      }
  }
}
</style>