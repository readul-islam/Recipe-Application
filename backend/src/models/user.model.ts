import { Schema, model } from 'mongoose'
import { TUser } from '../modules/user/user.interfaces'

const userSchema = new Schema<TUser>({
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

export const User = model<TUser>("User", userSchema)