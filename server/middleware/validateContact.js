const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedFields = ['name', 'email', 'subject', 'message']

function validateContact(req, res, next) {
  const body = req.body || {}
  const errors = {}

  for (const field of allowedFields) {
    if (typeof body[field] !== 'string' || !body[field].trim()) {
      errors[field] = `${field} is required.`
    }
  }

  if (body.email && (typeof body.email !== 'string' || !emailPattern.test(body.email.trim()))) {
    errors.email = 'A valid email address is required.'
  }

  if (typeof body.name === 'string' && body.name.trim().length > 100) errors.name = 'Name must be 100 characters or fewer.'
  if (typeof body.subject === 'string' && body.subject.trim().length > 160) errors.subject = 'Subject must be 160 characters or fewer.'
  if (typeof body.message === 'string' && body.message.trim().length > 5000) errors.message = 'Message must be 5000 characters or fewer.'

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ message: 'Please correct the submitted fields.', errors })
    return
  }

  req.contact = Object.fromEntries(allowedFields.map((field) => [field, body[field].trim()]))
  next()
}

export default validateContact
