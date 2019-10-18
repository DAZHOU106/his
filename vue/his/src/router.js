import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'link-active',
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name:"pubHome"},
    },
    {
      path: "/pubHome",
      name: "pubHome",
      props: true,
      component: () => import("./pages/publicPage/pubHome.vue")
    },
    {
      path: "/hosIntro",
      redirect: { name:"hosPreview"},
      name: "hosIntro",
      props: true,
      component: () => import("./pages/publicPage/hosIntro/hosIntro.vue"),
      children: [
        {
          path: "/hosIntro/hosPreview",   
          name: "hosPreview",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/hosPreview.vue")
        },
        {
          path: "/hosIntro/hosCulture",   
          name: "hosCulture",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/hosCulture.vue")
        },
        {
          path: "/hosIntro/hosEquip",   
          name: "hosEquip",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/hosEquip.vue")
        },
        {
          path: "/hosIntro/hosIdentity",   
          name: "hosIdentity",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/hosIdentity.vue")
        },
        {
          path: "/hosIntro/hosRules",   
          name: "hosRules",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/hosRules.vue")
        },
        {
          path: "/hosIntro/leaderIntro",   
          name: "leaderIntro",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/leaderIntro.vue")
        },
      ]
    },

    {
      path: "/onlineHos",
      name: "onlineHos",
      props: true,
      component: () => import("./pages/publicPage/onlineHos/onlineHos.vue"),
    },
    // {
    //   path: "/onlineHos",
    //   name: 'onlineHos',
    //   props:true,
    //   component: () => import('./pages/publicPage/onlineHos.vue'),
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component:
    //   () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
