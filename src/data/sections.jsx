import { Paradigme } from '../components/sections/Paradigme'
import { Ingredients } from '../components/sections/Ingredients'
import { Agents } from '../components/sections/Agents'
import { Stack } from '../components/sections/Stack'
import { RealDataProto } from '../components/sections/RealDataProto'
import { Recette } from '../components/sections/Recette'
import { Tests } from '../components/sections/Tests'
import { Livrables } from '../components/sections/Livrables'
import { RetroDoc } from '../components/sections/RetroDoc'
import { DocFirst } from '../components/sections/DocFirst'
import { Voix } from '../components/sections/Voix'
import { Boucles } from '../components/sections/Boucles'
import { Roles } from '../components/sections/Roles'
import { Regles } from '../components/sections/Regles'
import { Benefices } from '../components/sections/Benefices'

// SINGLE SOURCE OF TRUTH for section ordering, nav labels, anchors and the
// presentation deck. Each `Component` renders both the scroll view and the
// fullscreen presentation slide. Hero and Conclusion are rendered separately
// in App; this list is the 15 navigable content sections.
export const sections = [
  { id: 'paradigme', navTitle: 'Paradigme', kicker: 'Le changement de paradigme', title: 'Avant → Maintenant', Component: Paradigme },
  { id: 'ingredients', navTitle: 'Ingrédients', kicker: 'Les nouveaux ingrédients', title: 'Ce qui change vraiment dans la recette', Component: Ingredients },
  { id: 'agents', navTitle: 'Agents', kicker: 'Focus agents spécialisés', title: 'Agents, skills et plugins', Component: Agents },
  { id: 'stack', navTitle: 'Stack', kicker: 'Stack technique & connecteurs', title: 'La boucle delivery connectée', Component: Stack },
  { id: 'realdataproto', navTitle: 'Real Data', kicker: 'Axe complémentaire clé', title: 'Real Data Prototype', Component: RealDataProto },
  { id: 'recette', navTitle: 'Recette', kicker: 'La recette packagée', title: '7 étapes, 7 livrables', Component: Recette },
  { id: 'tests', navTitle: 'Tests', kicker: 'Module tests utilisateurs', title: 'Tests utilisateurs augmentés par IA', Component: Tests },
  { id: 'livrables', navTitle: 'Livrables', kicker: 'Livrables standards', title: 'Ce que le sprint produit concrètement', Component: Livrables },
  { id: 'retrodoc', navTitle: 'Rétro-doc', kicker: 'Capacité complémentaire', title: 'Rétro-documentation & compréhension produit', Component: RetroDoc },
  { id: 'docfirst', navTitle: 'Doc IA-first', kicker: 'Format de référence', title: 'Documentation IA-first : le Markdown comme standard', Component: DocFirst },
  { id: 'voix', navTitle: 'Voix', kicker: 'Nouveauté', title: 'La voix comme input de delivery', Component: Voix },
  { id: 'boucles', navTitle: '6 boucles', kicker: 'Vision end-to-end', title: "Les 6 boucles d'une AI Squad", Component: Boucles },
  { id: 'roles', navTitle: 'Rôles', kicker: 'Rôles & responsabilités', title: 'Humains vs agents IA', Component: Roles },
  { id: 'regles', navTitle: "Règles d'or", kicker: 'Principes fondateurs', title: "Les règles d'or", Component: Regles },
  { id: 'benefices', navTitle: 'Bénéfices', kicker: 'Bénéfices attendus', title: 'Ce que cette démarche change concrètement', Component: Benefices },
]
