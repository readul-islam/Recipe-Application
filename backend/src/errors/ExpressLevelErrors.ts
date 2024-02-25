import { STATUS } from '../config'
import AppError from './AppError'
import { TErrorResponse } from './error.interfaces'
import { Server } from 'http'
// handle all express level error or server level error
class ExpressLevelError {
  // custom error handling globally
  handleAppError(err: AppError, defaultResponse: TErrorResponse) {
    if (err.statusCode === STATUS.UNAUTHORIZED) {
      defaultResponse.message = 'Unauthorized Access'
      defaultResponse.errorMessage =
        'You do not have the necessary permissions to access this resource.'
      defaultResponse.statusCode = err.statusCode
    } else {
      defaultResponse.message = err.message
      defaultResponse.errorMessage = err.message
      defaultResponse.statusCode = err.statusCode
    }
  }

  // express default error handling globally
  handleDefaultError(err: Error, defaultResponse: TErrorResponse) {
    defaultResponse.message = err.message
    defaultResponse.errorMessage = err.message
  }

  // unhandledRejection and  uncaughtException errors handler
  unHandledError(server: Server) {
    process.on('unhandledRejection', err => {
      console.log(`👹 unhandledRejection is detected , shutting down ...`)
      if (server) {
        server.close(() => {
          process.exit(1)
        })
      }
      process.exit(1)
    })

    process.on('uncaughtException', err => {
      console.log(`👹 uncaughtException is detected , shutting down ...`)
      process.exit(1)
    })
  }
}

export default new ExpressLevelError()
