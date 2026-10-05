import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactEndpoint = 'https://formspree.io/f/mljdvjlz'

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'

  return errors
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setStatus('idle')
    setServerMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    setServerMessage('')
    const formData = new FormData(event.currentTarget)
    formData.set('_subject', values.subject)

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setServerMessage(result.message || '')
        setStatus('server-error')
        return
      }

      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('network-error')
    }
  }

  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="section-eyebrow">05 / Start a conversation</p>
          <h2 id="contact-title">Have an idea? <span>Let&apos;s talk.</span></h2>
        </div>
        <p className="section-summary">Share a little about what you&apos;re building and what you need next.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-aside">
          <p className="contact-lead">Good work starts with a clear question, a thoughtful brief, or a rough idea worth exploring.</p>
          <div className="contact-notes">
            <div><span>01</span><p>Tell me what you&apos;re working on.</p></div>
            <div><span>02</span><p>Share the outcome you&apos;re aiming for.</p></div>
            <div><span>03</span><p>We&apos;ll shape the next step from there.</p></div>
          </div>
        </div>
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} autoComplete="name" />
              {errors.name && <p className="field-error" id="contact-name-error" role="alert">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} autoComplete="email" />
              {errors.email && <p className="field-error" id="contact-email-error" role="alert">{errors.email}</p>}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" value={values.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} />
            {errors.subject && <p className="field-error" id="contact-subject-error" role="alert">{errors.subject}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
            {errors.message && <p className="field-error" id="contact-message-error" role="alert">{errors.message}</p>}
          </div>
          {status === 'error' && <p className="form-status form-status-error" role="alert">Please review the highlighted fields and try again.</p>}
          {status === 'server-error' && <p className="form-status form-status-error" role="alert">{serverMessage || 'The message could not be sent right now. Please try again later.'}</p>}
          {status === 'network-error' && <p className="form-status form-status-error" role="alert">The form service could not be reached. Please try again in a moment.</p>}
          {status === 'success' && <p className="form-status form-status-success" role="status">Your message was sent successfully. Thank you for reaching out.</p>}
          <button className="button button-primary form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending...' : 'Send message'} <span aria-hidden="true">↗</span></button>
        </form>
      </div>
      <div className="contact-closing">
        <p className="section-eyebrow">Ready to build something valuable?</p>
        <h3>Interested in a professional website for your business?</h3>
        <p>Let&apos;s create a clear, engaging digital experience that builds trust, connects with your audience, and helps your business grow. Share your idea and let&apos;s plan the right next step.</p>
      </div>
    </section>
  )
}

export default Contact
