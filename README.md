# AI for IT — Playbook

Migration du playbook HTML single-file vers une web app React moderne et immersive, déployable sur Vercel.

**Stack :** React 18 · Vite 6 · Tailwind CSS v4 · Framer Motion 11

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production -> dist/
npm run preview  # prévisualise le build
```

## Architecture

```
src/
├── App.jsx                 # shell: nav + sections + mode présentation + toast
├── data/sections.jsx       # SOURCE UNIQUE: ordre, ancres, nav, deck présentation
├── hooks/                  # scrollSpy, keyboardNav, reducedMotion, copyToClipboard
├── components/
│   ├── layout/             # StickyNav, ProgressBar, SectionShell, ThemeToggle
│   ├── ui/                 # Reveal, Toast, PromptBlock, VideoEmbed, LoopDiagram
│   ├── presentation/       # PresentationMode (fullscreen, clavier), SlideControls
│   └── sections/           # 1 composant par section (x15)
└── styles/index.css        # Tailwind v4, dark mode, tokens
```

### Principes
- **`data/sections.jsx` pilote tout** : nav sticky, scroll-spy et mode présentation lisent la même liste. Pas de duplication.
- **Une section = un composant**, enveloppé par `SectionShell` (reveal au scroll).
- **Mode présentation** réutilise le registre de sections en plein écran (← → / espace / Esc).
- Animations centralisées + respect de `prefers-reduced-motion`.
- Vidéos en lazy-façade (clic pour charger l'iframe Loom/YouTube).

## État

- [x] Scaffold Vite + React + Tailwind + Framer Motion
- [x] Infrastructure : nav, scroll-spy, progress, dark mode, présentation, toast, prompt blocks, vidéos, loop diagrams
- [ ] Migration du contenu réel des 15 sections (en attente du `index.html` source)
- [ ] Déploiement Vercel

## Déploiement Vercel

`vercel.json` est préconfiguré (framework Vite, SPA rewrites). Connecter le repo à Vercel
déclenche un déploiement auto à chaque push.
