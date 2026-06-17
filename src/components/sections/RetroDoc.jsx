import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const capabilities = [
  { icon: '🔍', title: 'Identifier les composants UI', text: 'Reconnaître les patterns, les états, les interactions' },
  { icon: '🗺️', title: 'Reconstituer les flows de navigation', text: "Reconstruire les chaînes d'écrans et les parcours" },
  { icon: '📄', title: 'Documenter les comportements attendus', text: 'Produire des specs exploitables par les équipes tech' },
  { icon: '💡', title: 'Expliciter les intentions UX', text: 'Comprendre pourquoi les écrans ont été conçus ainsi' },
]

const deliverables = [
  {
    color: 'var(--primary)',
    label: 'User Research',
    items: [
      "Guides d'entretien enrichis",
      'Scripts de tests utilisateurs',
      "Synthèses d'insights structurées",
      'Analyses comportementales',
    ],
  },
  {
    color: 'var(--secondary)',
    label: 'Produit',
    items: [
      'User journeys documentés',
      "Cartes d'expérience",
      'Vision produit complète',
      'Tickets générés automatiquement',
    ],
  },
  {
    color: 'var(--accent)',
    label: 'Design',
    items: [
      'Documentation UX complète',
      'Spécifications UI annotées',
      "Annotations d'écrans",
      'Motion concepts',
    ],
  },
  {
    color: 'var(--success)',
    label: 'Exécution',
    items: [
      'PRD & blueprint technique',
      'Tickets Linear / Jira',
      'Documentation continue',
      'Handoff IA → équipes',
    ],
  },
]

export function RetroDoc() {
  return (
    <Section id="retrodoc" variant="alt">
      <SectionHeader
        label="Capacité complémentaire"
        title="Rétro-documentation & compréhension produit"
      >
        L'IA peut générer automatiquement une documentation complète à partir d'un
        prototype existant, d'écrans ou de parcours — même sans accès au code source.
        Une capacité particulièrement puissante pour les produits legacy.
      </SectionHeader>

      <Reveal>
        <div className="two-col">
          <div>
            <h3 style={{ marginBottom: 'var(--sp-md)' }}>
              Génération de specs depuis les écrans
            </h3>
            <p style={{ fontSize: '.92rem', marginBottom: 'var(--sp-md)' }}>
              À partir de screenshots, de prototypes ou de parcours utilisateurs
              capturés, l'IA peut :
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
              {capabilities.map((c) => (
                <div key={c.title} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'var(--primary-light)',
                      borderRadius: 'var(--r-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '.9rem',
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--text)' }}>
                      {c.title}
                    </div>
                    <div style={{ fontSize: '.83rem', color: 'var(--text-secondary)' }}>
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--sp-md)' }}>Cas d'usage : produits legacy</h3>
            <div className="callout c-insight" style={{ margin: '0 0 var(--sp-md) 0' }}>
              <span className="c-icon">✨</span>
              <div>
                <div className="c-title">Ce qui était chronophage devient instantané</div>
                <div className="c-text">
                  Documenter un produit existant dont la documentation a disparu ou est
                  obsolète prenait des semaines. L'analyse visuelle par IA réduit ce
                  délai à quelques heures — avec une qualité de specs directement
                  exploitable par les agents de développement.
                </div>
              </div>
            </div>
            <div className="callout c-rule">
              <span className="c-icon">🚀</span>
              <div>
                <div className="c-title">Accélérateur de découverte produit</div>
                <div className="c-text">
                  Sur un nouveau projet, la rétro-documentation d'un prototype existant
                  ou d'un concurrent permet de démarrer la base de connaissance en
                  quelques heures au lieu de quelques jours. Une capacité particulièrement
                  puissante pour les reprises de projet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-xl)', marginBottom: 'var(--sp-sm)' }}>
          Livrables complémentaires enrichis
        </h3>
        <p style={{ fontSize: '.9rem', marginBottom: 'var(--sp-md)' }}>
          La rétro-documentation augmente le catalogue standard des livrables —
          notamment sur les dimensions design et UX.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
            gap: 'var(--sp-sm)',
          }}
        >
          {deliverables.map((d) => (
            <div
              key={d.label}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                padding: 'var(--sp-md)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  fontSize: '.7rem',
                  fontWeight: 700,
                  color: d.color,
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  marginBottom: 'var(--sp-sm)',
                }}
              >
                {d.label}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                {d.items.map((it) => (
                  <li key={it} style={{ fontSize: '.83rem', color: 'var(--text-secondary)' }}>
                    ▸ {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
