import { Document, Model } from 'mongoose'
import { TUser } from '../../user/user.interfaces'

type UserModel = {
  //instance methods for checking if the user exist
  isUserExists(email: string, provider: string): Promise<TUser>
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
} & Model<TUser>

export { UserModel }
