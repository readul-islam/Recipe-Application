import { ErrorRequestHandler, RequestHandler } from 'express'
import mongoose from 'mongoose'
import { ZodError } from 'zod'
import AppError from '../errors/AppError'
import ExpressLevelErrors from '../errors/ExpressLevelErrors'
import MongooseErrors from '../errors/MongooseErrors'
import handleZodError from '../errors/handleZodError'
import { TErrorResponse } from '../errors/error.interfaces'
// not found handler
const notFound: RequestHandler = (req, res, next) => {
  const err = new AppError(404, 'Route not found')
  return next(err)
}

// global error handler
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const errResponse:TErrorResponse = {
    message: 'Unknown Error',
    statusCode: 500,
    errorMessage: '',
    errorDetails: null,
    stack: err?.stack ? err.stack : null,
  }

  if (err instanceof ZodError) {
    handleZodError(err, errResponse)
  } else if (err.code === 11000) {
    MongooseErrors.handleDuplicateKeyError(err, errResponse)
  } else if (err instanceof mongoose.Error.CastError) {
    MongooseErrors.handleCastError(err, errResponse)
  } else if (err instanceof AppError) {
    ExpressLevelErrors.handleAppError(err, errResponse)
  } else if (err instanceof Error) {
    ExpressLevelErrors.handleDefaultError(err, errResponse)
  }

  res.status(errResponse.statusCode).json(errResponse)
}

export { globalErrorHandler, notFound }
