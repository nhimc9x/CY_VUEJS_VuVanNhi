import { get, del, post, put } from './service.js'

export const getUser = () => {
  return get('/user')
}

export const login = (data) => {
  return post('/login', data)
}
