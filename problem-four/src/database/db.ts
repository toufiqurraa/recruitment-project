import mongoose from 'mongoose'
import { MONGO_URI } from '../utils/config'

export const connectDB = async () => {
  if (!MONGO_URI) {
    // throw new Error('MONGO_URI connection failed')
    console.log('MONGO_URI connection failed')

    process.exit(1)
  }

  try {
    await mongoose.connect(MONGO_URI)

    console.log('MongoDB Connected')
  } catch (err) {
    console.log(err)

    process.exit(1)
  }
}
