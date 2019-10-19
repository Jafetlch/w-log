import axios from '@/plugins/axios'

/* eslint-disable */
export function login (credentials) {
  return new Promise((res, rej) => {
    axios.post('api/auth/login', credentials)
      .then(response => res(response))
      .catch(error => rej(error))
  })
}

export function logout () {
  return new Promise((res, rej) => {
    axios.post('api/auth/logout')
      .then(response => res(response))
      .catch(error => rej(error))
  })
}

export function getLocalUser () {
  const userStr = localStorage.getItem('user')
  if (!userStr) {
    return null
  }
  return JSON.parse(userStr)
}
