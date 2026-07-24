import { useEffect, useRef, useState } from 'react'

// Smart media carousel: images auto-advance after a delay, videos play through
// and advance when they end, and the whole thing wraps around. Ports the old
// scripts/carousel.js behavior to React without Bootstrap's carousel JS, while
// keeping Bootstrap's control-arrow styling. `slides` is
// [{ type: 'image' | 'video', src, alt }].
export default function Carousel({ slides, imageDelay = 5000 }) {
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)

  const count = slides.length
  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  const current = slides[index]

  useEffect(() => {
    if (current.type === 'video') {
      const video = videoRef.current
      if (!video) return
      video.currentTime = 0
      const advance = () => next()
      video.addEventListener('ended', advance)
      video.play().catch(() => {
        // Autoplay may be blocked; fall back to the timed advance.
        setTimeout(advance, imageDelay)
      })
      return () => video.removeEventListener('ended', advance)
    }

    const timer = setTimeout(next, imageDelay)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active" data-type={current.type}>
          {current.type === 'video' ? (
            <video ref={videoRef} className="d-block w-100" playsInline muted>
              <source src={current.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={current.src} className="d-block w-100" alt={current.alt} />
          )}
        </div>
      </div>

      <button className="carousel-control-prev" type="button" onClick={prev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" onClick={next}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
