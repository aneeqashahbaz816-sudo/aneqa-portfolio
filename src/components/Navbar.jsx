import { useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={closeMenu}>
          <span className="brand-initial">A</span>
          <span className="brand-name">Aneeqa<span>.</span></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-content${menuOpen ? ' is-open' : ''}`} id="primary-menu">
          <ul className="nav-links">
            {navigationItems.map((item, index) => (
              <li key={item.href}>
                <a
                  className={index === 0 ? 'active' : ''}
                  href={item.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
