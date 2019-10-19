const ERRORSTATE = {
  ERROR: {
    data: [],
    display: false
  }
}

const ERRORGETTERS = {
  getError (state) {
    return state.ERROR.data
  },
  getDisplayError (state) {
    return state.ERROR.display
  }
}

const ERRORMUTATIONS = {
  setError (state, payload) {
    state.ERROR.data = payload
  },
  setDisplayError (state, payload) {
    state.ERROR.display = payload
  }
}

export { ERRORSTATE, ERRORGETTERS, ERRORMUTATIONS }
