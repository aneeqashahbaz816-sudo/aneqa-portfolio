import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { connectDatabase, getDatabaseStatus } from './config/database.js'
import env from './config/env.js'
import contactRouter from './routes/contact.js'

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: env.clientOrigin }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_req, res) => {
  const database = getDatabaseStatus()
  res.status(database === 'error' ? 503 : 200).json({
    status: database === 'connected' || database === 'disabled' ? 'ok' : 'degraded',
    environment: env.nodeEnv,
    database,
  })
})

app.use('/api/contact', contactRouter)

app.use((error, _req, res, next) => {
  void next

  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    res.status(400).json({ message: 'Request body must contain valid JSON.' })
    return
  }

  console.error(error)
  res.status(500).json({ message: 'Something went wrong on the server.' })
})

async function startServer() {
  await connectDatabase()

  app.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`)
  })
}

startServer()
