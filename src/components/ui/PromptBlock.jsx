import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { useToast } from './Toast'

// Copyable prompt / code block with a confirmation toast.
export function PromptBlock({ label, children }) {
  const text = typeof children === 'string' ? children : String(children ?? '')
  const { copy, copied } = useCopyToClipboard()
  const { show } = useToast()

  const onCopy = async () => {
    const ok = await copy(text)
    show(ok ? 'Prompt copié ✓' : 'Copie impossible')
  }

  return (
    <div className="group relative my-4 overflow-hidden rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between border-b border-black/5 px-4 py-2 dark:border-white/5">
        <span className="text-xs font-medium uppercase tracking-wider opacity-60">
          {label ?? 'Prompt'}
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-md px-2 py-1 text-xs font-medium text-accent transition hover:bg-accent/10"
        >
          {copied ? 'Copié ✓' : 'Copier'}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed">
        <code className="font-mono whitespace-pre-wrap">{text}</code>
      </pre>
    </div>
  )
}
