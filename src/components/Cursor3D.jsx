import { useEffect, useRef } from 'react'

const tiltSelector = '.project-card, .skill-card, .service-card, .hero-visual'

function Cursor3D() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return undefined

    const cursor = cursorRef.current
    const tiltElements = [...document.querySelectorAll(tiltSelector)]
    let frameId = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2

    const render = () => {
      cursor?.style.setProperty('--cursor-x', `${pointerX}px`)
      cursor?.style.setProperty('--cursor-y', `${pointerY}px`)
      frameId = 0
    }

    const handlePointerMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (!frameId) frameId = requestAnimationFrame(render)
    }

    const resetTilt = (element) => {
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
      element.style.setProperty('--tilt-z', '0px')
    }

    const handleTilt = (event) => {
      const element = event.currentTarget
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      element.style.setProperty('--tilt-x', `${y * -5}deg`)
      element.style.setProperty('--tilt-y', `${x * 6}deg`)
      element.style.setProperty('--tilt-z', '14px')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    tiltElements.forEach((element) => {
      element.addEventListener('pointermove', handleTilt)
      element.addEventListener('pointerleave', () => resetTilt(element))
    })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      tiltElements.forEach((element) => resetTilt(element))
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <span className="cursor-orb" ref={cursorRef} aria-hidden="true" />
}

export default Cursor3D
