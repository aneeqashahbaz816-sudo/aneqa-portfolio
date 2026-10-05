import 'dotenv/config'

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173',
  mongoUri: process.env.MONGODB_URI || '',
}

export default env
