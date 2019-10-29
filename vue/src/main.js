import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "@/libs/http";
import "./styles/index.scss";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'BzZkzOE1UuzGIMGxkp8odM7LhrBHxme5'
})

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.matched.some(record => record.meta.requireAuth)){
   if(localStorage.getItem("username")!=""){
     next({name:"pubHome"})
   }
   else{
     next()
   }
  }else{
    next()
  }
})

Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
