import router from '../router'
import store from '../store'
// import store from '../store'
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if(to.matched.some(record => record.meta.requireAuth)){
      // localStorage.getItem("username")==""||localStorage.getItem("username")==null
     if(store.state.isLogin==false){
       next(
         {name:'pubHome'},
         confirm('您必须先登录才能操作')
         )  // 
     } else {
       next()
     }
    }else{
      next()
    }
  })