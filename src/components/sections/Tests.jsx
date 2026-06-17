import { Section, SectionHeader } from './_shared'
import { Reveal } from '../ui/Reveal'
import { CardDeck } from '../ui/CardDeck'

const phases = [
  { n: 1, t: 'Cadrage augmenté', d: "L'IA génère les objectifs de recherche depuis la base de connaissance : besoins non adressés, hypothèses à valider, points de friction pressentis." },
  { n: 2, t: "Guide d'entretien IA-first", d: "Le guide intègre les dimensions Besoins / Habitudes / Émotions et les heuristiques UX d'Amélie Boucher. Questions ouvertes, scénarios et tâches générés et itérés rapidement." },
  { n: 3, t: 'Conduite IA-enabled, humain visible', d: "L'IA prend des notes structurées en temps réel. Le facilitateur reste 100% présent avec l'utilisateur. L'IA est invisible pour le participant — jamais intrusive." },
  { n: 4, t: 'Restitution augmentée', d: 'Synthèse automatique : verbatims clés, patterns comportementaux, moments de friction, moments de satisfaction — structurés par objectif de recherche.' },
  { n: 5, t: 'Atomic Research', d: 'Chaque verbatim est découpé en insight atomique : un fait, une source, une confiance, un lien avec un besoin produit. Capitalisable, recherchable, traçable dans le temps.' },
  { n: 6, t: 'Analyse B / H / E', d: "Les insights sont catégorisés selon trois dimensions : Besoins fonctionnels, Habitudes comportementales, États Émotionnels. Une lecture à 360° de l'expérience utilisateur." },
  { n: 7, t: 'Heuristique UX Boucher', d: 'Les problèmes UX sont qualifiés : utilité, utilisabilité, accessibilité, désirabilité — avec un score de criticité automatique et des recommandations priorisées.' },
  { n: 8, t: 'Injection dans la discovery', d: "Les insights alimentent directement le backlog (tickets Linear), la documentation vivante et la base de connaissance pour les prochains sprints. Zéro perte d'information." },
]

const personas = [
  { icon: '👤', title: 'Génération de personas crédibles', text: "L'IA construit des personas détaillés à partir de la base de connaissance : profil, habitudes, frustrations, déclencheurs décisionnels." },
  { icon: '🎭', title: 'Simulation de réactions utilisateurs', text: 'Chaque persona peut "naviguer" un parcours et produire des réactions, objections et commentaires — comme lors d\'un vrai test.' },
  { icon: '⚡', title: 'Premiers signaux en quelques minutes', text: 'Identifier les défauts évidents, challenger les hypothèses et affiner les parcours avant de mobiliser de vrais utilisateurs.' },
]

export function Tests() {
  return (
    <Section id="tests" variant="alt">
      <SectionHeader
        label="Module tests utilisateurs"
        title="Tests utilisateurs augmentés par IA"
      >
        L'IA transforme chaque phase du processus de test — de la préparation à la
        capitalisation des insights. Le test reste humain ; l'IA amplifie sa portée
        et sa précision.
      </SectionHeader>

      <CardDeck gridClassName="ux-phases" perView={4}>
        {phases.map((p, i) => (
          <Reveal as="div" key={p.n} delay={i * 0.05} className="ux-phase">
            <div className="up-n">{p.n}</div>
            <div className="up-t">{p.t}</div>
            <p className="up-d">{p.d}</p>
          </Reveal>
        ))}
      </CardDeck>

      <Reveal>
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: 'var(--sp-xl)',
            boxShadow: 'var(--shadow-sm)',
            marginTop: 'var(--sp-xl)',
          }}
        >
          <span className="label">Axe complémentaire</span>
          <h3 style={{ marginBottom: 'var(--sp-sm)' }}>
            Personas synthétiques &amp; tests utilisateurs simulés
          </h3>
          <p style={{ fontSize: '.92rem', marginBottom: 'var(--sp-lg)' }}>
            L'IA permet de créer des correspondants synthétiques représentant des
            utilisateurs cibles — et de simuler leurs réactions sur un parcours avant
            même de recruter de vrais testeurs.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))',
              gap: 'var(--sp-sm)',
              marginBottom: 'var(--sp-lg)',
            }}
          >
            {personas.map((p) => (
              <div
                key={p.title}
                style={{ background: 'var(--bg)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-md)' }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{p.icon}</div>
                <div
                  style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: '.3rem' }}
                >
                  {p.title}
                </div>
                <p style={{ fontSize: '.83rem', color: 'var(--text-secondary)' }}>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="callout c-warn" style={{ margin: 0 }}>
            <span className="c-icon">⚠️</span>
            <div>
              <div className="c-title">Cette approche ne remplace pas les tests réels</div>
              <div className="c-text">
                Les personas synthétiques sont un accélérateur de pré-validation, pas
                un substitut. Ils révèlent souvent des problèmes UX non anticipés et
                réduisent le nombre d'itérations nécessaires avec de vrais utilisateurs
                — mais la validation finale reste humaine, toujours.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="callout c-warn" style={{ marginTop: 'var(--sp-xl)' }}>
          <span className="c-icon">⚠️</span>
          <div>
            <div className="c-title">Points de vigilance — Tests augmentés</div>
            <div className="c-text">
              Ne jamais remplacer la présence humaine par l'IA pendant les tests.
              L'empathie, les silences, le non-verbal — l'IA ne peut pas les capter.
              L'IA analyse ; l'humain comprend. Toujours valider les insights IA avec
              au moins un regard humain avant d'agir sur les priorités produit.
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
