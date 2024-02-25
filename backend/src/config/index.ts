import dotenv from 'dotenv'
import httpStatusCode from 'http-status'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })
const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,

  BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
}
const STATUS = httpStatusCode

export { config, STATUS }
