import { NextFunction, Request, Response } from 'express'
import { STATUS, config } from '../config'
import AppError from '../errors/AppError'


import { dateNowInMillisecond, verifyToken } from '../utils/tokens'
import { JwtPayload } from 'jsonwebtoken'

import { Date, mongo } from 'mongoose'

const authenticate = (role:any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization
      if (!token) {
        throw new AppError(STATUS.UNAUTHORIZED, 'Unauthorized Access')
      }

      const decoded = verifyToken(token, config.TOKEN_SECRET as string)
      const { _id, iat, exp } = decoded
      // const userPassHistory: any = await PasswordHistory.getLatestPassword(
      //   _id as string,
      // )

      // const passwordChangedLastTime = new Date(
      //   userPassHistory?.createdAt,
      // ).getTime()

      // if ((iat as number) > passwordChangedLastTime) {
      //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
      // }

      // if ((exp as number) < dateNowInMillisecond) {
      //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
      // }
      // const user = await User.isUserExists(decoded._id)

      // if (!user) {
      //   throw new AppError(status.NOT_FOUND, 'This user is not found !')
      // }
      console.log(decoded._id)

      // if (role && !role.includes(decoded.role)) {
      //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
      // }

      req.user = decoded
      next()
    } catch (error: any) {
      next(error)
    }
  }
}

export default authenticate
