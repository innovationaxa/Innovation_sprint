import { useEffect } from 'react'

// Binds a map of `key -> handler` to keydown while `enabled`. Used by the
// presentation mode (arrows / space / escape) and global shortcuts (F, ?).
export function useKeyboardNav(keymap, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return
    const handler = (e) => {
      // Ignore typing into form fields.
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable)
        return
      const action = keymap[e.key]
      if (action) {
        e.preventDefault()
        action(e)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [keymap, enabled])
}
