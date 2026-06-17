import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

export function IntroOrchestrating() {
  return (
    <div className="slide centered">
      <motion.div className="slide-kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Agentic Era
      </motion.div>
      <motion.h2 className="slide-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}>
        From coding to orchestrating
      </motion.h2>
      <motion.p className="slide-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
        The moment you realize execution is no longer the constraint.
      </motion.p>

      <motion.div
        className="media-frame"
        style={{ marginTop: 30, width: 620 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <video src="/media/orchestrating.mp4" autoPlay muted loop playsInline />
      </motion.div>

      <motion.div className="media-caption" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
        « Me prompting Claude at 2am »
      </motion.div>
      <AxaLogo />
    </div>
  )
}
