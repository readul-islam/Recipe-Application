import { Schema } from 'mongoose'
import { TUser } from '../modules/user/user.interfaces'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
  },
  email: {
    type: String,
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
