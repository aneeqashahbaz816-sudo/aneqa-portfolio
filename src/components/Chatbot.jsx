import { useEffect, useRef, useState } from 'react'
import { getAssistantReply } from '../services/assistantService.js'
import { starterPrompts } from '../data/portfolioAssistant.js'

const initialMessages = [
  { id: 1, role: 'assistant', text: 'Hi, I\'m Aneeqa\'s portfolio assistant. Ask me about skills, projects, services, or contact options.' },
]

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [isOpen, messages])

  const submitQuestion = (question) => {
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: `${Date.now()}-user`, role: 'user', text: trimmedQuestion },
      { id: `${Date.now()}-assistant`, role: 'assistant', text: getAssistantReply(trimmedQuestion) },
    ])
    setInput('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitQuestion(input)
  }

  return (
    <div className="chatbot">
      {isOpen && (
        <section className="chat-panel" id="portfolio-assistant" aria-label="Portfolio assistant">
          <div className="chat-header">
            <div>
              <p className="chat-status"><span /> Portfolio assistant</p>
              <h2>Aneeqa&apos;s assistant</h2>
            </div>
            <button className="chat-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close portfolio assistant">×</button>
          </div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div className={`chat-message chat-message-${message.role}`} key={message.id}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {messages.length === 1 && (
            <div className="chat-starters" aria-label="Suggested questions">
              {starterPrompts.map((prompt) => <button type="button" key={prompt} onClick={() => submitQuestion(prompt)}>{prompt}</button>)}
            </div>
          )}
          <form className="chat-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="assistant-question">Ask the portfolio assistant</label>
            <input id="assistant-question" type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." autoComplete="off" />
            <button type="submit" aria-label="Send question" disabled={!input.trim()}>↗</button>
          </form>
        </section>
      )}
      <button className="chat-launcher" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="portfolio-assistant" aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}>
        <span className="chat-launcher-icon" aria-hidden="true">{isOpen ? '×' : '✦'}</span>
        <span className="chat-launcher-text">Ask assistant</span>
      </button>
    </div>
  )
}

export default Chatbot
