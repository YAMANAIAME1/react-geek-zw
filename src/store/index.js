/**
 * 该文件用于创建仓库和集成各个子reducer
 */
import { configureStore } from '@reduxjs/toolkit'
import { getToken } from "@/utils";

// 导入各个子reducer
import login from "./reducers/login";

const store = configureStore({
    reducer: {
        login
    },
    preloadedState: {
        login: getToken()
    }
})

export default store