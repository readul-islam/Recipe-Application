import { Document, Schema, model } from 'mongoose'
import { UserModel } from '../modules/auth/helper/auth.interfaces'
import { TUser } from '../modules/user/user.interfaces'

const userSchema = new Schema<TUser, UserModel>({
  name: {
    type: String,
  },
  provider: {
    type: String,
    enum: {
      values: ['google', 'local'],
      message: '{VALUE} is not supported',
    },
    required: [true, 'provider is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  needPasswordChange: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
})

userSchema.statics.isUserExists = async function (
  email: string,
  provider: string,
) {
  return await User.findOne({ email, provider }).select('+password')
}

export const User = model<TUser, UserModel>('User', userSchema)
