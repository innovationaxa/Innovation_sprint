import { useEffect, useState } from 'react'

// Observes section elements and reports which one is currently active in the
// viewport. Drives both the sticky nav highlight and the URL-less anchor state.
export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    if (!ids.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] },
    )

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
