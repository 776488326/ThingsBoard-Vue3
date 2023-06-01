import http from '@/utils/http.ts'
const login_url = '/auth/login'

export async function requestLogin(params: any) {
  return await http.post(login_url, params)
}
