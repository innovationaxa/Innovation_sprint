import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { SlideStage } from './SlideStage'
import { SlideControls } from './SlideControls'
import { deck } from '../../data/deck.jsx'

// Fullscreen cinematic keynote. Renders the presentation `deck` one slide at a
// time on a fit-to-viewport stage (no scroll). Keyboard-driven: ← → / space / Esc.
export function PresentationMode({ open, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const total = deck.length

  useEffect(() => {
    if (open) setIndex(initialIndex)
  }, [open, initialIndex])

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  useKeyboardNav(
    { ArrowRight: next, ArrowDown: next, ' ': next, ArrowLeft: prev, ArrowUp: prev, Escape: onClose },
    { enabled: open },
  )

  if (!open) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="deck-root"
    >
      <div className="h-1 shrink-0 bg-white/10">
        <div
          className="h-full bg-[#6ea0ff] transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <SlideStage>
        <AnimatePresence mode="wait">
          <motion.div
            key={deck[index].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {deck[index].el}
          </motion.div>
        </AnimatePresence>
      </SlideStage>

      <div className="shrink-0 border-t border-white/10 text-white">
        <SlideControls
          index={index}
          total={total}
          label={deck[index].label}
          onPrev={prev}
          onNext={next}
          onExit={onClose}
        />
      </div>
    </motion.div>
  )
}
