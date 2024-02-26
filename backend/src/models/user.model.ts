import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import { UserModel } from '../modules/auth/helper/auth.interfaces'
import { TUser } from '../modules/user/user.interfaces'
import { STATUS, config } from '../config'
import AppError from '../errors/AppError'
const userSchema = new Schema<TUser, UserModel>(
  {
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
      select: 0,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
)

userSchema.pre('save', async function (next) {
  console.log(this)
  if (this.password) {
    const hashed = bcrypt.hash(this.password, Number(config.BCRYPT_SALT))

    this.password = await hashed
  }

  const isExist = await User.findOne({
    $or: [{ email: this.email }],
  })

  if (isExist?.email === this.email) {
    throw new AppError(STATUS.NOT_ACCEPTABLE, 'Email already exists')
  }

  next()
})

// isUserExist static method
userSchema.statics.isUserExists = async function (
  email: string,
  provider: string,
) {
  return await User.findOne({ email, provider }).select('+password')
}

// isPassword match static method
userSchema.statics.isPasswordMatched = async function (
  inputPassword,
  hashedPassword,
) {
  return await bcrypt.compare(inputPassword, hashedPassword)
}
export const User = model<TUser, UserModel>('User', userSchema)
