import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'我是名字',
    age: 18
  },
  getters: {
     myInfo:state=>{
       return 'my name is' + state.name + '.my age is:' + state.age
     },
     myInfoAgin: (state,getters)=>{
       return getters.myInfo
     },
     getMyName: (state) => (name) =>{
       return name == '我是名字'? state.name :'not me.'
     }
  },
  mutations: {
    addAgeOne(state){
      state.age ++;
    },
    addAge(state, payload){
      state.age += payload.amount;
    }
  },
  actions: {
    addAgeOne({commit}) {
     setTimeout(() => {
      commit('addAgeOne')
     }, 3000);
    },
    addAgeTwo({commit}) {
      setTimeout(() => {
       commit('addAgeOne')
      }, 5000);
    },
    addAgeThree({dispatch, commit}, payload) {
      //加1
      return dispatch('addAgeOne').then(()=>{
        commit('addAge',payload)
        //加20
      })
    },
    addAge({commit}, payload) {
      commit('addAge', payload)
    }
  }
})