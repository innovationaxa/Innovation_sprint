import { Reveal } from '../ui/Reveal'

// Common wrapper for every content section: anchor id, consistent spacing,
// optional kicker + title, and a scroll-triggered reveal.
export function SectionShell({ id, kicker, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-black/5 py-20 dark:border-white/5 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          {kicker && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              {kicker}
            </p>
          )}
          {title && (
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
        </Reveal>
        <div className="prose-editorial">{children}</div>
      </div>
    </section>
  )
}
