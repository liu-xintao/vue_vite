/*
 * @Author: liuxintao
 * @Date: 2023-06-11 15:45:53
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 16:43:01
 * @FilePath: /vue_vite/src/utils/request.ts
 * @Description: axios二次封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    let message = ''
    const status = err.response.status

    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break

      default:
        message = '网络出现问题'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(err)
  },
)

export default request
