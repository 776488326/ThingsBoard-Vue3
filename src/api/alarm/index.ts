import { alarms_url } from '../api_url'
import http from '@/utils/http.ts'
import type { AlarmQuery, Alarm } from './type'

export async function getAlarms(params: AlarmQuery) {
  let url: string = Object.entries(params).reduce((prev, cur) => {
    return prev + `${cur[0]}=${cur[1]}&`
  }, `${alarms_url}?`)
  let result: Alarm[] = await http.get(url)
  return result
}
