import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
})

export default store



// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
// // 创建Vuex实列
// const store = new Vuex.Store({
//   state:{
//     count:1,
//     name:"张三",
//     age:20,
//     gender:"男"
//   },
//   getters:{// 类似vue的computed
//     getStateCount:function (state) { // 上面的state
//       return state.count+1;
//     }
//   },
//   mutations:{
//     add(state){//上面定义的state对象
//       state.count = state.count+1;
//     },
//     reduction(state){//上面定义的state对象
//       state.count = state.count-1;
//     }
//   },
//   actions:{// 注册action。类似vue里的methods
//     addFun(context){//接收一个与store实列相同的方法
//       context.commit("add");
//     },
//     reductionFun(context){
//       context.commit("reduction");
//     }
//   }
// })
//
// export default store
