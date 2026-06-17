import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { CardDeck } from '../ui/CardDeck'

const before = [
  'Données fictives figées dans les maquettes',
  'Interactions simulées manuellement',
  'Tests utilisateurs biaisés par l\'effet "prototype évident"',
  'Écart fort entre ce que l\'on teste et ce que l\'on va livrer',
  'Décisions produit basées sur des réactions à du faux',
]
const after = [
  'Modèle de langage branché directement dans le prototype',
  'Comportements simulés de façon crédible et dynamique',
  'Expérience utilisateur testable très tôt, quasi-réelle',
  'Réduction forte des ambiguïtés d\'interprétation',
  'Décisions produit appuyées sur des interactions authentiques',
]
const cards = [
  { bar: 'bar-blue', ic: 'ic-blue', icon: '🔌', title: 'Prototype interactif dès J+2', text: 'Le LLM est injecté dans le prototype fonctionnel déployé sur Vercel. Les réponses et comportements sont générés dynamiquement — pas préprogrammés. L\'utilisateur vit une expérience quasi-réelle.' },
  { bar: 'bar-indigo', ic: 'ic-indigo', icon: '🧪', title: 'Validation beaucoup plus réaliste', text: 'Les tests utilisateurs sur un Real Data Prototype révèlent des insights que les prototypes statiques masquent. Les utilisateurs réagissent à de vraies interactions, pas à des animations.' },
  { bar: 'bar-violet', ic: 'ic-violet', icon: '🗑️', title: 'Prototype jetable, décision durable', text: 'Le prototype n\'est pas dans l\'architecture cible — il reste jetable. Mais les apprentissages qu\'il génère sont réels, capitalisés et directement injectés dans le backlog et la documentation vivante.' },
  { bar: 'bar-green', ic: 'ic-green', icon: '⚡', title: 'Accélération des décisions produit', text: 'Les ambiguïtés fonctionnelles se lèvent naturellement pendant les tests. On sort du débat théorique sur "comment l\'IA devrait se comporter" pour observer comment elle se comporte réellement.' },
]

export function RealDataProto() {
  return (
    <Section id="realdataproto" variant="alt">
      <SectionHeader label="Axe complémentaire clé" title="Real Data Prototype">
        On sort du "fake it until you make it" pour entrer dans une logique où le
        prototype est réellement interactif, alimenté par un modèle de langage — et
        testable de façon crédible dès les premiers jours.
      </SectionHeader>

      <Reveal>
        <div className="paradigm-grid">
          <div className="paradigm-card before">
            <span className="p-badge">Prototype classique</span>
            <div className="p-title">"Fake it until you make it"</div>
            <ul className="p-list">{before.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="p-arrow">
            <div className="p-arrow-icon">→</div>
            <div className="p-arrow-lbl">Real Data<br />Prototype</div>
          </div>
          <div className="paradigm-card after">
            <span className="p-badge">Real Data Prototype</span>
            <div className="p-title">LLM injecté dans le prototype</div>
            <ul className="p-list">{after.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <CardDeck
          gridClassName="cards-grid"
          perView={3}
          gridStyle={{ marginTop: 'var(--sp-xl)' }}
        >
          {cards.map((c) => (
            <div className="card" key={c.title}>
              <div className={`card-bar ${c.bar}`} />
              <div className={`card-icon ${c.ic}`}>{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <p className="card-text">{c.text}</p>
            </div>
          ))}
        </CardDeck>
      </Reveal>

      <Reveal>
        <div className="hbox">
          <p>
            💡 <strong>Ce que cela change pour le Board :</strong> Quand vous
            présentez un Real Data Prototype, vous ne montrez plus une simulation de
            ce que le produit fera. Vous montrez ce que le produit fait déjà — dans
            un contexte contrôlé, avec de vraies interactions. Le gap entre la démo
            et la réalité s'effondre.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
