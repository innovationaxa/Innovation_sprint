import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { SlideControls } from './SlideControls'

// Fullscreen keynote overlay. Renders one section per slide, reusing the same
// section registry as the scroll view. Keyboard-driven: ← → / space / Esc.
export function PresentationMode({ sections, open, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const total = sections.length

  useEffect(() => {
    if (open) setIndex(initialIndex)
  }, [open, initialIndex])

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, total - 1)),
    [total],
  )
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  useKeyboardNav(
    {
      ArrowRight: next,
      ArrowDown: next,
      ' ': next,
      ArrowLeft: prev,
      ArrowUp: prev,
      Escape: onClose,
    },
    { enabled: open },
  )

  if (!open) return null
  const section = sections[index]
  const Slide = section.Slide ?? section.Component

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-ink text-paper"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-white/10">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="grid h-full place-items-center px-8 pb-20 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-4xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              {String(index + 1).padStart(2, '0')} · {section.kicker ?? ''}
            </p>
            <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
              {section.title}
            </h2>
            {Slide ? <Slide presentation /> : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <SlideControls
        index={index}
        total={total}
        onPrev={prev}
        onNext={next}
        onExit={onClose}
      />
    </motion.div>
  )
}
