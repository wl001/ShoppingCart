/**
 * Created by 王磊 on 2018/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'; // logger是一个日志插件

Vue.use(Vuex)
import * as Types from './type'
//数据data 也是唯一的容器
const state={
  count:0
};

const mutations = {//相当于methods
  [Types.INCREMENT](state,count){
    //state.count ++ ;
    state.count += count
  },
  [Types.DECREMENT](state){
    state.count --;
  }
}
const getters = {//相当于computed 大家公用的
  //获取值得方式 {{$store.getters.val}}
  val:(state)=>state.count%2?'奇数':'偶数'
};

const  store = new Vuex.Store({
  state,
  mutations,
  getters,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});

export default store
