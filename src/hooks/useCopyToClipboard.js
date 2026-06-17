import { useCallback, useState } from 'react'

// Copies text to the clipboard and exposes a transient `copied` flag.
export function useCopyToClipboard({ timeout = 1800 } = {}) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), timeout)
        return true
      } catch {
        setCopied(false)
        return false
      }
    },
    [timeout],
  )

  return { copy, copied }
}
