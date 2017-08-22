import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 需要维护的状态
// 初始化 state
const state = {
  list: [],
}
// 初始化 mutations
const mutations = {
  List(state,data) {
    state.list = data
  }
}
// 初始化 actions
const actions = {
  list({commit},data) {
    commit('List',data)
  }
}
// 返回改变后的数值
const getters = {
};
export default new Vuex.Store({
  state,
mutations,actions})
