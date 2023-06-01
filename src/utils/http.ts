import axios from 'axios'
import { ElMessage } from 'element-plus'
let http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_PREFIX,
  timeout: 5000,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (resp) => {
    return resp.data
  },
  (err) => {
    let message = ''
    let status = err.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期，请重新登录获取'
        break
      case 403:
        message = '权限不足，请联系管理员'
        break
      case 404:
        message = '请求地址不存在，请确认后重试'
        break
      case 500:
        message = '服务器异常，请稍后重试'
        break
      default:
        message = '网络异常'
        break
    }
    ElMessage({
      message,
      type: 'error',
    })
    return Promise.reject(err)
  },
)

export default http
