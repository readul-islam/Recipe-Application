import { ZodError } from 'zod'
import { TErrorResponse } from './error.interfaces'

const handleZodError = (err: ZodError, defaultResponse: TErrorResponse) => {
  defaultResponse.message = 'Validation Error'
  defaultResponse.errorDetails = err
  defaultResponse.statusCode = 400

  err.issues.forEach(issue => {
    defaultResponse.errorMessage += `${issue.message}. `
  })
}

export default handleZodError
