export type TErrorSources = {
  path: string | number
  message: string
}[]

type TErrorDetailsForKeyAndValue = {
  [key: string]: any
}

export type TErrorResponse = {
  statusCode: number
  message: string
  errorMessage: string
  errorDetails: TErrorDetailsForKeyAndValue | any
  stack?: string
}
