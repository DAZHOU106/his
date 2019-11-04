import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const AUTH_MUTATION = 'AUTH_MUTATION'
export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    [AUTH_MUTATION] (state) {
      if(localStorage.getItem('username')==""||localStorage.getItem('username')== null||localStorage.getItem('username')== undefined){
        state.isLogin = false
      } else {
        state.isLogin = true
      }
      console.log(state.isLogin)
    }
  },
  actions: {

  }
})
