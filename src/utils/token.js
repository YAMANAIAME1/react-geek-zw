// 封装token工具模块

// 设置token常量 
const USER_TOKEN_KEY = 'userToken'

// 获取token
export const getToken = () => localStorage.getItem(USER_TOKEN_KEY)

// 缓存token
export const setToken = token => localStorage.setItem(USER_TOKEN_KEY, token)

// 删除token
export const DelToken = () => localStorage.removeItem(USER_TOKEN_KEY)

// 判断是否登录
export const isAuth = () => !!getToken()