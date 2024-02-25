import { Server } from 'http'
import app from './app'
import {config } from "./config/index"
import ExpressLevelErrors from './errors/ExpressLevelErrors'
import { globalErrorHandler, notFound } from './middleware'
let server: Server
// notFound handler
app.use(notFound)
app.use(globalErrorHandler)

// Promise.reject()
server = app.listen(config.PORT, () => {
  console.log('Server listening on:', config.PORT)
})

// unhandledRejection and  uncaughtException handler
ExpressLevelErrors.unHandledError(server)
