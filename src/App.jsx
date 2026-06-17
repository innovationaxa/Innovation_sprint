import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { StickyNav } from './components/layout/StickyNav'
import { ProgressBar } from './components/layout/ProgressBar'
import { PresentationMode } from './components/presentation/PresentationMode'
import { ToastProvider } from './components/ui/Toast'
import { Hero } from './components/sections/Hero'
import { Conclusion } from './components/sections/Conclusion'
import { sections } from './data/sections.jsx'

// App shell: progress bar + sticky nav, the hero, the scrolling section stack,
// the conclusion, and the fullscreen presentation overlay. The 15 navigable
// sections are driven by the single `sections` source of truth.
export default function App() {
  const [present, setPresent] = useState(false)

  return (
    <ToastProvider>
      <ProgressBar />
      <StickyNav sections={sections} onPresent={() => setPresent(true)} />

      <Hero />

      {sections.map((s) => {
        const Section = s.Component
        return <Section key={s.id} />
      })}

      <Conclusion />

      <AnimatePresence>
        {present && (
          <PresentationMode open={present} onClose={() => setPresent(false)} />
        )}
      </AnimatePresence>
    </ToastProvider>
  )
}
