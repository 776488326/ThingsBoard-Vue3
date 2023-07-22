import http from '@/utils/http.ts'
import { logout_url } from '../api_url'
import type { Success, Fail } from '@/api/common_type.ts'
export async function requestLogout(): Promise<Success | Fail> {
  return await http.get(logout_url)
}
