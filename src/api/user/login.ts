import http from '@/utils/http.ts'
import { login_url, sign_up_url } from '../api_url'
import type { UserInfo, Counter } from './type'

export async function requestLogin(params: UserInfo) {
  return await http.post(login_url, params)
}

export async function requestSignUp(params: Counter) {
  return await http.post(sign_up_url, params)
}
