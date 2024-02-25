import mongoose from 'mongoose'
import { TErrorResponse } from './error.interfaces'

// handle all mongoose errors
class MongooseErrors {
  // handle cast error
  handleCastError(
    err: mongoose.Error.CastError,
    defaultResponse: TErrorResponse,
  ) {
    defaultResponse.message = 'Invalid ID'
    defaultResponse.errorMessage = `${err.value} is not a valid ID`
    defaultResponse.errorDetails = err
    defaultResponse.statusCode = 400
  }

  // handle duplicate key errors
  handleDuplicateKeyError(err: any, defaultResponse: TErrorResponse) {
    type TErrDetails = {
      [key : string]:string |unknown
    }
    let errDetails:TErrDetails = {};
    let message = ''
    for (const [key, value] of Object.entries(err?.keyValue)) {
      console.log(key)
      message += `${key} is exists with same value ${value}. `
      errDetails[`${key}`] = value
    }
    defaultResponse.errorDetails = errDetails
    defaultResponse.errorMessage = message
    defaultResponse.message = message
    defaultResponse.statusCode = 400

   
  }
}

export default new MongooseErrors()
