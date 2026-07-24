import { useEffect, useState } from 'react'

// Fixed button that appears once the user scrolls past 100px and smooth-scrolls
// back to the top. Mirrors the old scripts/backtotop.js behavior.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="back-to-top-btn"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑ Back to Top
    </button>
  )
}
