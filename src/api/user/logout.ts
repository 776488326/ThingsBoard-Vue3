import http from '@/utils/http.ts'
import { logout_url } from '../api_url'

export async function requestLogout() {
    return await http.get(logout_url)
}