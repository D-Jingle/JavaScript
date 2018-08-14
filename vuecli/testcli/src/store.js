import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      imgItem:'',
      imgList:[
          {
              id:0,
              img:"./img/aaa.jpg",
          },
          {
              id:1,
              img:"./img/bbb.jpg",
          },
          {
              id:2,
              img:"./img/eee.jpg",
          },
          {
              id:3,
              img:"./img/fff.jpg",
          },
          {
              id:4,
              img:"./img/ggg.jpg",
          },
          {
              id:5,
              img:"./img/hhh.jpg",
          },
          {
              id:6,
              img:"./img/iii.jpg",
          },
          {
              id:7,
              img:"./img/jjj.jpg",
          }
      ]
  },
  mutations: {
      changeImgAdd(state,item){
        state.imgItem = item;
        // 注意取值方法
        console.log(state.imgItem);
      }
  },
  actions: {

  }
})
