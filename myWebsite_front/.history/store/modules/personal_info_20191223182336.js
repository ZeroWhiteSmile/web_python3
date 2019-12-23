// mutations flux变量
import * as flux from '../flux_structrue.js'
const modules_object = {
  namespaced: true,
  state: {
    name: '小白',
    age: '-',
    gender: '男'
  },
  actions: {
    // 查询个人信息
    personal_info_get(context) {
      return new Promise((resolve, reject) => {
        let resultState = {}
        context.commit(flux.PERSONAL_INFO_EDIT, resultState)
        resolve()
      })
    },
    // 修改个人信息
    personal_info_edit(context, params) {
      return new Promise((resolve, reject) => {
        // console.log('context对象方法', context)
        // console.log('actions参数params', params)
        let params = {}
        let resultState = {}
        context.commit(flux.PERSONAL_INFO_EDIT, resultState)
        resolve()
      })
    },

  },
  mutations: {
    // 修改个人信息
    [flux.PERSONAL_INFO_EDIT](state, editState) {
      console.log('修改前mutations', state)
      state = {
        ...state,
        ...editState
      }
      console.log('修改后mutations', state)
    }
  },
  modules: {}
}
export default modules_object
