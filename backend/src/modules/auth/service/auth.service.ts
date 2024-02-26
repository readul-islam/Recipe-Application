import { Request, Response } from 'express'
import { config } from '../../../config'
import { User } from '../../../models/user.model'
import { TJwtPayload, generateToken } from '../../../utils/tokens'

type TGoogleRequestBody = {
  name?: string
  emailVerified?: boolean
  email: string
  imgUrl?: string
  provider: 'google'
}


const googleProviderService = async (req: Request,) => {
  const data: TGoogleRequestBody = req.body
  const user = await User.isUserExists(data.email, data.provider)

  let jwtPayload: TJwtPayload

  if (!user) {
    const saveUser = await User.create({ ...data, needPasswordChange: true })
    jwtPayload = {
      _id: saveUser._id,
      email: saveUser.email,
      provider: saveUser.provider,
    }
  } else {
    jwtPayload = {
      _id: user._id,
      email: user.email,
      provider: user.provider,
    }
  }

  const userInfo = await User.isUserExists(data.email, data.provider)
  const accessToken = generateToken(
    jwtPayload,
    config.TOKEN_SECRET as string,
    '30d',
  )
  const refreshToken = generateToken(
    jwtPayload,
    config.TOKEN_SECRET as string,
    '60d',
  )

  return {
    token: { accessToken, refreshToken },
    userInfo,
  }
}

const registerService = async (req: Request) => {}
const loginService = async (req: Request) => {}

export { googleProviderService, loginService, registerService }
