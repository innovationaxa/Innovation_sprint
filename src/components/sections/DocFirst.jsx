import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const beforeList = [
  'Difficile à maintenir : une diapo modifiée casse la mise en page',
  'Peu exploitable par les agents IA : format binaire, non structuré',
  'Non versionnable : impossible de faire un diff propre',
  'Pas automatisable : toute mise à jour est manuelle',
  'Silo de format : incompatible avec les outils du delivery moderne',
]

const afterList = [
  'Simple à écrire et à maintenir — aucune mise en forme à gérer',
  'Exploitable nativement par tous les agents IA',
  'Versionnable avec Git : historique complet, diff lisible',
  'Automatisable : les agents génèrent, mettent à jour et publient',
  'Interopérable : Notion, GitHub, Linear, Vercel le lisent tous',
]

const cards = [
  {
    bar: 'bar-blue', ic: 'ic-blue', icon: '📝',
    title: 'Playbook Projet en Markdown',
    text: 'Chaque sprint démarre par un Playbook Projet au format Markdown. Ce fichier devient la source de vérité partagée entre tous les agents et toutes les parties prenantes humaines.',
  },
  {
    bar: 'bar-indigo', ic: 'ic-indigo', icon: '🔄',
    title: 'Mise à jour automatique par les agents',
    text: 'Les agents PRD, Documentation et Backlog maintiennent les fichiers Markdown en temps réel. Chaque décision, chaque livrable, chaque insight enrichit automatiquement la documentation.',
  },
  {
    bar: 'bar-green', ic: 'ic-green', icon: '🐙',
    title: 'Versioning Git intégré',
    text: "Toute la documentation est versionnée dans le même repository que le code. L'historique des décisions produit est traçable, comparable et récupérable à tout moment.",
  },
]

export function DocFirst() {
  return (
    <Section id="docfirst">
      <SectionHeader
        label="Format de référence"
        title="Documentation IA-first : le Markdown comme standard"
      >
        La documentation n'est pas un livrable de fin de projet. C'est le matériau
        de base que les agents consomment, enrichissent et maintiennent. Le choix
        du format n'est pas anodin.
      </SectionHeader>

      <Reveal>
        <div className="paradigm-grid">
          <div className="paradigm-card before">
            <span className="p-badge">PowerPoint / Word</span>
            <div className="p-title">Le format qui freine l'IA</div>
            <ul className="p-list">
              {beforeList.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="p-arrow">
            <div className="p-arrow-icon">→</div>
            <div className="p-arrow-lbl">
              Migration
              <br />
              progressive
            </div>
          </div>
          <div className="paradigm-card after">
            <span className="p-badge">Markdown</span>
            <div className="p-title">Le format IA-native</div>
            <ul className="p-list">
              {afterList.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
            gap: 'var(--sp-md)',
            marginTop: 'var(--sp-xl)',
          }}
        >
          {cards.map((c) => (
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
        <div className="callout c-rule" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">🎯</span>
          <div>
            <div className="c-title">La convergence progressive vers Markdown</div>
            <div className="c-text">
              L'objectif n'est pas de supprimer PowerPoint d'un coup. C'est
              d'identifier les artefacts project qui ont le plus de valeur pour les
              agents (PRD, specs, playbook, user stories, guides d'entretien) et de
              les migrer progressivement vers des formats Markdown structurés.
              Chaque artefact migré augmente la capacité des agents à comprendre et
              exécuter.
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
