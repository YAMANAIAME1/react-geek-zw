import { instance } from "@/utils";


// 用户登录接口
export const Login = data => instance({ url: '/authorizations', method: 'POST', data })
