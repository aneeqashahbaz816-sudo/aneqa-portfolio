function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Aneeqa Shahbaz / Full Stack Developer</p>
        <p className="footer-note">Building thoughtful digital experiences for people and growing businesses.</p>
      </div>
      <div className="footer-actions">
        <span>Available for selected projects</span>
        <a href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} Aneeqa Shahbaz</p>
    </footer>
  )
}

export default Footer
