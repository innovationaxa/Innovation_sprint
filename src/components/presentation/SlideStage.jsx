import { useEffect, useRef, useState } from 'react'

const DESIGN_W = 1280
const DESIGN_H = 720

// Scales the fixed 1280x720 design canvas to fit the available viewport,
// so every slide fits on screen with no scrolling (keynote-style).
export function SlideStage({ children }) {
  const stageRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const compute = () => {
      const { width, height } = el.getBoundingClientRect()
      const s = Math.min(width / DESIGN_W, height / DESIGN_H) * 0.95
      setScale(s)
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="deck-stage" ref={stageRef}>
      <div className="deck-canvas" style={{ transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  )
}
