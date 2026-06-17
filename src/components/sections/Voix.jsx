import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { CardDeck } from '../ui/CardDeck'
import { PromptBlock } from '../ui/PromptBlock'

const tools = [
  {
    bar: 'bar-blue', ic: 'ic-blue', icon: '🤝',
    title: 'Teams Copilot',
    text: "Résume les points clés d'une réunion, identifie qui a dit quoi et suggère des actions — pendant ou après la session. Intégré nativement dans Microsoft 365.",
  },
  {
    bar: 'bar-indigo', ic: 'ic-indigo', icon: '📋',
    title: 'Teams Recap',
    text: "Centralise enregistrements, transcriptions et contenus partagés d'une réunion dans un espace unique. Retrouvable et consultable après coup.",
  },
  {
    bar: 'bar-violet', ic: 'ic-violet', icon: '💬',
    title: 'ChatGPT Record',
    text: 'Transcrit et résume réunions, brainstorms et notes vocales — puis transforme ces résumés en plans projet, emails ou code. Utilisable hors contexte entreprise.',
  },
  {
    bar: 'bar-green', ic: 'ic-green', icon: '⚙️',
    title: 'Whisper + LLM',
    text: 'Pipeline automatisé souverain : transcription (Whisper), résumé, points clés, actions et analyse via un LLM. Configurable, hébergeable en interne, maîtrisable.',
  },
]

const outputTags = [
  'Décisions', 'Hypothèses', 'Actions', 'Irritants', 'Arbitrages',
  'Impacts parcours', 'MAJ PRD', 'Specs fonctionnelles',
  'Tickets Linear / Jira', 'Consignes agents IA', 'Changelog prototype',
]

const loop = [
  { icon: '🖥️', bg: '#e0e7ff', bc: '#6366f1', lbl: ['Prototype', <>V<sub>n</sub></>] },
  { icon: '🎙️', bg: '#d1fae5', bc: '#059669', lbl: ['Workshop', 'capturé'] },
  { icon: '📝', bg: '#dbeafe', bc: '#2563eb', lbl: ['Transcript', 'IA'] },
  { icon: '📋', bg: '#fef3c7', bc: '#d97706', lbl: ['Synthèse', 'structurée'] },
  { icon: '📄', bg: '#ede9fe', bc: '#8b5cf6', lbl: ['Specs', 'MAJ'] },
  { icon: '📌', bg: '#f3f4f6', bc: '#9ca3af', lbl: ['Tickets', 'Linear'] },
  { icon: '🤖', bg: '#dbeafe', bc: '#2563eb', lbl: ['Agents', 'IA'] },
  { icon: '🚀', bg: '#d1fae5', bc: '#059669', lbl: ['Prototype', <>V<sub>n+1</sub></>] },
  { icon: '👤', bg: '#fce7f3', bc: '#ec4899', lbl: ['Tests', 'utilisateurs'] },
]

const structItems = [
  'Contexte', 'Participants', "Objectifs de l'atelier", 'Sujets discutés',
  'Décisions prises', 'Hypothèses à tester', 'Points de désaccord / incertitudes',
  'Impacts sur le parcours client', 'Impacts sur le parcours agent / métier',
  'Actions à mener', 'Mises à jour PRD proposées', 'Tickets Linear / Jira proposés',
  'Questions ouvertes', 'Risques', 'Prochaine boucle', 'À valider humainement',
]

const synthesePrompt = `Tu es un PM senior et un analyste produit.

À partir de la transcription brute de cet atelier, produis une synthèse
structurée au format Markdown.

Objectifs :
1. Résumer le contexte de l'atelier
2. Identifier les décisions prises
3. Lister les hypothèses produit à tester
4. Extraire les points de désaccord ou d'incertitude
5. Identifier les impacts sur le parcours client
6. Identifier les impacts sur le parcours agent / métier
7. Lister les actions à mener
8. Proposer les mises à jour à apporter au PRD
9. Proposer les tickets Linear / Jira à créer
10. Identifier les questions ouvertes pour le prochain atelier

Contraintes :
- Distinguer clairement faits, décisions, hypothèses et recommandations
- Ne pas inventer de décision non explicitement formulée
- Signaler les ambiguïtés
- Utiliser un format actionnable
- Produire une section "À valider humainement"`

const ticketsPrompt = `À partir de cette synthèse d'atelier et du PRD actuel :

1. Identifie les évolutions produit à créer
2. Regroupe-les par epic ou module
3. Pour chaque ticket, fournis :
   - titre
   - contexte
   - objectif
   - description fonctionnelle
   - critères d'acceptation
   - dépendances
   - criticité
   - lien avec la décision d'atelier
   - questions ouvertes
4. Indique les tickets pouvant être pris en charge par un agent IA
5. Indique les tickets nécessitant une validation humaine avant exécution

Format : tableau Markdown + détail par ticket.`

const governItems = [
  'Consentement explicite des participants avant enregistrement',
  'Confidentialité des échanges et des données partagées',
  'Suppression des éléments hors sujet ou sensibles avant traitement',
  "Droit d'enregistrement et durée de conservation définis",
  'Accès aux transcriptions limité aux personnes concernées',
  'Outils autorisés vs. outils externes non conformes',
  'Environnement interne ou externe — pas de mélange par défaut',
  'Validation humaine avant création de tickets ou MAJ de specs',
  "L'IA propose, l'humain valide et assume la décision finale",
]

export function Voix() {
  return (
    <Section id="voix" variant="alt">
      <SectionHeader label="Nouveauté" title="La voix comme input de delivery">
        Une réunion, un atelier, une session d'itération : chaque échange oral peut
        désormais être capturé, structuré et transformé en matière exploitable —
        specs, tickets, mises à jour PRD, instructions agents.
      </SectionHeader>

      <Reveal>
        <div className="callout c-rule" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">🎙️</span>
          <div>
            <div className="c-title">Formule synthétique</div>
            <div className="c-text">
              Dans l'AI-First Delivery Sprint, la voix devient un input de delivery :
              chaque discussion utile peut être capturée, structurée, convertie en
              specs, transformée en tickets et réinjectée dans la boucle prototype&nbsp;/
              test&nbsp;/ apprentissage.
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── 1. Outils disponibles ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Ce qui devient possible aujourd'hui</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          Les outils de capture audio et de transcription sont matures. Combinés à un
          LLM, ils permettent de transformer n'importe quel échange oral en matière
          structurée.
        </p>
        <CardDeck gridClassName="cards-grid" perView={4} gridStyle={{ gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))' }}>
          {tools.map((c) => (
            <div className="card" key={c.title}>
              <div className={`card-bar ${c.bar}`} />
              <div className={`card-icon ${c.ic}`}>{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <p className="card-text">{c.text}</p>
            </div>
          ))}
        </CardDeck>
      </Reveal>

      {/* ── 2. Le vrai changement ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Le vrai changement</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          La voix devient une source de travail structurée. La réunion ne produit plus
          seulement un compte rendu — elle peut produire des livrables directement
          exploitables.
        </p>

        <div className="paradigm-grid" style={{ marginTop: 'var(--sp-xl)' }}>
          <div className="paradigm-card before">
            <span className="p-badge">Avant</span>
            <div className="p-title" style={{ fontSize: '1rem' }}>Pipeline fragmenté</div>
            <div className="formule-box" style={{ marginTop: 'var(--sp-md)' }}>
              <p>Réunion</p>
              <p>→ notes partielles</p>
              <p>→ synthèse tardive</p>
              <p>→ specs approximatives</p>
            </div>
            <ul className="p-list">
              <li>Perte de contexte à chaque étape</li>
              <li>Délai entre discussion et action</li>
              <li>Specs déconnectées des échanges réels</li>
            </ul>
          </div>
          <div className="paradigm-card after">
            <span className="p-badge">Maintenant</span>
            <div className="p-title" style={{ fontSize: '1rem' }}>Pipeline continu</div>
            <div className="formule-box" style={{ marginTop: 'var(--sp-md)' }}>
              <p>Discussion capturée</p>
              <p>→ transcript</p>
              <p>→ synthèse IA</p>
              <p>→ specs / tickets</p>
              <p>→ agents → prototype</p>
            </div>
            <ul className="p-list">
              <li>Aucune perte entre la parole et l'artefact</li>
              <li>Décisions tracées dès leur formulation</li>
              <li>Boucle delivery fermée depuis l'oral</li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: 'var(--sp-lg)', fontSize: '.93rem', fontWeight: 600, color: 'var(--text)', maxWidth: 'var(--text-w)' }}>
          Une réunion bien capturée peut produire :
        </p>
        <div className="output-list" style={{ marginTop: 'var(--sp-sm)' }}>
          {outputTags.map((t) => (
            <span className="output-tag" key={t}>{t}</span>
          ))}
        </div>
      </Reveal>

      {/* ── 3. Application workshops ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Application aux workshops augmentés</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          Dans un workshop augmenté, l'équipe peut parler à voix haute en considérant
          que l'IA est un membre silencieux de l'atelier, chargé de capter la matière
          brute.
        </p>

        <div className="callout c-insight" style={{ marginTop: 'var(--sp-lg)' }}>
          <span className="c-icon">💡</span>
          <div>
            <div className="c-title">Bonne pratique</div>
            <div className="c-text">
              Verbaliser explicitement les décisions, hypothèses et actions comme si
              l'IA devait les transformer ensuite en specs et tickets. Ridicule&nbsp;? Un
              peu. Efficace&nbsp;? Oui — comme beaucoup de choses dans la vie de bureau.
            </div>
          </div>
        </div>

        <p style={{ marginTop: 'var(--sp-lg)', fontSize: '.9rem', fontWeight: 600, color: 'var(--text)' }}>
          Formulations utiles pendant l'atelier :
        </p>
        <div className="formule-box" style={{ marginTop: 'var(--sp-sm)' }}>
          <p>Nous décidons que…</p>
          <p>L'hypothèse à tester est…</p>
          <p>Le point bloquant est…</p>
          <p>L'action à créer est…</p>
          <p>La version suivante du prototype doit…</p>
          <p>Cette remarque doit être ajoutée au PRD…</p>
          <p>Ce sujet doit devenir un ticket…</p>
        </div>
      </Reveal>

      {/* ── 4. Boucle itération prototype ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Application aux ateliers d'itération prototype</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          Cas particulièrement puissant : chaque session de revue de prototype devient
          une source directe pour la version suivante, sans friction manuelle.
        </p>

        <div className="loop-wrap" style={{ marginTop: 'var(--sp-xl)' }}>
          <p style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 'var(--sp-md)' }}>
            Boucle d'itération cible
          </p>
          <div className="loop">
            {loop.map((n, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="loop-step">
                  <div className="loop-node" style={{ background: n.bg, borderColor: n.bc }}>
                    {n.icon}
                  </div>
                  <span className="loop-lbl">
                    {n.lbl[0]}
                    <br />
                    {n.lbl[1]}
                  </span>
                </div>
                {i < loop.length - 1 && <span className="loop-arr">→</span>}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── 5. Livrable Markdown ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Livrable à produire après chaque atelier capturé</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          Format recommandé&nbsp;: Markdown. Structure standardisée pour permettre aux
          agents de consommer et d'agir directement sur le contenu.
        </p>

        <div className="struct-card">
          <div className="struct-head">Structure recommandée — Synthèse atelier Markdown</div>
          <div className="struct-body">
            {structItems.map((it, i) => (
              <div className="struct-item" key={it}>
                <span className="struct-num">{String(i + 1).padStart(2, '0')}</span> {it}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── 6. Prompt synthèse ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Prompt — Synthèse structurée d'atelier</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          À soumettre à un agent avec la transcription brute de l'atelier en entrée.
        </p>
        <div style={{ marginTop: 'var(--sp-lg)' }}>
          <PromptBlock label="Prompt — Synthèse atelier">{synthesePrompt}</PromptBlock>
        </div>
      </Reveal>

      {/* ── 7. Prompt tickets ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Prompt — Conversion en tickets</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          À utiliser après la synthèse, en fournissant le PRD actuel comme contexte
          additionnel.
        </p>
        <div style={{ marginTop: 'var(--sp-lg)' }}>
          <PromptBlock label="Prompt — Génération de tickets Linear / Jira">{ticketsPrompt}</PromptBlock>
        </div>
      </Reveal>

      {/* ── 8. Gouvernance ── */}
      <Reveal>
        <h3 style={{ marginTop: 'var(--sp-2xl)' }}>Points de vigilance — Gouvernance</h3>
        <p style={{ marginTop: '.6rem', fontSize: '.93rem', color: 'var(--text-secondary)', maxWidth: 'var(--text-w)' }}>
          Enregistrer des échanges sans cadre, c'est une dérive rapide. Cette capacité
          nécessite un cadre explicite avant tout déploiement.
        </p>

        <div className="callout c-warn" style={{ marginTop: 'var(--sp-lg)' }}>
          <span className="c-icon">⚠️</span>
          <div>
            <div className="c-title">Règle simple</div>
            <div className="c-text">
              La voix accélère la capture. Elle ne supprime pas la responsabilité de
              validation. Aucun ticket, aucune spec et aucune mise à jour PRD ne doit
              être poussée sans relecture humaine.
            </div>
          </div>
        </div>

        <div className="govern-grid">
          {governItems.map((it) => (
            <div className="govern-item" key={it}>
              <div className="govern-dot" />
              {it}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
