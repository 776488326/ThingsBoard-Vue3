import axios from 'axios'
import { ElMessage } from 'element-plus'
let http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_PREFIX,
  timeout: 5000,
})

function handleError(err: any, status: Number) {
  let message = ''

  switch (status) {
    case 400:
      message = '请求参数不正确'
      break
    case 401:
      message = 'TOKEN过期，或账号密码错误，请重新登录获取'
      break
    case 403:
      message = '账号密码权限不足，请联系管理员'
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
    message: err || message,
    type: 'error',
  })
  return false
}

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (resp) => {
    if (resp.data.code !== 200) {
      return handleError(resp.data.message, resp.data.code)
    }
    return resp.data
  },
  (err) => {
    return handleError(err, err.response.status)
  },
)

export default http
