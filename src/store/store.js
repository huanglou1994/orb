import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: ''
}
const mutations = {
  getLoginName (state, name) {
    state.username = name
    localStorage.setItem('userName', name)
  }
}
const actions = {}
const getters = {
  getName: (state) => localStorage.getItem('userName')
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
