import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { SlideStage } from './SlideStage'
import { SlideControls } from './SlideControls'
import { PresentationContext } from './PresentationContext'
import { deck } from '../../data/deck.jsx'

// Fullscreen keynote. Two kinds of slides:
//  - 'cinematic': fixed 1280x720 canvas scaled to fit (title / intro / closing)
//  - 'doc':       a real editorial section, full content & style, scroll tolerated
// Keyboard: ← → navigate slides, Esc quits (↑↓/space left free for scrolling).
export function PresentationMode({ open, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const total = deck.length

  useEffect(() => {
    if (open) setIndex(initialIndex)
  }, [open, initialIndex])

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  useKeyboardNav(
    { ArrowRight: next, ArrowLeft: prev, Escape: onClose },
    { enabled: open },
  )

  if (!open) return null
  const slide = deck[index]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="deck-root">
      <div className="h-1 shrink-0 bg-white/10">
        <div className="h-full bg-[#6ea0ff] transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="relative min-h-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {slide.type === 'cinematic' ? (
              <SlideStage>{slide.el}</SlideStage>
            ) : (
              <div className="deck-doc">
                <PresentationContext.Provider value={true}>
                  <slide.Component />
                </PresentationContext.Provider>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="shrink-0 border-t border-white/10 bg-[#060d18] text-white">
        <SlideControls index={index} total={total} label={slide.label} onPrev={prev} onNext={next} onExit={onClose} />
      </div>
    </motion.div>
  )
}
