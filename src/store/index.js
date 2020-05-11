import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('token'),
    authRole: localStorage.getItem('role'),
    authGroup: +localStorage.getItem('group')
  },
  mutations: {
    setAuthToken (state, token) {
      localStorage.setItem('token', token)
      state.authToken = token
    },
    setAuthRole (state, role) {
      localStorage.setItem('role', role)
      state.authRole = role
    },
    setAuthGroup (state, group) {
      localStorage.setItem('group', group)
      state.authGroup = group
    }
  },
  getters: {
    isAuthenticated: state => {
      return !!state.authToken
    },
    isVeto: state => {
      return state.authRole === 'veto'
    }
  },
  actions: {
    setAuthToken ({ commit }, token) {
      commit('setAuthToken', token)
    },
    setAuthRole ({ commit }, role) {
      commit('setAuthRole', role)
    },
    setAuthGroup ({ commit }, group) {
      commit('setAuthGroup', group)
    }
  }
})
