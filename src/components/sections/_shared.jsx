import { Reveal } from '../ui/Reveal'

// Section wrapper matching the source markup: <section class="section[-alt|-warm]">
// with an inner max-width container. `variant`: '' | 'alt' | 'warm'.
export function Section({ id, variant = '', children, style }) {
  const cls =
    'section' +
    (variant === 'alt' ? ' section-alt' : variant === 'warm' ? ' section-warm' : '')
  return (
    <section id={id} className={cls} style={style}>
      <div className="section-inner">{children}</div>
    </section>
  )
}

// Editorial section header: kicker label + serif title + lead paragraph.
export function SectionHeader({ label, title, children, centered = false }) {
  return (
    <Reveal>
      <div className={`sh${centered ? ' centered' : ''}`}>
        {label && <span className="label">{label}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {children && <p className="section-sub">{children}</p>}
      </div>
    </Reveal>
  )
}
