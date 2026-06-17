import { Reveal } from '../ui/Reveal'

const metrics = [
  { val: '3×', lbl: 'plus rapide de la connaissance au prototype testable' },
  { val: '7', lbl: 'étapes structurées — chacune produit un livrable tangible' },
  { val: '∞', lbl: 'capitalisation continue — chaque sprint enrichit le suivant' },
]

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <Reveal>
          <span className="hero-tag">Playbook · Innovation Board</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="hero-title">
            AI-First<br />
            <em>Delivery Sprint</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="hero-sub">
            Passer d'une connaissance dispersée à une vision produit testable,
            documentée et exécutable — en réduisant radicalement le temps entre
            l'idée et le prototype livrable.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="hero-quote">
            <span className="hero-quote-icon">💡</span>
            <span className="hero-quote-text">
              « Ce n'est pas aller plus vite pour le plaisir. C'est aller plus
              vite parce que vous avez un meilleur partenaire de réflexion,
              d'organisation et d'exécution. »
            </span>
          </div>
        </Reveal>
        <div className="hero-metrics">
          {metrics.map((m, i) => (
            <Reveal as="div" key={m.val} delay={0.2 + i * 0.08} className="metric-card">
              <div className="metric-val">{m.val}</div>
              <div className="metric-lbl">{m.lbl}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
