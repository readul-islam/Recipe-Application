import express from 'express'
import authController from './controller/auth.controller'
import { validator } from '../../middleware'
import { googleSchemaValidator, loginSchemaValidator, registerSchemaValidator } from './helper/validator'

const authRouter = express.Router()
const router = express.Router()

authRouter.post(
  '/register',
  validator(registerSchemaValidator),
  authController.register,
)
authRouter.post('/login',validator(loginSchemaValidator), authController.login)
authRouter.post('/google',validator(googleSchemaValidator) ,authController.googleProvider)

router.use('/auth', authRouter)

export default router
