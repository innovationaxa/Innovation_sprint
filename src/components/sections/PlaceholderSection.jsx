import { SectionShell } from '../layout/SectionShell'

// Temporary stand-in used until each section's real content is migrated from
// the source HTML playbook. One real component will replace it per section.
export function makePlaceholder({ id, kicker, title }) {
  function Section() {
    return (
      <SectionShell id={id} kicker={kicker} title={title}>
        <p className="text-lg opacity-70">
          Contenu à migrer depuis le playbook source.
        </p>
      </SectionShell>
    )
  }
  function Slide() {
    return (
      <p className="text-xl opacity-70">Contenu à migrer.</p>
    )
  }
  return { Component: Section, Slide }
}
