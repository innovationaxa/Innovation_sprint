import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { useToast } from './Toast'

// Copyable prompt block — uses the editorial `.pb` styling from the source,
// with a confirmation toast on copy.
export function PromptBlock({ label = 'Prompt', children }) {
  const text = typeof children === 'string' ? children : String(children ?? '')
  const { copy, copied } = useCopyToClipboard()
  const { show } = useToast()

  const onCopy = async () => {
    const ok = await copy(text)
    show(ok ? 'Prompt copié ✓' : 'Copie impossible')
  }

  return (
    <div className="pb">
      <div className="pb-head">
        <span className="pb-lbl">{label}</span>
        <button type="button" className="pb-copy" onClick={onCopy}>
          {copied ? 'Copié ✓' : 'Copier'}
        </button>
      </div>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  )
}
