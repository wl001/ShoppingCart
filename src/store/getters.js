/**
 * Created by 王磊 on 2018/5/17.
 */
const getters = {
  //共计多少本
  count: (state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0),
  //总价
  totalPrice: (state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount*next.bookPrice,0),
  //总价的另一个写法
  //totalPricea:function(state){
  //  let total = 0;
  //  state.cartList.forEach(n=>{
  //    total += n.bookCount * n.bookPrice
  //  })
  //  return total;
  //}
}
export  default getters
