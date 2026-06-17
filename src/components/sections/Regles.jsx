import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const regles = [
  {
    num: 'Règle 01',
    title: "Ne jamais commencer par l'outil",
    text: "L'outil sert la démarche. Commencer par définir clairement le problème à résoudre et la valeur à créer. L'IA vient ensuite, comme amplificateur — jamais comme justification du projet.",
  },
  {
    num: 'Règle 02',
    title: 'Ne pas confondre vitesse et précipitation',
    text: "L'IA permet d'aller plus vite. Cela ne dispense pas de penser. Les raccourcis sur le cadrage ou la compréhension des utilisateurs se paient toujours — même avec l'IA.",
  },
  {
    num: 'Règle 03',
    title: 'Toujours produire un objet tangible',
    text: 'Chaque étape, chaque demi-journée de sprint produit quelque chose de concret. Pas de "on a travaillé sur..." sans artefact livrable et partageable à la fin.',
  },
  {
    num: 'Règle 04',
    title: "Garder l'humain dans l'arbitrage",
    text: "L'IA propose, structure et génère. L'humain décide, priorise et assume. Aucune décision stratégique ne doit être déléguée à l'IA sans validation explicite de l'équipe.",
  },
  {
    num: 'Règle 05',
    title: 'Documenter en continu',
    text: "La documentation n'est pas une tâche de fin de sprint. Elle est produite au fil de l'eau par les agents. À tout moment, elle reflète l'état actuel du produit — pas celui d'il y a trois semaines.",
  },
  {
    num: 'Règle 06',
    title: 'Connecter vision, prototype et backlog',
    text: "La vision stratégique, le prototype fonctionnel et le backlog opérationnel doivent être cohérents et synchronisés. Leur déconnexion est le premier signe d'un sprint qui dérive.",
  },
]

export function Regles() {
  return (
    <Section id="regles">
      <SectionHeader label="Principes fondateurs" title="Les règles d'or">
        Six règles qui distinguent un sprint AI-first réussi d'une démonstration technologique
        sans lendemain.
      </SectionHeader>

      <div className="rules-grid">
        {regles.map((r, i) => (
          <Reveal as="div" delay={i * 0.05} className="rule-card" key={r.num}>
            <div className="r-num">{r.num}</div>
            <div className="r-title">{r.title}</div>
            <p className="r-text">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
