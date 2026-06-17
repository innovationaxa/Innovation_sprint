import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const stack = [
  { icon: '🤖', name: 'Claude / Codex', desc: 'Orchestration des agents, génération de code, analyse sémantique' },
  { icon: '⌨️', name: 'Claude Code / Cursor', desc: 'Développement assisté IA en temps réel dans l\'IDE' },
  { icon: '📐', name: 'FigJam / Figma', desc: 'Workshops, wireframes, design system, prototypes HF' },
  { icon: '📌', name: 'Linear', desc: 'Backlog, tickets, sprints, roadmap produit' },
  { icon: '🐙', name: 'GitHub', desc: 'Versioning, code review, CI/CD, déclencheurs automatiques' },
  { icon: '▲', name: 'Vercel', desc: 'Déploiement instantané, preview par branche, URL partageable' },
  { icon: '🔗', name: 'MCP Protocol', desc: 'Connexion universelle entre agents IA et outils du delivery' },
]

const pilotage = [
  { bar: 'bar-blue', ic: 'ic-blue', icon: '📌', title: 'Création automatique depuis les artefacts', text: 'Les artefacts projet (PRD, specs, notes de workshop) génèrent automatiquement les tickets structurés dans Linear ou Jira, avec le bon contexte, les bons critères d\'acceptance et les bonnes dépendances.' },
  { bar: 'bar-indigo', ic: 'ic-indigo', icon: '🤖', title: 'Agents assignés aux tickets', text: 'Chaque ticket peut être assigné à un agent spécialisé. L\'agent analyse le besoin, produit le livrable (code, doc, analyse), challenge les hypothèses et met à jour le ticket avec ses résultats et sa progression.' },
  { bar: 'bar-green', ic: 'ic-green', icon: '🔄', title: 'Synchronisation continue', text: 'Documentation, prototype et backlog restent synchronisés en temps réel. Chaque livrable agent déclenche une mise à jour automatique des specs et du changelog — sans effort humain supplémentaire.' },
]

const loop = [
  { icon: '🗂️', bg: '#e0e7ff', bc: '#6366f1', lbl: ['Workshop', 'FigJam'] },
  { icon: '🧠', bg: '#dbeafe', bc: '#2563eb', lbl: ['Analyse IA', 'Synthèse'] },
  { icon: '📄', bg: '#fef3c7', bc: '#d97706', lbl: ['PRD', 'Agent'] },
  { icon: '📌', bg: '#f3f4f6', bc: '#6b7280', lbl: ['Tickets', 'Linear'] },
  { icon: '⚡', bg: '#ccfbf1', bc: '#059669', lbl: ['Prototype', 'Code'] },
  { icon: '🐙', bg: '#fee2e2', bc: '#dc2626', lbl: ['GitHub', 'CI/CD'] },
  { icon: '▲', bg: '#f0fdf4', bc: '#16a34a', lbl: ['Vercel', 'Preview'] },
  { icon: '👤', bg: '#ede9fe', bc: '#8b5cf6', lbl: ['Tests', 'Utilisateurs'] },
  { icon: '🔄', bg: '#e0e7ff', bc: '#6366f1', lbl: ['Mise à jour', 'Specs'] },
]

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeader label="Stack technique & connecteurs" title="La boucle delivery connectée">
        Chaque outil joue un rôle précis dans la chaîne. Ensemble, ils forment une
        boucle fermée où chaque étape alimente automatiquement la suivante.
      </SectionHeader>

      <Reveal>
        <div className="stack-grid">
          {stack.map((s) => (
            <div className="stack-item" key={s.name}>
              <span className="si-icon">{s.icon}</span>
              <span className="si-name">{s.name}</span>
              <span className="si-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="callout c-insight" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">🎛️</span>
          <div>
            <div className="c-title">Extension créative via MCP — au-delà du delivery classique</div>
            <div className="c-text">
              Le protocole MCP permet de connecter Claude Cowork à des plateformes
              tierces : <strong>ElevenLabs</strong> pour la génération vocale et
              audio, outils de <strong>motion design</strong>, génération vidéo,
              agents spécialisés externes. Résultat : enrichissement des prototypes
              avec du contenu multimédia, création rapide de démos réalistes,
              automatisation de productions auparavant complexes et coûteuses.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mt-xl">Pilotage du projet par agents IA</h3>
        <p className="mt-sm" style={{ fontSize: '.92rem' }}>
          Les outils de ticketing (Linear, Jira) deviennent des interfaces de
          pilotage IA-native. Les agents prennent en charge les tickets, les
          analysent, produisent des livrables et documentent — sans réunion de
          coordination.
        </p>
        <div className="cards-grid" style={{ marginTop: 'var(--sp-md)' }}>
          {pilotage.map((c) => (
            <div className="card" key={c.title}>
              <div className={`card-bar ${c.bar}`} />
              <div className={`card-icon ${c.ic}`}>{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <p className="card-text">{c.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="callout c-rule" style={{ marginTop: 'var(--sp-md)' }}>
          <span className="c-icon">🔬</span>
          <div>
            <div className="c-title">Cas d'usage observé — Coach prévention habitation</div>
            <div className="c-text">
              Sur le projet du nouveau coach prévention habitation, les premières
              expérimentations ont montré qu'il est possible de piloter l'ensemble
              du delivery via Linear : décomposition automatique du travail,
              exécution semi-autonome des tâches par les agents, synchronisation
              continue entre documentation, prototype et backlog.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mt-xl">La boucle delivery en action</h3>
        <div className="loop-wrap">
          <div className="loop">
            {loop.map((n, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="loop-step">
                  <div className="loop-node" style={{ background: n.bg, borderColor: n.bc }}>
                    {n.icon}
                  </div>
                  <div className="loop-lbl">
                    {n.lbl[0]}
                    <br />
                    {n.lbl[1]}
                  </div>
                </div>
                {i < loop.length - 1 && <div className="loop-arr">→</div>}
              </div>
            ))}
          </div>
          <div className="callout c-rule" style={{ margin: 0, marginTop: 'var(--sp-md)' }}>
            <span className="c-icon">🔗</span>
            <div>
              <div className="c-title">Le principe de la boucle fermée</div>
              <div className="c-text">
                Chaque étape génère des données qui alimentent la suivante. L'IA est
                présente à chaque transition pour transformer, synthétiser et
                proposer — jamais pour décider à la place de l'équipe.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
