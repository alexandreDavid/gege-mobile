import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('token')
  },
  mutations: {
    setAuthToken (state, token) {
      localStorage.setItem('token', token)
      state.authToken = token
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!state.authToken
    }
  },
  actions: {
    setAuthToken ({ commit }, token) {
      commit('setAuthToken', token)
    }
  }
})
