import './App.css'
import Chatbot from './components/Chatbot.jsx'
import Cursor3D from './components/Cursor3D.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  return (
    <div className="app-shell">
      <Cursor3D />
      <Navbar />
      <a className="skip-link" href="#home">Skip to content</a>
      <main>
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
