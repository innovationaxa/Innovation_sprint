import { TitleSlide } from '../components/presentation/slides/TitleSlide'
import { IntroAbondance } from '../components/presentation/slides/IntroAbondance'
import { IntroOrchestrating } from '../components/presentation/slides/IntroOrchestrating'
import { IntroBuildAnywhere } from '../components/presentation/slides/IntroBuildAnywhere'
import { ClosingSlide } from '../components/presentation/slides/ClosingSlide'
import { sections } from './sections.jsx'

// Presentation deck:
//  - cinematic opener + 3 intro slides (with media/videos)
//  - the 15 real editorial sections (same content & style as the site,
//    reorganised to fit via carousels; scroll tolerated when dense)
//  - cinematic closing
export const deck = [
  { id: 'title', type: 'cinematic', label: 'AI-First Delivery Sprint', el: <TitleSlide /> },
  { id: 'intro-abondance', type: 'cinematic', label: "L'intelligence abondante", el: <IntroAbondance /> },
  { id: 'intro-orchestrating', type: 'cinematic', label: 'From coding to orchestrating', el: <IntroOrchestrating /> },
  { id: 'intro-build', type: 'cinematic', label: 'Build from anywhere', el: <IntroBuildAnywhere /> },
  ...sections.map((s) => ({ id: s.id, type: 'doc', label: s.navTitle, Component: s.Component })),
  { id: 'closing', type: 'cinematic', label: 'Conclusion', el: <ClosingSlide /> },
]
