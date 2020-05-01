import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: ''
  },
  mutations: {
    setAuthToken (state, token) {
      localStorage.setItem('token', token)
      state.authToken = token
    }
  },
  getters: {
    isAuthenticated: (state, commit) => {
      if (!state.authToken) {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
          commit('setAuthToken', storedToken)
        }
      }
      return !!state.authToken
    }
  },
  actions: {
    setAuthToken ({ commit }, token) {
      commit('setAuthToken', token)
    }
  }
})
