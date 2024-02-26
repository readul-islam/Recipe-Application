import { Request, Response } from 'express'
import { STATUS, config } from '../../../config'
import { User } from '../../../models/user.model'
import { TJwtPayload, generateToken } from '../../../utils/tokens'
import AppError from '../../../errors/AppError'

type TGoogleRequestBody = {
  name?: string
  emailVerified?: boolean
  email: string
  imgUrl?: string
  provider: 'google'
}

const googleProviderService = async (req: Request) => {
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

  const userInfo = await User.findOne({
    email: data.email,
    provider: data.provider,
  }).select('-createdAt -updatedAt')
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

const registerService = async (req: Request) => {
  const user = await User.create({
    ...req.body,
  })
  return { success: true }
}
const loginService = async (req: Request) => {
  const { email, password } = req.body
  const isExist = await User.findOne({ email }).select('+password')
  if (!isExist)
    throw new AppError(STATUS.NOT_FOUND, 'user not exist in our system')

  if (!(await User.isPasswordMatched(password, isExist.password))) {
    throw new AppError(
      STATUS.UNAUTHORIZED,
      'password mismatch, Please try to remember',
    )
  }

  const payload: TJwtPayload = {
    _id: isExist._id,
    email: isExist.email,
    provider: isExist.provider,
  }
  const accessToken = generateToken(
    payload,
    config.TOKEN_SECRET as string,
    '30d',
  )
  const refreshToken = generateToken(
    payload,
    config.TOKEN_SECRET as string,
    '60d',
  )

  const { password: pass, ...others } = isExist.toObject()

  return {
    userInfo: others,
    token: {
      accessToken,
      refreshToken,
    },
  }
}

export { googleProviderService, loginService, registerService }
