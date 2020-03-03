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
    // 提交个人信息mutations
    edit_personal_info(context, params) {
      return new Promise((resolve, reject) => {
        console.log('context对象方法', context)
        console.log('params', params)
        context.commit(flux.PERSONAL_INFO, params)
        resolve()
      })
    }
  },
  mutations: {
    [flux.PERSONAL_INFO](state, editState) {
      console.log('mutations', state)
      // 修改个人信息
      state = {
        ...state,
        ...editState
      }
      console.log('mutations', state)
    }
  },
  modules: {}
}
export default modules_object
