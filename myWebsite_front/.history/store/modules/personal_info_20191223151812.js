const module = {
  state: {
    name: '小白',
    age: '-',
    gender: '男'
  },
  actions: {},
  mutations: {
    [PERSONAL_INFO](state, editState) {
      console.log(stats)
      state = {
        ...state,
        ...editState
      }
    }
  },
  modules: {}
}
export default module
