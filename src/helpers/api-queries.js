import axios from '@/plugins/axios'

/* eslint-disable */
export function getData (route) {
  return new Promise((res, rej) => {
    axios.get(`api/${route}`)
      .then(response => res(response.data))
      .catch(error => rej(error))
  })
}

export function createData (route, parameters) {
  return new Promise((res, rej) => {
    axios.post(`api/${route}`, parameters)
      .then(response => res(response))
      .catch(error => rej(error))
  })
}

export function showData (route, code) {
  return new Promise((res, rej) => {
    axios.get(`api/${route}/${code}`)
      .then(response => res(response))
      .catch(error => rej(error))
  })
}

export function editData (route, code, parameters) {
  return new Promise((res, rej) => {
    axios.put(`api/${route}/${code}`, parameters)
      .then(response => res(response))
      .catch(error => rej(error))
  })
}

export function deleteData (route, code) {
  return new Promise((res, rej) => {
    axios.delete(`api/${route}/${code}`)
      .then(response => res(response))
      .catch(error => rej(error))
  })
}
