import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { ThemeToggle } from './ThemeToggle'

// Sticky top navigation: section list with active highlight (scroll-spy),
// smooth anchor scroll, theme toggle and a "Présentation" entry point.
export function StickyNav({ sections, onPresent }) {
  const ids = sections.map((s) => s.id)
  const activeId = useScrollSpy(ids)
  const [open, setOpen] = useState(false)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/80 backdrop-blur-md dark:border-white/10 dark:bg-ink/80">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        <button
          onClick={() => go(sections[0]?.id)}
          className="shrink-0 text-sm font-bold tracking-tight"
        >
          AI for IT
        </button>

        {/* desktop section links */}
        <ul className="hidden flex-1 items-center gap-1 overflow-x-auto lg:flex">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  activeId === s.id
                    ? 'bg-accent text-white'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {String(i + 1).padStart(2, '0')} · {s.navTitle ?? s.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onPresent}
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
          >
            ▶ Présentation
          </button>
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-black/5 lg:hidden dark:hover:bg-white/10"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <ul className="max-h-[60vh] overflow-y-auto border-t border-black/5 px-6 py-2 lg:hidden dark:border-white/10">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                  activeId === s.id ? 'text-accent' : 'opacity-70'
                }`}
              >
                {String(i + 1).padStart(2, '0')} · {s.navTitle ?? s.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
