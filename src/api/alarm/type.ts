// pageSize: 10
// page: 0
// sortProperty: createdTime
// sortOrder: DESC
// statusList: ACTIVE,CLEARED
// severityList: MAJOR
// assigneeId: 5c7757e0-efce-11ed-906b-d778012ede74

export interface AlarmQuery {
  pageSize: number
  page: number
  sortProperty?: string
  sortOrder?: 'DESC' | 'ASC'
  statusList?: string
  severityList?: string
  assigneeId?: string
  typeList?: string
}

export interface Alarm {
  createdTime: string
  name: string
  type: string
  severity: 'danger' | 'important' | 'secondary' | 'alarm' | 'uncertain'
  assignee: string
  status: 'actived' | 'cleared' | 'confirmed' | 'unconfirm'
}
