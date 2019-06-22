import axios from 'axios'

// 设置默认请求地址
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

export const checkUser = params => {
  return axios.post('login', params).then(res => res.data)
}
