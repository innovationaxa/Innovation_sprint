import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { PromptBlock } from '../ui/PromptBlock'

const cadragePrompt = `Tu es un expert en product discovery. En t'appuyant sur les documents fournis,
génère une synthèse structurée du défi avec :
- Le problème central en une phrase
- Les 3 hypothèses clés à valider
- Les données connues vs les zones d'incertitude
- Les personas principaux et leurs besoins critiques
- Les contraintes non négociables (technique, légal, budget)

Format : document de cadrage prêt à partager en workshop`

const playbookCols = [
  { color: 'var(--primary)', title: 'Vision & Cadrage', items: ['Problem Statement', 'Long Term Goal', 'Sprint Questions', 'Hypothèses clés', 'KPI de succès'] },
  { color: 'var(--secondary)', title: 'Valeur', items: ["What's in it for the user", "What's in it for the company"] },
  { color: 'var(--accent)', title: 'Pain Points', items: ['Top 3 problèmes utilisateurs', 'Irritants majeurs', 'Opportunités produit'] },
]

const steps = [
  {
    n: 1, phase: 'Phase Cadrage', title: 'Cadrer le défi et constituer la base de connaissance',
    desc: 'Rassembler, structurer et rendre exploitable tout ce qui est déjà su. Études, entretiens passés, données marché, contraintes réglementaires, insights utilisateurs — ce capital dispersé devient la fondation du sprint.',
    prompt: { label: 'Prompt de cadrage', text: cadragePrompt },
    playbook: true,
    tags: ['📄 Playbook Projet (Markdown)', '🗂️ Base de connaissance initialisée', '🎯 Hypothèses à valider', '📊 KPI de succès définis'],
  },
  {
    n: 2, phase: 'Phase Alignement', title: 'Aligner le problème en workshop augmenté',
    desc: "Un workshop où l'IA prend des notes structurées, propose des reformulations du problème, génère des axes de design et identifie les désaccords tacites dans le groupe. L'objectif : un alignement clair et documenté à la fin de la session.",
    callout: { cls: 'c-rule', icon: '💡', title: "Rôle de l'IA dans le workshop", text: "L'IA est invisible pour les participants — elle facilite en arrière-plan. Elle structure les post-its FigJam, propose des regroupements thématiques, identifie les tensions et génère des \"How Might We\" pertinents à la volée." },
    tags: ['🗂️ Synthèse workshop structurée', '🎯 Problem statement partagé', '💡 HMW prioritaires'],
  },
  {
    n: 3, phase: 'Phase Compréhension', title: 'Comprendre les besoins réels et moments de vie',
    desc: "L'agent UX Research analyse la base de connaissance, identifie les gaps et génère un guide d'entretien ciblé. Les tests sont préparés avec précision : moments de vie, déclencheurs comportementaux, barrières émotionnelles, attentes implicites.",
    tags: ['👤 Personas enrichis', "📋 Guide d'entretien IA-first", '🗺️ Carte des moments de vie'],
  },
  {
    n: 4, phase: 'Phase Conception', title: 'Concevoir les parcours client + agent',
    desc: "L'agent Product Designer co-conçoit les parcours utilisateurs et les parcours agent — comment l'IA intervient dans l'expérience. Les flows sont générés dans FigJam ou Figma, itérés en direct, annotés avec les décisions de design.",
    callout: { cls: 'c-insight', icon: '✨', title: 'Parcours agent : une nouveauté critique', text: "Dans un produit AI-first, l'IA fait partie de l'expérience. Le parcours agent documente où l'IA intervient, ce qu'elle fait, ce qu'elle ne fait pas, et comment l'humain garde le contrôle à chaque étape critique. C'est un livrable de design à part entière." },
    tags: ['🗺️ User flows', '🤖 Agent flows', '🎨 Maquettes fil de fer'],
  },
  {
    n: 5, phase: 'Phase Socle Produit', title: 'Générer le socle produit',
    desc: "L'agent PRD génère un Product Requirements Document structuré, avec user stories, critères d'acceptance, dépendances et risques identifiés. L'agent Backlog crée les tickets dans Linear, priorisés et connectés au PRD.",
    tags: ['📄 PRD structuré', '📋 User stories complètes', '📌 Backlog Linear initialisé', '⚠️ Risques identifiés'],
  },
  {
    n: 6, phase: 'Phase Prototype', title: 'Prototyper et publier rapidement',
    desc: "L'agent Front-end génère un prototype fonctionnel à partir des specs et des maquettes. Le code est poussé sur GitHub, déployé automatiquement sur Vercel. L'URL de preview est partagée en quelques minutes — pas quelques jours.",
    callout: { cls: 'c-rule', icon: '🚀', title: 'Prototype-first, pas prototype-last', text: "Le prototype n'est plus une phase de validation finale. C'est l'outil central de la conversation avec les utilisateurs, les parties prenantes et l'équipe technique dès la deuxième journée du sprint." },
    tags: ['⚡ Prototype déployé Vercel', '🐙 Repository GitHub', '🔗 URL preview partageable'],
  },
  {
    n: 7, phase: 'Phase Apprentissage', title: 'Tester, apprendre et rétro-documenter',
    desc: "Les tests utilisateurs sont conduits sur le prototype déployé. L'IA analyse les sessions, extrait les insights atomiques, identifie les patterns comportementaux et génère une restitution structurée. Les apprentissages alimentent immédiatement le backlog et la documentation vivante.",
    tags: ['📊 Restitution tests augmentée', '💡 Insights atomiques', '📌 Backlog mis à jour', '📖 Documentation vivante enrichie'],
  },
]

function PlaybookBox() {
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-lg)', margin: 'var(--sp-md) 0' }}>
      <h4 style={{ marginBottom: 'var(--sp-sm)', fontSize: '.95rem' }}>📋 Structure du Playbook Projet (Markdown)</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 'var(--sp-sm)' }}>
        {playbookCols.map((col) => (
          <div key={col.title}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: col.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
              {col.items.map((it) => (
                <li key={it} style={{ fontSize: '.83rem', color: 'var(--text-secondary)' }}>▸ {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Recette() {
  return (
    <Section id="recette" variant="warm">
      <SectionHeader label="La recette packagée" title="7 étapes, 7 livrables">
        Chaque étape a un objectif précis, un agent dédié et produit un livrable
        tangible. Aucune étape ne se termine sans un artefact concret.
      </SectionHeader>

      <div className="stepper">
        {steps.map((s) => (
          <Reveal as="div" key={s.n} className="step">
            <div className="step-num-wrap">
              <div className="step-num-box"><span className="step-n">{s.n}</span></div>
            </div>
            <div className="step-body">
              <div className="step-phase">{s.phase}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
              {s.prompt && <PromptBlock label={s.prompt.label}>{s.prompt.text}</PromptBlock>}
              {s.playbook && <PlaybookBox />}
              {s.callout && (
                <div className={`callout ${s.callout.cls}`} style={{ margin: 'var(--sp-md) 0' }}>
                  <span className="c-icon">{s.callout.icon}</span>
                  <div>
                    <div className="c-title">{s.callout.title}</div>
                    <div className="c-text">{s.callout.text}</div>
                  </div>
                </div>
              )}
              <div className="step-tags">
                {s.tags.map((t) => <span className="stag" key={t}>{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
