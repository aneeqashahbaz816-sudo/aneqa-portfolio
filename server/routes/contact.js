import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { isDatabaseReady } from '../config/database.js'
import validateContact from '../middleware/validateContact.js'
import ContactSubmission from '../models/ContactSubmission.js'

const router = Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { message: 'Too many contact attempts. Please try again later.' },
})

router.post('/', contactLimiter, validateContact, async (req, res, next) => {
  if (!isDatabaseReady()) {
    res.status(503).json({ message: 'Contact storage is not configured yet.' })
    return
  }

  try {
    const submission = await ContactSubmission.create(req.contact)

    res.status(201).json({
      message: 'Contact submission saved successfully.',
      submission: {
        id: submission.id,
        createdAt: submission.createdAt,
      },
    })
  } catch (error) {
    next(error)
  }
})

export default router
