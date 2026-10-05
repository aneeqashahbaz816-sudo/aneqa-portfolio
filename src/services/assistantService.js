import { assistantKnowledge } from '../data/portfolioAssistant.js'

const normalized = (value) => value.toLowerCase().trim()

export function getAssistantReply(question) {
  const query = normalized(question)

  if (!query) {
    return 'Ask me about Aneeqa\'s skills, projects, services, or how to get in touch.'
  }

  if (/(skill|stack|technology|technologies|tools|know)/.test(query)) {
    return `Aneeqa works with ${assistantKnowledge.skills.join(', ')}.`
  }

  if (/(project|work|built|portfolio)/.test(query)) {
    return assistantKnowledge.projects
      .map((project) => `${project.title}: ${project.description} Built with ${project.technologies.join(' and ')}.`)
      .join(' ')
  }

  if (/(service|offer|help|build for)/.test(query)) {
    return `Aneeqa offers ${assistantKnowledge.services.join(', ')}.`
  }

  if (/(contact|email|hire|reach|talk|social)/.test(query)) {
    return assistantKnowledge.contactNote
  }

  if (/(who|about|name|introduce)/.test(query)) {
    return `${assistantKnowledge.owner} is a ${assistantKnowledge.title}. ${assistantKnowledge.summary}`
  }

  return 'I can help with Aneeqa\'s skills, projects, services, or contact options. Try asking one of those.'
}
