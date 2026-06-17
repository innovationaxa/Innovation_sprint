import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { PromptBlock } from '../ui/PromptBlock'

const agents = [
  { bg: '#dbeafe', icon: '🎯', name: 'Agent PM', role: 'Vision & stratégie produit' },
  { bg: '#e0e7ff', icon: '📋', name: 'Agent PO', role: 'Backlog & user stories' },
  { bg: '#ede9fe', icon: '🔍', name: 'Agent UX Research', role: 'Insights & verbatims' },
  { bg: '#fce7f3', icon: '🎨', name: 'Agent Product Designer', role: 'Parcours & maquettes' },
  { bg: '#ccfbf1', icon: '💻', name: 'Agent Front-end', role: 'Composants & prototype' },
  { bg: '#fef3c7', icon: '📄', name: 'Agent PRD', role: 'Blueprint produit' },
  { bg: '#d1fae5', icon: '📚', name: 'Agent Documentation', role: 'Specs & changelog' },
  { bg: '#fee2e2', icon: '🔬', name: 'Agent QA', role: "Tests & critères d'acceptance" },
  { bg: '#f3f4f6', icon: '📊', name: 'Agent Backlog', role: 'Priorisation & dépendances' },
]

const ficheProps = [
  ['Rôle', 'Senior Product Manager'],
  ['Accès', 'Base connaissance + Linear + Figma'],
  ['Inputs', 'Brief, notes workshop, insights UX'],
  ['Outputs', "PRD structuré, user stories, critères d'acceptance"],
  ['Connecteurs', 'Linear MCP, Figma MCP, GitHub MCP'],
  ['Disponibilité', 'Instantanée, 24/7, sans réunion'],
]

const skills = [
  ['🏷️', 'Brand & Design'], ['💰', 'Finance'], ['⚖️', 'Légal & Conformité'],
  ['🚀', 'Product Management'], ['🎨', 'Créativité'], ['📈', 'Sales & Growth'],
  ['📣', 'Marketing'], ['⚙️', 'Productivité'], ['🔒', 'Sécurité & IT'],
]

const prdPrompt = `Tu es un Senior Product Manager expert en rédaction de PRD pour produits digitaux.

Tu disposes :
- de la base de connaissance du projet (contexte métier, personas, insights UX)
- des notes du dernier workshop augmenté
- de l'accès aux tickets Linear existants
- des maquettes Figma disponibles

Tes responsabilités :
1. Structurer le Product Requirements Document selon le template défini
2. Rédiger les user stories : "En tant que [persona], je veux [action], afin de [bénéfice]"
3. Définir des critères d'acceptance testables et précis
4. Identifier les dépendances techniques et les risques produit
5. Maintenir la cohérence entre vision produit et specs détaillées
6. Créer automatiquement les tickets correspondants dans Linear

Format attendu : structure JSON + Markdown lisible
Niveau de détail : production-ready, aucun placeholder
Ton : professionnel, précis, orienté décision`

export function Agents() {
  return (
    <Section id="agents" variant="alt">
      <SectionHeader label="Focus agents spécialisés" title="Agents, skills et plugins">
        Un agent spécialisé, c'est un modèle de langage configuré avec un rôle
        précis, des instructions métier, des outils dédiés et un accès à la base
        de connaissance projet.
      </SectionHeader>

      <Reveal>
        <div className="callout c-rule">
          <span className="c-icon">🎯</span>
          <div>
            <div className="c-title">Qu'est-ce qu'un skill / une compétence ?</div>
            <div className="c-text">
              Un skill est un bloc d'instructions, d'outils et de contexte
              préconfigurés qui dote un agent d'une expertise spécifique. Comme un
              brief détaillé donné à un expert avant une mission — sauf que le
              brief est structuré, cohérent et réutilisable à l'infini. Les plugins
              regroupent des familles de skills et de connecteurs pour un domaine
              donné (ex. : Plugin Design, Plugin Finance, Plugin Legal).
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mt-xl">L'équipe d'agents spécialisés</h3>
        <p className="mt-sm" style={{ fontSize: '.92rem' }}>
          Chaque rôle humain du delivery peut être augmenté ou suppléé par un
          agent dédié, disponible instantanément, sans réunion de coordination.
        </p>
      </Reveal>

      <Reveal>
        <div className="agents-grid">
          {agents.map((a) => (
            <div className="agent-chip" key={a.name}>
              <div className="agent-av" style={{ background: a.bg }}>{a.icon}</div>
              <div>
                <div className="agent-name">{a.name}</div>
                <div className="agent-role">{a.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mt-xl">Fiche type — Agent PRD / Blueprint produit</h3>
        <div className="fiche">
          <div className="fiche-head">
            <div>
              <h3 style={{ marginBottom: '.4rem' }}>Agent PRD</h3>
              <p style={{ fontSize: '.88rem', margin: 0 }}>
                Génère, structure et maintient le Product Requirements Document
                tout au long du sprint.
              </p>
            </div>
            <span className="fiche-badge">Skill : PRD Writer</span>
          </div>
          <div className="fiche-props">
            {ficheProps.map(([lbl, val]) => (
              <div className="fp" key={lbl}>
                <div className="fp-lbl">{lbl}</div>
                <div className="fp-val">{val}</div>
              </div>
            ))}
          </div>
          <PromptBlock label="Prompt système — Agent PRD">{prdPrompt}</PromptBlock>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="mt-xl">Bibliothèques de compétences disponibles</h3>
        <p className="mt-sm" style={{ fontSize: '.9rem' }}>
          Des skills préconfigurés couvrent les grands domaines métier. Il suffit
          de les activer pour doter un agent d'une expertise spécialisée
          immédiatement opérationnelle.
        </p>
        <div className="skills-lib">
          {skills.map(([icon, name]) => (
            <div className="skill-tile" key={name}>
              <span className="st-icon">{icon}</span>
              <div className="st-name">{name}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
