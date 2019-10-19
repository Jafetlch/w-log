import { getLocalUser } from '@/helpers/auth'

const user = getLocalUser()

const USER_STATE = {
  USER: user
}

const USER_GETTERS = {
  getUser (state) {
    return state.USER
  }
}

export { USER_STATE, USER_GETTERS }
