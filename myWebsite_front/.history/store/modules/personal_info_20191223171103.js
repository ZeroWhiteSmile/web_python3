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
    personal_info_get(context) {
      context.commit(flux.PERSONAL_INFO_GET)
    },
    personal_info_edit(context, params) {
      return new Promise((resolve, reject) => {
        // console.log('context对象方法', context)
        // console.log('actions参数params', params)
        context.commit(flux.PERSONAL_INFO_EDIT, params)
        resolve()
      })
    },

  },
  mutations: {
    // 查询个人信息
    [flux.PERSONAL_INFO_GET](state) {
      // 查询数据库个人信息，写入state
      state = {
        ...state,
        ...editState
      }
    },
    // 修改个人信息
    [flux.PERSONAL_INFO_EDIT](state, editState) {
      // console.log('修改前mutations', state)
      // 修改个人信息
      state = {
        ...state,
        ...editState
      }
      // console.log('修改后mutations', state)
    }
  },
  modules: {}
}
export default modules_object
