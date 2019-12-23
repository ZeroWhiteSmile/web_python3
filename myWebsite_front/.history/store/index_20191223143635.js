import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 模块
import personal_info from 'modules/personal_info.js'
const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    personal_info
  }
})

export default
