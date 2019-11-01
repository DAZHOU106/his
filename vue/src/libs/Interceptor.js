import router from '../router'
// import store from '../store'

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if(to.matched.some(record => record.meta.requireAuth)){
     if(localStorage.getItem("username")==""||localStorage.getItem("username")==null){
      console.log(next)
       next(
         {name:'pubHome'},
         confirm('您必须先登录才能操作')
         )  // 
     }
    }else{
      next()
    }
  })