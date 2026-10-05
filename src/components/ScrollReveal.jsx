import { useEffect, useRef, useState } from 'react'

function ScrollReveal({ children }) {
  const revealRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = revealRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div className={`scroll-reveal${isVisible ? ' is-visible' : ''}`} ref={revealRef}>{children}</div>
}

export default ScrollReveal
