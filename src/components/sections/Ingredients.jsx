import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const cards = [
  { bar: 'bar-blue', ic: 'ic-blue', icon: '🗂️', title: 'Base de connaissance projet', text: 'Tout ce qui est su sur le domaine, les utilisateurs, la concurrence, les contraintes techniques et réglementaires est structuré, indexé et interrogeable par les agents. La connaissance cesse d\'être tacite.' },
  { bar: 'bar-indigo', ic: 'ic-indigo', icon: '🧠', title: 'Workshops augmentés', text: 'Les sessions de travail collectif sont transformées : l\'IA prend des notes structurées, propose des synthèses en temps réel, génère des axes de design et reformule les problèmes avec une précision que le groupe seul ne peut atteindre.' },
  { bar: 'bar-violet', ic: 'ic-violet', icon: '🤖', title: 'Agents spécialisés', text: 'PM, PO, UX Researcher, Product Designer, Front-end, PRD Writer, QA — chaque rôle dispose d\'un agent configuré avec les bons skills, les bonnes instructions et les bons accès. Une équipe virtuelle à la demande.' },
  { bar: 'bar-green', ic: 'ic-green', icon: '🔌', title: 'Connecteurs delivery', text: 'Linear, GitHub, Figma, Vercel, FigJam — les outils du delivery sont connectés. L\'IA peut créer des tickets, pousser du code, publier un prototype et mettre à jour la documentation sans friction manuelle.' },
  { bar: 'bar-orange', ic: 'ic-orange', icon: '⚡', title: 'Chaîne prototype-first', text: 'Le prototype n\'est plus une phase tardive. Il est généré dès les premières heures du sprint et affiné en continu. Chaque itération est publiée sur Vercel et testable immédiatement par les utilisateurs réels.' },
  { bar: 'bar-blue', ic: 'ic-teal', icon: '📖', title: 'Documentation vivante', text: 'PRD, specs, user stories, changelog — la documentation est générée et maintenue par les agents au fil du sprint. Elle reflète toujours l\'état actuel du produit, pas celui d\'il y a trois semaines.' },
  { bar: 'bar-indigo', ic: 'ic-rose', icon: '👤', title: 'Tests utilisateurs augmentés', text: 'Les entretiens et tests sont préparés, facilités et analysés avec l\'IA. Les verbatims sont découpés en insights atomiques. Les patterns émergent plus vite. La restitution est directement injectable dans le backlog.' },
]

export function Ingredients() {
  return (
    <Section id="ingredients">
      <SectionHeader
        label="Les nouveaux ingrédients"
        title="Ce qui change vraiment dans la recette"
      >
        Sept ingrédients fondamentaux transforment la façon dont les équipes
        cadrent, conçoivent et livrent des produits digitaux.
      </SectionHeader>

      <div className="cards-grid">
        {cards.map((c, i) => (
          <Reveal as="div" key={c.title} delay={i * 0.05} className="card">
            <div className={`card-bar ${c.bar}`} />
            <div className={`card-icon ${c.ic}`}>{c.icon}</div>
            <div className="card-title">{c.title}</div>
            <p className="card-text">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
