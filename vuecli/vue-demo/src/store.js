import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  //全局变量
  state: {
    count:0
  },
  mutations: {
    add(state,num){
      state.count += num;
    },
    reduce(state){
      state.count--;
    }
  },
  actions: {
    actionAdd({commit}){
      commit('add',50);
    }
  },
  getters:{ //监听
    count(state){
      return state.count+=100;
    }
  }
})
