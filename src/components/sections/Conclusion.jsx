import { Reveal } from '../ui/Reveal'

const stats = [
  { lbl: 'Démarrer en', val: '2 semaines', sub: 'Premier sprint opérationnel', color: '#fff' },
  { lbl: 'Prototype livrable', val: 'J+3 à J+5', sub: 'Testable par de vrais utilisateurs', color: '#93c5fd' },
  { lbl: 'Capitalisation', val: 'Continue', sub: 'Chaque sprint enrichit le suivant', color: '#a5b4fc' },
  { lbl: 'Décision humaine', val: '100%', sub: "L'IA amplifie, l'humain arbitre", color: '#86efac' },
]

export function Conclusion() {
  return (
    <>
      <section id="conclusion" className="conclusion">
        <div className="concl-inner">
          <Reveal>
            <span className="concl-label">Message Board Innovation</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="concl-title">
              La connaissance dispersée
              <br />
              est votre actif le plus sous-exploité.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="concl-text">
              Chaque organisation accumule des études, des entretiens, des
              données marché, des intuitions d'experts. Ces assets coûtent cher à
              produire et dorment dans des dossiers partagés. L'AI-First Delivery
              Sprint transforme ce capital dormant en carburant pour une
              exécution produit rapide, rigoureuse et continue.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <blockquote className="concl-quote">
              "Ce n'est pas l'IA qui va changer votre delivery. C'est la décision
              de travailler autrement avec elle — en lui donnant le bon contexte,
              les bons rôles et les bons garde-fous — qui fera la différence entre
              une équipe qui parle d'IA et une équipe qui exécute avec l'IA."
            </blockquote>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="concl-text">
              L'AI-First Delivery Sprint n'est pas une méthode de plus. C'est un
              operating model complet, industrialisable, adapté aux exigences de
              gouvernance d'une grande organisation — et aux ambitions d'une
              startup native IA. Il intègre le pilotage par agents, la
              rétro-documentation visuelle, les personas synthétiques, le Real
              Data Prototype et la documentation IA-native en Markdown. Il est
              prêt à être déployé. La question n'est pas de savoir si vous devez
              adopter cette démarche. La question est : combien de sprints
              allez-vous manquer avant de le faire ?
            </p>
          </Reveal>
          <div className="concl-stats">
            {stats.map((s, i) => (
              <Reveal as="div" key={s.lbl} delay={0.16 + i * 0.06} className="cstat">
                <div className="cstat-lbl">{s.lbl}</div>
                <div className="cstat-val" style={{ color: s.color }}>
                  {s.val}
                </div>
                <div className="cstat-sub">{s.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="f-brand">AI-First Delivery Sprint · Playbook</div>
          <div className="f-text">Operating model Innovation Board · 2026</div>
        </div>
      </footer>
    </>
  )
}
