import mongoose from 'mongoose'
import {config }from "."

const dbConnection = async () => {
  try {
    mongoose.connect(config.DB_URL as string)
    console.log('Database connected successfully')
  } catch (err) {
    console.log(err)
  }
}

export default dbConnection
