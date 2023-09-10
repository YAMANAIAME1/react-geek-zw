import { createSlice } from "@reduxjs/toolkit";
import { Login } from '@/api/user'
import { setToken } from "@/utils";
const loginSlice = createSlice({
    name: 'login',
    initialState: {},
    // 同步设置token
    reducers: {
        setUserToken(state, action) {
            // 如果我们需要把服务器返回的数据，直接存储到仓库中，那么我们直接就返回aciton.payload即可
            return action.payload
        }
    }
})

// 异步登录action
export const asyncLogin = params => {
    return async dispatch => {
        const { data, message } = await Login(params)
        // 触发同步的action来保存数据到仓库中
        if (message === "OK") {
            // 保存到仓库
            dispatch(loginSlice.actions.setUserToken(data.token))
            // 保存到本地
            setToken(data.token)
        }
    }
}

export default loginSlice.reducer