import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { CardDeck } from '../ui/CardDeck'

const groups = [
  {
    icon: '🎯',
    title: 'Cadrage',
    items: [
      'Brief de cadrage structuré',
      'Base de connaissance initialisée',
      'Hypothèses à valider',
      'Contraintes documentées',
      'Personas enrichis',
    ],
  },
  {
    icon: '👤',
    title: 'Client & Expérience',
    items: [
      'User flows et parcours client',
      'Carte des moments de vie',
      'Insights atomiques capitalisés',
      'Restitution tests augmentée',
      'Matrice besoins / habitudes / émotions',
    ],
  },
  {
    icon: '📦',
    title: 'Produit',
    items: [
      'PRD structuré et à jour',
      "User stories avec critères d'acceptance",
      'Backlog Linear priorisé',
      'Maquettes Figma annotées',
      'Agent flows documentés',
    ],
  },
  {
    icon: '⚙️',
    title: 'Technique & Exécution',
    items: [
      'Prototype fonctionnel déployé (Vercel)',
      'Repository GitHub initialisé',
      'Specs techniques',
      'Critères de qualité et tests',
      'Architecture décisionnelle documentée',
    ],
  },
  {
    icon: '📚',
    title: 'Apprentissage',
    items: [
      'Documentation vivante maintenue',
      'Changelog automatique',
      'Rétro sprint structurée',
      'Base de connaissance enrichie',
      'Métriques du sprint',
    ],
  },
]

export function Livrables() {
  return (
    <Section id="livrables">
      <SectionHeader
        label="Livrables standards"
        title="Ce que le sprint produit concrètement"
      >
        À l'issue d'un AI-First Delivery Sprint, chaque domaine dispose de livrables
        actionnables, documentés et maintenus par les agents.
      </SectionHeader>

      <CardDeck gridClassName="deliv-grid" perView={3}>
        {groups.map((g, i) => (
          <Reveal as="div" key={g.title} delay={i * 0.05} className="deliv-group">
            <div className="dg-head">
              <span className="dg-icon">{g.icon}</span>
              <div className="dg-title">{g.title}</div>
            </div>
            <ul className="dg-list">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </CardDeck>
    </Section>
  )
}
