// Footer controls for the presentation overlay: prev / next + slide counter.
export function SlideControls({ index, total, onPrev, onNext, onExit }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-8 py-5 text-sm">
      <button onClick={onExit} className="opacity-60 transition hover:opacity-100">
        Esc · Quitter
      </button>
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="rounded-full px-3 py-1.5 transition hover:bg-white/10 disabled:opacity-30"
        >
          ← Préc.
        </button>
        <span className="tabular-nums opacity-70">
          {index + 1} / {total}
        </span>
        <button
          onClick={onNext}
          disabled={index === total - 1}
          className="rounded-full px-3 py-1.5 transition hover:bg-white/10 disabled:opacity-30"
        >
          Suiv. →
        </button>
      </div>
    </div>
  )
}
