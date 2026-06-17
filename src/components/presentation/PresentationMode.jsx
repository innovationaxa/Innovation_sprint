import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { SlideControls } from './SlideControls'

// Fullscreen keynote overlay. Renders one section per slide, reusing the SAME
// section components as the scroll view (single source of truth). Each slide is
// independently scrollable. Keyboard-driven: ← → / space / Esc.
export function PresentationMode({ sections, open, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const total = sections.length

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
  const section = sections[index]
  const Slide = section.Component

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex flex-col bg-paper"
    >
      <div className="h-1 shrink-0 bg-black/10">
        <div
          className="h-full bg-[var(--primary)] transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative shrink-0 border-t border-black/10 bg-paper text-ink">
        <SlideControls index={index} total={total} onPrev={prev} onNext={next} onExit={onClose} />
      </div>
    </motion.div>
  )
}
