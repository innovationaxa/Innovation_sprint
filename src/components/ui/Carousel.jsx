import { Children, useCallback, useEffect, useRef, useState } from 'react'

// Horizontal scroll-snap carousel showing `perView` items at a time, with
// prev/next controls and dot indicators. Used in presentation mode to keep
// card collections on a single slide instead of stacking them vertically.
export function Carousel({ children, perView = 3, gap = 20 }) {
  const trackRef = useRef(null)
  const items = Children.toArray(children)
  const [page, setPage] = useState(0)
  const pageCount = Math.max(1, Math.ceil(items.length / perView))

  const scrollToPage = useCallback((p) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(p, pageCount - 1))
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
    setPage(clamped)
  }, [pageCount])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const p = Math.round(track.scrollLeft / track.clientWidth)
      setPage(p)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const basis = `calc((100% - ${(perView - 1) * gap}px) / ${perView})`

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel-nav prev"
        onClick={() => scrollToPage(page - 1)}
        disabled={page === 0}
        aria-label="Précédent"
      >
        ‹
      </button>

      <div className="carousel-track" ref={trackRef} style={{ gap }}>
        {items.map((child, i) => (
          <div className="carousel-item" key={i} style={{ flex: `0 0 ${basis}` }}>
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-nav next"
        onClick={() => scrollToPage(page + 1)}
        disabled={page >= pageCount - 1}
        aria-label="Suivant"
      >
        ›
      </button>

      {pageCount > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              type="button"
              key={i}
              className={`carousel-dot${i === page ? ' active' : ''}`}
              onClick={() => scrollToPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
