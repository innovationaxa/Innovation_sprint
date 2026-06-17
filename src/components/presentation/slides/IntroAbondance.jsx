import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

export function IntroAbondance() {
  return (
    <div className="slide">
      <div className="intro-grid">
        <div>
          <motion.div className="slide-kicker" variants={rise} initial="hidden" animate="show" custom={0}>
            1. Build without limits
          </motion.div>
          <motion.div variants={rise} initial="hidden" animate="show" custom={1} style={{ fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,.85)', marginBottom: 14 }}>
            REASON LONGER. <span style={{ color: '#fff' }}>BUILD BIGGER.</span>
          </motion.div>
          <motion.h2 className="slide-title" variants={rise} initial="hidden" animate="show" custom={2}>
            L'intelligence devient abondante
          </motion.h2>
          <motion.div className="intro-lines" variants={rise} initial="hidden" animate="show" custom={3}>
            <p className="muted">Les nouveaux modèles ne répondent plus simplement à des questions.</p>
            <p>Ils raisonnent. Ils planifient. Ils exécutent. Ils collaborent.</p>
            <p className="muted">
              Ils travaillent pendant plusieurs minutes voire plusieurs heures{' '}
              <strong style={{ color: '#fff' }}>sur un objectif complexe</strong>.
            </p>
          </motion.div>
        </div>

        <div className="intro-stack">
          <motion.div className="intro-shot" variants={rise} initial="hidden" animate="show" custom={2}>
            <img src="/media/model-intelligence.png" alt="Sélecteur d'intelligence" style={{ maxHeight: 172, objectFit: 'contain' }} />
          </motion.div>
          <motion.div className="intro-bubble" variants={rise} initial="hidden" animate="show" custom={3}>
            Nous ne déléguons plus des tâches.
          </motion.div>
          <motion.div className="intro-shot" variants={rise} initial="hidden" animate="show" custom={4}>
            <img src="/media/model-picker.png" alt="Sélecteur de modèles" style={{ maxHeight: 188, objectFit: 'contain' }} />
          </motion.div>
          <motion.div className="intro-bubble r" variants={rise} initial="hidden" animate="show" custom={5}>
            Nous fixons des objectifs.
          </motion.div>
        </div>
      </div>
      <AxaLogo />
    </div>
  )
}
