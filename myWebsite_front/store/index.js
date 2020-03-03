import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 模块
import personal_info from './modules/personal_info.js'
const store = () => {
  return new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    modules: {
      // 命名空间模块一
      personal_info
    }
  })
}
export default store
