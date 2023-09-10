// 封装axios工具模块
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    timeout: 5000
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err)
})

export { instance }