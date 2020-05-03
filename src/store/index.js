import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('token'),
    authProfile: localStorage.getItem('profile')
  },
  mutations: {
    setAuthToken (state, token) {
      localStorage.setItem('token', token)
      state.authToken = token
    },
    setAuthProfile (state, profile) {
      localStorage.setItem('profile', profile)
      state.authProfile = profile
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!state.authToken
    },
    isVeto: state => {
      return state.authProfile === 'veto'
    }
  },
  actions: {
    setAuthToken ({ commit }, token) {
      commit('setAuthToken', token)
    },
    setAuthProfile ({ commit }, profile) {
      commit('setAuthProfile', profile)
    }
  }
})
