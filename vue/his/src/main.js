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

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;

Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
