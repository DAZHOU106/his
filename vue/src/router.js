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
      redirect: {name:"pubHome"},
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
          component: () => import("./pages/publicPage/hosIntro/leaderIntro.vue"),
      
        },
        {
          path: "leaderDetail",
          name: "leaderDetail",
          props: true,
          component: () => import("./pages/publicPage/hosIntro/leaderDetail")
        },
      ]
      
    },
    
    {
      path: "/docTeam",
      name: "docTeam",
      props: true,
      redirect: {name:"teamPreview"},
      component: () => import("./pages/publicPage/docTeam/docTeam.vue"),
      children:[
        {
          path: "/docTeam/teamPreview",
          name: "teamPreview",
          props: true,
          component: () => import("./pages/publicPage/docTeam/teamPreview.vue"),
        }
      ]
    },

    {
      path:"/patiGuide",
      name:"patiGuide",
      props:true,
      redirect:{name:"outpatient"},
      component: () => import("./pages/publicPage/patiGuide/patiGuide.vue"),
      children:[
        {
          path: "/patiGuide/outpatient",
          name:"outpatient",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/outpatient.vue"),
        
        },
        {
          path: "/patiGuide/emergency",
          name:"emergency",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/emergency.vue")
        },
        {
          path: "/patiGuide/Hospitalization",
          name:"Hospitalization",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/Hospitalization.vue")
        },
        {
          path: "/patiGuide/reservation",
          name:"reservation",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/reservation.vue")
        },
        {
          path: "/patiGuide/insurance",
          name:"insurance",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/insurance.vue")
        },
        {
          path: "/patiGuide/clinic",
          name:"clinic",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/clinic.vue")
        },
        {
          path: "/patiGuide/map",
          name:"map",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/map.vue")
        },
        {
          path: "/patiGuide/park",
          name:"park",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/park.vue")
        },
        {
          path: "/patiGuide/tel",
          name:"tel",
          props:true,
          component: () => import("./pages/publicPage/patiGuide/tel.vue"),
        },
        
      ]
    },
    {
      path:"/:type/guideDetail",
      name:"guideDetail",
      props:true,
      component: () => import("./pages/publicPage/patiGuide/guideDetail.vue")
    },
    {
      path:"/newsCenter",
      name: "newsCenter",
      redirect: {name:'hosNews'},
      props: true,
      component: () => import("./pages/publicPage/newsCenter/newsCenter.vue"),
      children:[
        {
        path:"/newsCenter/hosNews",
        name: "hosNews",
        props: true,
        component: () => import("./pages/publicPage/newsCenter/hosNews.vue"),
      },
      {
        path:"/newsCenter/hosNewsDetail",
        name: "hosNewsDetail",
        props: true,
        component: () => import("./pages/publicPage/newsCenter/hosNewsDetail.vue"),
      },
      
    ]
    },
    {
      path:"/constrWork",
      name: "constrWork",
      props: true,
      component: () => import("./pages/publicPage/constrWork/constrWork.vue"),
    },
    {
      path:"/appointment",
      name:"appointment",
      props:true,
      meta:{requireAuth:true},
      component: () => import ('./pages/patient/appointment/appointment.vue')
    }

  ],

}
);



