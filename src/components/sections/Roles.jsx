import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'

const rows = [
  {
    act: 'Cadrage stratégique',
    h: 'Décide des hypothèses, fixe les priorités, arbitre les contraintes',
    ai: 'Structure la connaissance, propose des angles, identifie les gaps',
  },
  {
    act: 'Animation workshop',
    h: 'Facilite, observe, gère la dynamique de groupe',
    ai: 'Prend des notes structurées, propose des synthèses, génère des HMW',
  },
  {
    act: 'Entretiens utilisateurs',
    h: "Conduit l'entretien, crée le lien de confiance, capte le non-verbal",
    ai: 'Note, transcrit, identifie les patterns émergents entre sessions',
  },
  {
    act: 'Design produit',
    h: 'Prend les décisions esthétiques et stratégiques de design',
    ai: 'Génère des propositions de parcours, itère les maquettes, propose des variantes',
  },
  {
    act: 'Rédaction PRD',
    h: 'Valide les specs, arbitre les ambiguïtés, approuve le livrable',
    ai: 'Rédige, structure, maintient à jour, vérifie la cohérence interne',
  },
  {
    act: 'Prototypage',
    h: "Définit l'objectif du prototype, valide la direction technique",
    ai: "Génère le code, déploie, propose des alternatives d'implémentation",
  },
  {
    act: 'Analyse des tests',
    h: "Interprète les insights, décide des priorités d'amélioration",
    ai: 'Synthétise les verbatims, catégorise, atomise, identifie les patterns',
  },
  {
    act: 'Décision finale',
    h: <strong>Toujours humain — l'IA ne décide pas</strong>,
    ai: 'Fournit les éléments pour décider, modélise les conséquences possibles',
  },
]

export function Roles() {
  return (
    <Section id="roles" variant="alt">
      <SectionHeader label="Rôles & responsabilités" title="Humains vs agents IA">
        L'IA augmente les capacités de l'équipe. Elle ne remplace pas le jugement,
        l'empathie et la décision stratégique — qui restent irréductiblement humains.
      </SectionHeader>

      <Reveal>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Activité</th>
                <th>Rôle humain</th>
                <th>Rôle agent IA</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.act}>
                  <td><strong>{r.act}</strong></td>
                  <td className="td-h">{r.h}</td>
                  <td className="td-ai">{r.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <div className="hbox">
          <p>
            💡 <strong>Principe directeur :</strong> L'IA est le meilleur assistant
            qu'une équipe produit puisse avoir — infatigable, exhaustif, structuré,
            disponible 24/7. Mais l'équipe reste le chef d'orchestre. La valeur de
            l'AI-First Sprint tient précisément à cette combinaison : la puissance
            computationnelle de l'IA au service du jugement humain.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
