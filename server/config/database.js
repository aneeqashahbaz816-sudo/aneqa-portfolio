import mongoose from 'mongoose'
import env from './env.js'

let databaseStatus = env.mongoUri ? 'connecting' : 'disabled'

mongoose.connection.on('connected', () => {
  databaseStatus = 'connected'
  console.log('MongoDB connection established')
})

mongoose.connection.on('disconnected', () => {
  databaseStatus = 'disconnected'
  console.warn('MongoDB connection closed')
})

mongoose.connection.on('error', (error) => {
  databaseStatus = 'error'
  console.error('MongoDB connection error:', error.message)
})

export async function connectDatabase() {
  if (!env.mongoUri) {
    databaseStatus = 'disabled'
    console.warn('MONGODB_URI is not configured; database features are disabled')
    return false
  }

  databaseStatus = 'connecting'

  try {
    await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 5000,
    })
    return true
  } catch (error) {
    databaseStatus = 'error'
    console.error('MongoDB connection failed:', error.message)
    return false
  }
}

export function getDatabaseStatus() {
  return databaseStatus
}

export function isDatabaseReady() {
  return mongoose.connection.readyState === 1
}
