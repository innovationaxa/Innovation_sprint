import { useEffect, useState } from 'react'

// Toggles the `dark` class on <html>, persisted to localStorage.
export function ThemeToggle() {
  const [dark, setDark] = useState(
    () =>
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="grid h-9 w-9 place-items-center rounded-full text-base transition hover:bg-black/5 dark:hover:bg-white/10"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
