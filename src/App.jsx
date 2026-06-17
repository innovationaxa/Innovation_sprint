// App shell — wires together navigation, sections and the presentation mode.
// Section content is migrated from the source HTML playbook (see src/data/sections.js).
export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">AI for IT — Playbook</h1>
      <p className="mt-4 text-lg opacity-70">
        Scaffold prêt. La migration du contenu démarre dès réception du fichier source.
      </p>
    </main>
  )
}
