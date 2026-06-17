import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { CardDeck } from '../ui/CardDeck'

const boucles = [
  {
    num: '1',
    name: 'Research to Brief',
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: "Verbatims utilisateurs, données marché, benchmarks, logs d'usage existants." },
      { tag: 'bt-ia', label: 'Rôle IA', text: 'Synthétise les verbatims en insights atomiques, détecte les patterns, propose une formulation du problème, génère un premier draft de brief projet.' },
      { tag: 'bt-hum', label: 'Humain', text: 'Valide la sélection des verbatims significatifs, arbitre le périmètre du problème à traiter, signe le brief.' },
      { tag: 'bt-out', label: 'Outputs', text: 'Brief projet structuré, synthèse recherche, question stratégique validée.' },
    ],
  },
  {
    num: '2',
    name: 'Brief to Concept',
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: 'Brief validé, insights recherche, contraintes techniques et business.' },
      { tag: 'bt-ia', label: 'Rôle IA', text: 'Génère plusieurs pistes conceptuelles, propose des formulations de proposition de valeur, rédige les user stories initiales, anticipe les objections.' },
      { tag: 'bt-hum', label: 'Humain', text: 'Choisit le concept à explorer, ajuste la proposition de valeur, arbitre les compromis entre ambition et faisabilité.' },
      { tag: 'bt-out', label: 'Outputs', text: 'Vision produit, proposition de valeur testable, user stories de niveau épique.' },
    ],
  },
  {
    num: '3',
    name: 'Concept to Prototype',
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: 'Vision produit, user stories, composants design system, contraintes UX.' },
      { tag: 'bt-ia', label: 'Rôle IA', text: 'Génère le code du prototype (React/HTML), injecte des données réelles via APIs, produit les écrans en quelques itérations rapides sur instruction vocale ou textuelle.' },
      { tag: 'bt-hum', label: 'Humain', text: 'Définit les scénarios à tester, valide la conformité UX, décide ce qui sera testé utilisateurs.' },
      { tag: 'bt-out', label: 'Outputs', text: "Prototype fonctionnel déployé, scénarios de test UX, données d'usage simulées." },
    ],
  },
  {
    num: '4',
    name: 'Prototype to Plan',
    critical: true,
    critTag: { text: '🔗 Chaînon critique — souvent absent' },
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: 'Résultats tests UX, insights verbatims, prototype v1, décisions de design validées.' },
      { tag: 'bt-ia', label: 'Rôle IA', text: "Transforme les apprentissages du prototype en PRD structuré, décompose en user stories estimables, génère le backlog priorisé et les critères d'acceptance." },
      { tag: 'bt-hum', label: 'Humain', text: 'Arbitre les priorités, valide la faisabilité technique avec les devs, tranche sur le scope du premier sprint.' },
      { tag: 'bt-out', label: 'Outputs', text: "PRD complet, backlog sprint-ready, plan d'implémentation, architecture cible esquissée." },
    ],
  },
  {
    num: '5',
    name: 'Build to Verify',
    critical: true,
    critTag: { text: "⚡ Plus l'IA accélère, plus il faut vérifier", warn: true },
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: "User stories, critères d'acceptance, architecture cible, design system tokens." },
      { tag: 'bt-ia', label: 'Rôle IA', text: 'Génère le code métier, écrit les tests unitaires et E2E (Playwright), produit les PR avec description, relit le code pair-to-pair, maintient la documentation technique à jour.' },
      { tag: 'bt-hum', label: 'Humain', text: 'Valide les PR critiques, arbitre les compromis techniques, décide ce qui peut passer en production.' },
      { tag: 'bt-out', label: 'Outputs', text: 'Code livré + tests E2E (Playwright) + PR documentées + DORA metrics trackées.' },
    ],
    quote: "\"Chaque accélération de production par l'IA doit être accompagnée d'un mécanisme de vérification au moins équivalent — idéalement supérieur.\"",
  },
  {
    num: '6',
    name: 'Launch to Learn',
    rows: [
      { tag: 'bt-in', label: 'Inputs', text: "Métriques d'usage réel, feedbacks terrain, DORA metrics (lead time, déploiements, taux d'échec, MTTR)." },
      { tag: 'bt-ia', label: 'Rôle IA', text: "Analyse les logs et signaux d'usage, corrèle les métriques DORA avec les cycles de delivery, synthétise les apprentissages en insights actionnables, propose les ajustements roadmap." },
      { tag: 'bt-hum', label: 'Humain', text: 'Interprète les insights dans leur contexte stratégique, décide de la prochaine boucle de discovery, porte la responsabilité des arbitrages produit.' },
      { tag: 'bt-out', label: 'Outputs', text: "Rapport d'apprentissage, roadmap mise à jour, nouvelle boucle Research to Brief déclenchée." },
    ],
  },
]

const recap = [
  { n: '1', boucle: 'Research to Brief', q: 'Que sait-on vraiment ?', livrable: 'Brief projet', agent: 'PM / Research', decision: 'Quel problème traiter ?' },
  { n: '2', boucle: 'Brief to Concept', q: 'Quelle proposition de valeur tester ?', livrable: 'Vision produit', agent: 'PM / Product Designer', decision: 'Quel concept explorer ?' },
  { n: '3', boucle: 'Concept to Prototype', q: "Comment rendre l'expérience tangible ?", livrable: 'Prototype publié', agent: 'Front-end / Designer', decision: 'Que tester ?' },
  { n: '4', boucle: 'Prototype to Plan', q: 'Que nous apprend le prototype ?', livrable: 'PRD + backlog', agent: 'PO / PRD / Backlog', decision: 'Que construire ?' },
  { n: '5', boucle: 'Build to Verify', q: 'Comment produire sans perdre en qualité ?', livrable: 'Code + tests + PR', agent: 'Dev / QA', decision: "Qu'est-ce qui peut passer ?" },
  { n: '6', boucle: 'Launch to Learn', q: "Que dit l'usage réel ?", livrable: 'Insights terrain + roadmap', agent: 'Research / Analytics', decision: 'Que faire ensuite ?' },
]

const formule = [
  { label: 'Research to Brief' },
  { label: 'Brief to Concept' },
  { label: 'Concept to Prototype' },
  { label: 'Prototype to Plan', accent: true },
  { label: 'Build to Verify', accent: true },
  { label: 'Launch to Learn' },
]

export function Boucles() {
  return (
    <Section id="boucles" style={{ background: 'var(--bg-warm)' }}>
      <SectionHeader label="Vision end-to-end" title="Les 6 boucles d'une AI Squad">
        L'AI-First Delivery Sprint n'est pas seulement une méthode d'accélération du cadrage.
        C'est une chaîne de delivery complète — de la recherche initiale au retour terrain — où
        les agents opèrent à chaque étape pendant que les humains gardent les arbitrages de sens,
        de valeur, de risque et de responsabilité.
      </SectionHeader>

      <Reveal>
        <p className="boucles-intro">
          La plupart des équipes qui adoptent l'IA s'arrêtent à mi-chemin : elles accélèrent le
          cadrage et la conception, mais perdent le fil entre le prototype et le code livré.
          Résultat : une chaîne incomplète qui reproduit les mêmes frictions qu'avant. Les 6
          boucles ci-dessous couvrent l'intégralité du cycle, avec une attention particulière aux
          trois phases souvent manquantes&nbsp;: <strong>Prototype to plan</strong>,{' '}
          <strong>Build to verify</strong> et <strong>Launch to learn</strong>.
        </p>
      </Reveal>

      <CardDeck gridClassName="boucle-grid" perView={2}>
        {boucles.map((b, i) => (
          <Reveal
            as="div"
            delay={i * 0.05}
            className={`boucle-card${b.critical ? ' bc-critical' : ''}`}
            key={b.num}
          >
            <div className="boucle-header">
              <div className="boucle-num">{b.num}</div>
              <div className="boucle-name">
                <span>Boucle {b.num}</span>
                <strong>{b.name}</strong>
              </div>
            </div>
            <div className="boucle-body">
              {b.critTag && (
                <div className={`boucle-crit-tag${b.critTag.warn ? ' warn' : ''}`}>
                  {b.critTag.text}
                </div>
              )}
              {b.rows.map((r) => (
                <div className="boucle-row" key={r.label}>
                  <span className={`boucle-tag ${r.tag}`}>{r.label}</span>
                  <p>{r.text}</p>
                </div>
              ))}
              {b.quote && (
                <div
                  style={{
                    marginTop: '.6rem',
                    padding: '.7rem .9rem',
                    background: 'var(--primary-mid)',
                    borderRadius: 'var(--r-sm)',
                    fontSize: '.83rem',
                    color: 'var(--primary)',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    borderLeft: '3px solid var(--primary)',
                  }}
                >
                  {b.quote}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </CardDeck>

      <Reveal>
        <div className="callout c-info" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">📊</span>
          <div>
            <div className="c-title">
              Les 4 métriques DORA — indicateurs de santé du delivery IA-First
            </div>
            <div
              className="c-text"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))',
                gap: '.5rem .75rem',
                marginTop: '.6rem',
              }}
            >
              <span>
                <strong>Lead time for changes</strong> — temps entre le premier commit et la mise
                en prod
              </span>
              <span>
                <strong>Deployment frequency</strong> — fréquence des déploiements en production
              </span>
              <span>
                <strong>Change failure rate</strong> — proportion de déploiements causant un
                incident
              </span>
              <span>
                <strong>Failed deployment recovery time (MTTR)</strong> — temps de rétablissement
                après un échec
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Tableau de synthèse</h3>
        <div className="recap-table-wrap">
          <table className="recap-table">
            <thead>
              <tr>
                <th>Boucle</th>
                <th>Question clé</th>
                <th>Livrable pivot</th>
                <th>Agent principal</th>
                <th>Décision humaine</th>
              </tr>
            </thead>
            <tbody>
              {recap.map((r) => (
                <tr key={r.n}>
                  <td>
                    <span className="badge-row">{r.n}</span> {r.boucle}
                  </td>
                  <td>{r.q}</td>
                  <td>{r.livrable}</td>
                  <td>{r.agent}</td>
                  <td>{r.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>La formule cible</h3>
        <div className="formule-chain">
          {formule.map((f) => (
            <div className="fc-step" key={f.label}>
              <span className={`fc-pill${f.accent ? ' fc-accent' : ''}`}>{f.label}</span>
              <span className="fc-arr">→</span>
            </div>
          ))}
          <span className="fc-loop">↺ nouvelle boucle de discovery</span>
        </div>
      </Reveal>

      <Reveal>
        <div className="callout c-rule" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">🔁</span>
          <div>
            <div className="c-title">La vision complète</div>
            <div className="c-text">
              L'AI-First Delivery Sprint n'est pas seulement une méthode d'accélération du cadrage.
              C'est une chaîne de delivery complète où les agents aident à produire, tester, relire,
              documenter et apprendre — pendant que les humains gardent les arbitrages de sens, de
              valeur, de risque et de responsabilité.
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
