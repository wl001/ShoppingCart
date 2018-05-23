/**
 * Created by 王磊 on 2018/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'; // logger是一个日志插件

Vue.use(Vuex);

//数据data 也是唯一的容器
const state={
  cartList:[]
};

import * as Types from './type'
const mutations = {//相当于methods
  [Types.ADD_CART](state,book){
    // book是添加的一本书，如果有这本书 累加的是数量，如果没有数量为1 放到cartList中
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    if(product){
      product.bookCount+=1;
      //还要更新掉原数组，否则不会刷新
      state.cartList = [...state.cartList];
    }else{
      book.bookCount = 1;
      // 用新数组替换掉老数组
      state.cartList = [...state.cartList,book]
    }
  },
  [Types.REMOVE_CART](state,book){
  //删除 数据对比 一样的过滤掉
    state.cartList = state.cartList.filter(function(item){
      return item!=book
    });
    //删除 传bookId 书的id对比一样的删掉对应下标的数据
    //state.cartList.forEach((n,i)=>{
    //    console.log(n.bookId )
    //  console.log(bookId )
    //  if(n.bookId == bookId){
    //    state.cartList.splice(i,1)
    //  }
    //})
  },
  [Types.CHANGE_COUNT](state,book){//减少数量
    //先判断点击书的id找到相应的数据
    let product = state.cartList.find(item=>item.bookId===book.bookId)
    if(product){
      if(product.bookCount !=0){
        product.bookCount--;
        state.cartList = [...state.cartList];
      }
    }
  },
  [Types.ADD_COUNT](state,book){//增加数量
    //先判断点击书的id找到相应的数据
    let product = state.cartList.find(item=>item.bookId===book.bookId)
    product.bookCount++;
    state.cartList = [...state.cartList];
  },
  //清空购物车
  [Types.CLEAR_CART](state){
    state.cartList = [];
  }
};

import getters from './getters'

const  store = new Vuex.Store({
  state,
  mutations,
  getters,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});

export default store
