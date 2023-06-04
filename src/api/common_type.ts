export interface Success {
  code: Number
  data: Object | null
  message?: String
}

export interface Fail {
  code: Number
  data?: Object | null
  message: String
}
