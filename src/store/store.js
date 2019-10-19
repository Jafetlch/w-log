import Vue from 'vue'
import Vuex from 'vuex'

import URL from '@/helpers/url'

import { USER_STATE, USER_GETTERS } from '@/store/userStore'
import { AUTH_STATE, AUTH_MUTATIONS, AUTH_ACTIONS } from '@/store/authStore'
import { ERRORSTATE, ERRORGETTERS, ERRORMUTATIONS } from '@/store/errorStore'
import { POSTSTATE, POSTGETTERS, POSTMUTATIONS, POSTACTIONS } from '@/store/postStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LOCAL_THEME: true,
    VERSION: 'Beta-v 0.1',
    SERVER_URL: URL.server,
    LOADING: false,
    ...USER_STATE,
    ...AUTH_STATE,
    ...ERRORSTATE,
    ...POSTSTATE
  },
  getters: {
    getLocalTheme (state) {
      return state.LOCAL_THEME
    },
    getLoading (state) {
      return state.LOADING
    },
    getServerURL (state) {
      return state.SERVER_URL
    },
    ...USER_GETTERS,
    ...ERRORGETTERS,
    ...POSTGETTERS
  },
  mutations: {
    setLocalTheme (state, payload) {
      state.LOCAL_THEME = payload
    },
    setLoading (state, payload) {
      state.LOADING = payload
    },
    ...ERRORMUTATIONS,
    ...AUTH_MUTATIONS,
    ...POSTMUTATIONS
  },
  actions: {
    ...AUTH_ACTIONS,
    ...POSTACTIONS
  }
})
