import jwt, { JwtPayload } from 'jsonwebtoken'
import { Types } from 'mongoose'
import AppError from '../errors/AppError'
import { STATUS } from '../config'

export type TJwtPayload = {
  _id: Types.ObjectId
  provider: string
  email: string
  
}
type TVerifyToken = (token: string, secret: string) => JwtPayload
const dateNowInMillisecond = Math.floor(Date.now() / 1000)

const generateToken = (jwtPayload: TJwtPayload, secret: string, expire:string) => {
  return jwt.sign(jwtPayload, secret,{expiresIn:expire})
}

const verifyToken: TVerifyToken = (token, secret, ) => {
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload
    return decoded
  } catch (err) {
    throw new AppError(STATUS.UNAUTHORIZED, 'Unauthorized access')
  }
}

export { generateToken, verifyToken, dateNowInMillisecond }
