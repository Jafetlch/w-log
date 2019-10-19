import { getLocalUser, logout } from '@/helpers/auth'

const user = getLocalUser()

const AUTH_STATE = {
  LOGIN: {
    isLoggedIn: !!user,
    error: null
  }
}

const AUTH_MUTATIONS = {
  setLogin (state) {
    state.LOADING = true
    state.LOGIN.auth_error = null
  },
  setLoginSuccess (state, payload) {
    state.LOGIN.auth_error = null
    state.LOGIN.isLoggedIn = true
    state.LOADING = false
    state.USER = Object.assign({}, payload.user, { token: payload.token, refresh: payload.refresh })

    localStorage.setItem('user', JSON.stringify(state.USER))
  },
  setLogout (state) {
    localStorage.removeItem('user')
    state.USER.isLoggedIn = false
    state.USER = null
    state.LOADING = false
  }
}

const AUTH_ACTIONS = {
  login (context) {
    context.commit('setLogin')
  },
  logout (context) {
    logout()
    context.commit('setLogout')
  }
}

export { AUTH_STATE, AUTH_MUTATIONS, AUTH_ACTIONS }
