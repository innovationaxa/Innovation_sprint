import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const before = [
  'Connaissance dispersée dans des slides, e-mails, entretiens non structurés',
  'Workshops intensifs en présentiel, difficiles à répliquer',
  'Prototypage artisanal, dépendant de compétences rares',
  'Documentation produite en fin de sprint, souvent abandonnée',
  'Tests utilisateurs ponctuels, peu capitalisés',
  'Backlog déconnecté de la vision produit',
  'Feedback loop long : semaines entre idée et validation',
]
const after = [
  'Base de connaissance structurée, interrogeable, toujours disponible',
  'Workshops augmentés : l\'IA structure et synthétise en temps réel',
  'Prototypage assisté par agents spécialisés (design, front, produit)',
  'Documentation vivante, générée et maintenue en continu',
  'Tests augmentés : analyse, patterns, insights atomisés',
  'Backlog connecté au PRD, au prototype et au code',
  'Boucle accélérée : jours entre idée et prototype publié',
]

export function Paradigme() {
  return (
    <Section id="paradigme" variant="alt">
      <SectionHeader label="Le changement de paradigme" title="Avant → Maintenant">
        L'IA ne remplace pas le Design Sprint. Elle en révèle les limites et ouvre
        un nouveau terrain de jeu pour les équipes produit exigeantes.
      </SectionHeader>

      <Reveal>
        <div className="paradigm-grid">
          <div className="paradigm-card before">
            <span className="p-badge">Avant</span>
            <div className="p-title">Design Sprint / Design Sprint Quarter</div>
            <ul className="p-list">
              {before.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="p-arrow">
            <div className="p-arrow-icon">→</div>
            <div className="p-arrow-lbl">
              Transformation
              <br />
              AI-first
            </div>
          </div>

          <div className="paradigm-card after">
            <span className="p-badge">Maintenant</span>
            <div className="p-title">AI-First Delivery Sprint</div>
            <ul className="p-list">
              {after.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="callout c-insight" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">⚡</span>
          <div>
            <div className="c-title">Le principe directeur</div>
            <div className="c-text">
              L'AI-First Delivery Sprint n'est pas un outil de plus dans la boîte.
              C'est un changement de posture : l'IA devient partenaire de réflexion
              stratégique, architecte de la connaissance et accélérateur
              d'exécution — tout en laissant la décision et le jugement à l'humain.
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
