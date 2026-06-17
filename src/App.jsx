import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { StickyNav } from './components/layout/StickyNav'
import { ProgressBar } from './components/layout/ProgressBar'
import { PresentationMode } from './components/presentation/PresentationMode'
import { ToastProvider } from './components/ui/Toast'
import { sections } from './data/sections.jsx'

// App shell: progress bar + sticky nav, the scrolling section stack, and the
// fullscreen presentation overlay. All driven by the single `sections` source.
export default function App() {
  const [present, setPresent] = useState(false)

  return (
    <ToastProvider>
      <ProgressBar />
      <StickyNav sections={sections} onPresent={() => setPresent(true)} />

      <div>
        {sections.map((s) => {
          const Section = s.Component
          return <Section key={s.id} />
        })}
      </div>

      <footer className="py-12 text-center text-sm opacity-50">
        AI for IT — Playbook · {new Date().getFullYear()}
      </footer>

      <AnimatePresence>
        {present && (
          <PresentationMode
            sections={sections}
            open={present}
            onClose={() => setPresent(false)}
          />
        )}
      </AnimatePresence>
    </ToastProvider>
  )
}
