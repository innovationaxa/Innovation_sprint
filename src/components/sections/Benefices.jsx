import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const benefices = [
  {
    cat: 'Innovation',
    cls: 'bi',
    items: [
      'Exploration plus large du champ des possibles en moins de temps',
      'Idées testées sur utilisateurs réels dès J+2, pas J+30',
      'Capitalisation des apprentissages sprint après sprint',
      'Détection précoce des fausses bonnes idées',
      'Parcours agent systématiquement envisagés dès le départ',
    ],
  },
  {
    cat: 'Delivery',
    cls: 'bd',
    items: [
      'Réduction du time-to-prototype de 70% en moyenne',
      'PRD toujours synchronisé avec le code et les maquettes',
      'Backlog priorisé connecté à la vision, pas aux urgences du jour',
      'Moins de réunions de coordination, plus de livrables tangibles',
      'Qualité documentaire maintenue sans effort supplémentaire',
    ],
  },
  {
    cat: 'Organisation',
    cls: 'bo',
    items: [
      'Les équipes passent moins de temps sur les tâches à faible valeur ajoutée',
      'Montée en compétence continue via les agents spécialisés',
      'Réduction des silos : la base de connaissance est partagée',
      "Onboarding accéléré des nouveaux membres d'équipe",
      'Standardisation des pratiques sans bureaucratisation',
    ],
  },
  {
    cat: 'Board Innovation',
    cls: 'bb',
    items: [
      'Prototypes démontrables à chaque session de revue',
      'Décisions appuyées sur des données utilisateurs réelles et fraîches',
      'Traçabilité complète : de la vision au ticket en passant par le test',
      "ROI visible dès les premières semaines d'adoption",
      'Crédibilité renforcée : on montre, on ne raconte plus',
    ],
  },
]

export function Benefices() {
  return (
    <Section id="benefices" variant="alt">
      <SectionHeader label="Bénéfices attendus" title="Ce que cette démarche change concrètement">
        Les bénéfices s'organisent autour de quatre dimensions : innovation, delivery,
        organisation et communication au Board Innovation.
      </SectionHeader>

      <div className="benefits-grid">
        {benefices.map((b, i) => (
          <Reveal as="div" delay={i * 0.05} className="benefit-card" key={b.cat}>
            <div className={`b-cat ${b.cls}`}>{b.cat}</div>
            <ul className="b-list">
              {b.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
