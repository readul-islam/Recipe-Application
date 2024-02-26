import express from 'express'
import authController from './controller/auth.controller'
import { validator } from '../../middleware'
import { registerSchemaValidator } from './helper/validator'

const authRouter = express.Router()
const router = express.Router()

authRouter.post(
  '/register',
  validator(registerSchemaValidator),
  authController.register,
)
authRouter.post('/login', authController.login)
authRouter.post('/google', authController.googleProvider)

router.use('/auth', authRouter)

export default router
