import { makePlaceholder } from '../components/sections/PlaceholderSection'

// SINGLE SOURCE OF TRUTH for section ordering, nav labels, anchors and the
// presentation deck. Each entry's `Component` renders the scroll view and
// `Slide` renders the fullscreen presentation variant.
//
// Titles below are PLACEHOLDERS — they will be replaced with the real 15
// sections once the source playbook (index.html) is available in the repo.
const meta = [
  { id: 'intro', kicker: 'Section', navTitle: 'Intro', title: 'Section 01' },
  { id: 'section-02', kicker: 'Section', navTitle: 'Section 02', title: 'Section 02' },
  { id: 'section-03', kicker: 'Section', navTitle: 'Section 03', title: 'Section 03' },
  { id: 'section-04', kicker: 'Section', navTitle: 'Section 04', title: 'Section 04' },
  { id: 'section-05', kicker: 'Section', navTitle: 'Section 05', title: 'Section 05' },
  { id: 'section-06', kicker: 'Section', navTitle: 'Section 06', title: 'Section 06' },
  { id: 'section-07', kicker: 'Section', navTitle: 'Section 07', title: 'Section 07' },
  { id: 'section-08', kicker: 'Section', navTitle: 'Section 08', title: 'Section 08' },
  { id: 'section-09', kicker: 'Section', navTitle: 'Section 09', title: 'Section 09' },
  { id: 'section-10', kicker: 'Section', navTitle: 'Section 10', title: 'Section 10' },
  { id: 'section-11', kicker: 'Section', navTitle: 'Section 11', title: 'Section 11' },
  { id: 'section-12', kicker: 'Section', navTitle: 'Section 12', title: 'Section 12' },
  { id: 'section-13', kicker: 'Section', navTitle: 'Section 13', title: 'Section 13' },
  { id: 'section-14', kicker: 'Section', navTitle: 'Section 14', title: 'Section 14' },
  { id: 'section-15', kicker: 'Section', navTitle: 'Section 15', title: 'Section 15' },
]

export const sections = meta.map((m) => ({ ...m, ...makePlaceholder(m) }))
