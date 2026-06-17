import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

const lines = [
  '« Hey Claude, créé des skills pour nos personas cibles. »',
  '« Lance une session de tests utilisateurs »',
  '« Produit une synthèse avec des recos »',
  '« Mets à jour la documentation. »',
]

export function IntroBuildAnywhere() {
  return (
    <div className="slide centered">
      <motion.div className="slide-kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Agentic Era
      </motion.div>
      <motion.h2 className="slide-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}>
        Build from anywhere
      </motion.h2>
      <motion.p className="slide-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
        The interface is no longer code. It's language.
      </motion.p>

      <motion.div
        className="media-frame"
        style={{ marginTop: 26, width: 560 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Provide public/media/build-from-anywhere.mp4 (H.264) for full browser
            support; the .mov is a Safari-only fallback. */}
        <video autoPlay muted loop playsInline poster="">
          <source src="/media/build-from-anywhere.mp4" type="video/mp4" />
          <source src="/media/build-from-anywhere.mov" type="video/quicktime" />
        </video>
      </motion.div>

      <motion.div className="media-caption lines" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </motion.div>
      <AxaLogo />
    </div>
  )
}
