import { TitleSlide } from '../components/presentation/slides/TitleSlide'
import { IntroAbondance } from '../components/presentation/slides/IntroAbondance'
import { IntroOrchestrating } from '../components/presentation/slides/IntroOrchestrating'
import { IntroBuildAnywhere } from '../components/presentation/slides/IntroBuildAnywhere'
import { ClosingSlide } from '../components/presentation/slides/ClosingSlide'
import { ContentSlide } from '../components/presentation/slides/ContentSlide'

// Curated condensed slides for the 15 content chapters — keynote essentials,
// designed to fit the 1280x720 canvas (no scroll).
const content = [
  {
    id: 'paradigme', navTitle: 'Paradigme', kicker: 'Le changement de paradigme',
    title: 'Avant → Maintenant', layout: 'split',
    left: { badge: 'Avant', title: 'Design Sprint', points: [
      'Connaissance dispersée dans slides & e-mails',
      'Prototypage artisanal, compétences rares',
      'Documentation produite en fin de sprint',
      'Feedback loop : des semaines',
    ] },
    right: { badge: 'Maintenant', title: 'AI-First Delivery Sprint', points: [
      'Base de connaissance structurée & interrogeable',
      'Prototypage assisté par agents spécialisés',
      'Documentation vivante, maintenue en continu',
      'Boucle accélérée : des jours',
    ] },
  },
  {
    id: 'ingredients', navTitle: 'Ingrédients', kicker: 'Les nouveaux ingrédients',
    title: 'Ce qui change vraiment', titleSm: true, layout: 'grid', cols: 4,
    cards: [
      { icon: '🗂️', title: 'Base de connaissance' },
      { icon: '🧠', title: 'Workshops augmentés' },
      { icon: '🤖', title: 'Agents spécialisés' },
      { icon: '🔌', title: 'Connecteurs delivery' },
      { icon: '⚡', title: 'Chaîne prototype-first' },
      { icon: '📖', title: 'Documentation vivante' },
      { icon: '👤', title: 'Tests augmentés' },
    ],
  },
  {
    id: 'agents', navTitle: 'Agents', kicker: 'Focus agents spécialisés',
    title: 'Agents, skills & plugins', titleSm: true, layout: 'grid', cols: 3,
    cards: [
      { icon: '🎯', title: 'Agent PM', text: 'Vision & stratégie' },
      { icon: '📋', title: 'Agent PO', text: 'Backlog & user stories' },
      { icon: '🔍', title: 'UX Research', text: 'Insights & verbatims' },
      { icon: '🎨', title: 'Product Designer', text: 'Parcours & maquettes' },
      { icon: '💻', title: 'Front-end', text: 'Composants & prototype' },
      { icon: '📄', title: 'Agent PRD', text: 'Blueprint produit' },
      { icon: '📚', title: 'Documentation', text: 'Specs & changelog' },
      { icon: '🔬', title: 'Agent QA', text: "Tests & critères d'acceptance" },
      { icon: '📊', title: 'Agent Backlog', text: 'Priorisation & dépendances' },
    ],
  },
  {
    id: 'stack', navTitle: 'Stack', kicker: 'Stack & connecteurs',
    title: 'La boucle delivery connectée', titleSm: true, layout: 'flow',
    lead: 'Une boucle fermée où chaque étape alimente automatiquement la suivante.',
    nodes: [
      { icon: '🗂️', label: 'Workshop' }, { icon: '🧠', label: 'Analyse IA' },
      { icon: '📄', label: 'PRD' }, { icon: '📌', label: 'Tickets' },
      { icon: '⚡', label: 'Prototype' }, { icon: '🐙', label: 'GitHub' },
      { icon: '▲', label: 'Vercel' }, { icon: '👤', label: 'Tests' },
      { icon: '🔄', label: 'MAJ specs' },
    ],
  },
  {
    id: 'realdataproto', navTitle: 'Real Data', kicker: 'Axe complémentaire clé',
    title: 'Real Data Prototype', layout: 'split',
    left: { badge: 'Prototype classique', title: 'Fake it until you make it', points: [
      'Données fictives figées dans les maquettes',
      'Interactions simulées manuellement',
      'Tests biaisés par l\'effet "prototype évident"',
      'Décisions basées sur des réactions à du faux',
    ] },
    right: { badge: 'Real Data Prototype', title: 'LLM injecté dans le prototype', points: [
      'Modèle de langage branché dans le prototype',
      'Comportements crédibles et dynamiques',
      'Expérience testable très tôt, quasi-réelle',
      'Décisions sur des interactions authentiques',
    ] },
  },
  {
    id: 'recette', navTitle: 'Recette', kicker: 'La recette packagée',
    title: '7 étapes, 7 livrables', layout: 'steps', cols: 4,
    steps: [
      { n: '1', phase: 'Cadrage', title: 'Cadrer le défi & la base de connaissance' },
      { n: '2', phase: 'Alignement', title: 'Workshop augmenté' },
      { n: '3', phase: 'Compréhension', title: 'Besoins & moments de vie' },
      { n: '4', phase: 'Conception', title: 'Parcours client + agent' },
      { n: '5', phase: 'Socle produit', title: 'PRD & backlog générés' },
      { n: '6', phase: 'Prototype', title: 'Prototyper & publier' },
      { n: '7', phase: 'Apprentissage', title: 'Tester & rétro-documenter' },
    ],
  },
  {
    id: 'tests', navTitle: 'Tests', kicker: 'Module tests utilisateurs',
    title: 'Tests utilisateurs augmentés', titleSm: true, layout: 'steps', cols: 4,
    steps: [
      { n: '1', title: 'Cadrage augmenté' },
      { n: '2', title: "Guide d'entretien IA-first" },
      { n: '3', title: 'Conduite IA-enabled' },
      { n: '4', title: 'Restitution augmentée' },
      { n: '5', title: 'Atomic Research' },
      { n: '6', title: 'Analyse B / H / E' },
      { n: '7', title: 'Heuristique UX Boucher' },
      { n: '8', title: 'Injection dans la discovery' },
    ],
  },
  {
    id: 'livrables', navTitle: 'Livrables', kicker: 'Livrables standards',
    title: 'Ce que le sprint produit', titleSm: true, layout: 'grid', cols: 3,
    cards: [
      { icon: '🎯', title: 'Cadrage', text: 'Playbook projet, hypothèses, KPI' },
      { icon: '👤', title: 'Client & Expérience', text: 'Personas, insights, parcours' },
      { icon: '📦', title: 'Produit', text: 'PRD, user stories, backlog' },
      { icon: '⚙️', title: 'Technique & Exécution', text: 'Prototype, repo, déploiement' },
      { icon: '📚', title: 'Apprentissage', text: 'Restitution tests, doc vivante' },
    ],
  },
  {
    id: 'retrodoc', navTitle: 'Rétro-doc', kicker: 'Capacité complémentaire',
    title: 'Rétro-documentation', titleSm: true, layout: 'grid', cols: 4,
    lead: "Générer une documentation complète à partir d'un prototype existant — même sans accès au code.",
    cards: [
      { icon: '🔍', title: 'Identifier les composants UI' },
      { icon: '🗺️', title: 'Reconstituer les flows' },
      { icon: '📄', title: 'Documenter les comportements' },
      { icon: '💡', title: 'Expliciter les intentions UX' },
    ],
  },
  {
    id: 'docfirst', navTitle: 'Doc IA-first', kicker: 'Format de référence',
    title: 'Le Markdown comme standard', titleSm: true, layout: 'split',
    left: { badge: 'PowerPoint / Word', title: 'Le format qui freine l\'IA', points: [
      'Format binaire, opaque pour l\'IA',
      'Difficile à diff & versionner',
      'Mises à jour manuelles, vite obsolètes',
    ] },
    right: { badge: 'Markdown', title: 'Le format IA-native', points: [
      'Lisible & généré nativement par les agents',
      'Versioning Git intégré, diffable',
      'Mis à jour automatiquement en continu',
    ] },
  },
  {
    id: 'voix', navTitle: 'Voix', kicker: 'Nouveauté',
    title: 'La voix comme input de delivery', titleSm: true, layout: 'flow',
    lead: 'Chaque échange oral devient une matière exploitable — specs, tickets, mises à jour.',
    nodes: [
      { icon: '🎙️', label: 'Workshop capturé' }, { icon: '📝', label: 'Transcript IA' },
      { icon: '📋', label: 'Synthèse' }, { icon: '📄', label: 'Specs MAJ' },
      { icon: '📌', label: 'Tickets' }, { icon: '🤖', label: 'Agents IA' },
      { icon: '🚀', label: 'Prototype' }, { icon: '👤', label: 'Tests' },
    ],
  },
  {
    id: 'boucles', navTitle: '6 boucles', kicker: 'Vision end-to-end',
    title: "Les 6 boucles d'une AI Squad", titleSm: true, layout: 'steps', cols: 3,
    steps: [
      { n: '1', title: 'Research to Brief' },
      { n: '2', title: 'Brief to Concept' },
      { n: '3', title: 'Concept to Prototype' },
      { n: '4', title: 'Prototype to Plan', hi: true },
      { n: '5', title: 'Build to Verify', hi: true },
      { n: '6', title: 'Launch to Learn' },
    ],
  },
  {
    id: 'roles', navTitle: 'Rôles', kicker: 'Rôles & responsabilités',
    title: 'Humains vs agents IA', layout: 'table',
    headers: ['Activité', 'Rôle humain', 'Rôle agent IA'],
    rows: [
      { a: 'Cadrage stratégique', h: 'Décide des hypothèses & priorités', ai: 'Structure la connaissance, identifie les gaps' },
      { a: 'Animation workshop', h: 'Facilite, gère la dynamique', ai: 'Notes structurées, synthèses, HMW' },
      { a: 'Entretiens utilisateurs', h: 'Conduit, crée le lien, capte le non-verbal', ai: 'Note, transcrit, repère les patterns' },
      { a: 'Design produit', h: 'Décisions esthétiques & stratégiques', ai: 'Propose des parcours, itère les maquettes' },
      { a: 'Prototypage', h: "Définit l'objectif, valide la direction", ai: 'Génère le code, déploie, propose des alternatives' },
      { a: 'Décision finale', h: "Toujours humain — l'IA ne décide pas", ai: 'Fournit les éléments, modélise les conséquences' },
    ],
  },
  {
    id: 'regles', navTitle: "Règles d'or", kicker: 'Principes fondateurs',
    title: "Les règles d'or", layout: 'steps', cols: 3,
    steps: [
      { n: '01', title: "Ne jamais commencer par l'outil" },
      { n: '02', title: 'Ne pas confondre vitesse et précipitation' },
      { n: '03', title: 'Toujours produire un objet tangible' },
      { n: '04', title: "Garder l'humain dans l'arbitrage" },
      { n: '05', title: 'Documenter en continu' },
      { n: '06', title: 'Connecter vision, prototype et backlog' },
    ],
  },
  {
    id: 'benefices', navTitle: 'Bénéfices', kicker: 'Bénéfices attendus',
    title: 'Ce que ça change concrètement', titleSm: true, layout: 'cats',
    cats: [
      { cat: 'Innovation', items: ['Exploration plus large, plus vite', 'Idées testées dès J+2', 'Capitalisation continue'] },
      { cat: 'Delivery', items: ['Time-to-prototype −70%', 'PRD synchronisé au code', 'Backlog connecté à la vision'] },
      { cat: 'Organisation', items: ['Montée en compétence via les agents', 'Réduction des silos', 'Pratiques standardisées'] },
      { cat: 'Board Innovation', items: ['Prototypes démontrables à chaque revue', 'Traçabilité complète', 'On montre, on ne raconte plus'] },
    ],
  },
]

// Full presentation deck: opening + cinematic intro + curated chapters + closing.
export const deck = [
  { id: 'title', label: 'AI-First Delivery Sprint', el: <TitleSlide /> },
  { id: 'intro-abondance', label: 'L\'intelligence abondante', el: <IntroAbondance /> },
  { id: 'intro-orchestrating', label: 'From coding to orchestrating', el: <IntroOrchestrating /> },
  { id: 'intro-build', label: 'Build from anywhere', el: <IntroBuildAnywhere /> },
  ...content.map((c) => ({ id: c.id, label: c.navTitle, el: <ContentSlide slide={c} /> })),
  { id: 'closing', label: 'Conclusion', el: <ClosingSlide /> },
]
