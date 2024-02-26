import express from 'express'
import authController from './controller/auth.controller'

const authRouter = express.Router()
const router = express.Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)

router.use('/auth', authRouter)

export default router
