import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

const stats = [
  { v: '3×', l: 'de la connaissance au prototype testable' },
  { v: '7', l: 'étapes structurées, 7 livrables tangibles' },
  { v: '∞', l: 'capitalisation continue, sprint après sprint' },
]

export function TitleSlide() {
  return (
    <div className="slide">
      <div className="slide-body" style={{ justifyContent: 'center' }}>
        <motion.div className="slide-hero-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Playbook · Innovation Board
        </motion.div>
        <motion.h1 className="slide-title mega" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.6 }}>
          AI-First<br />
          <span className="accent">Delivery Sprint</span>
        </motion.h1>
        <motion.p className="slide-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.5 }} style={{ maxWidth: '52ch' }}>
          De la connaissance dispersée à une vision produit testable, documentée et
          exécutable — en réduisant radicalement le temps entre l'idée et le
          prototype livrable.
        </motion.p>
        <motion.div className="slide-stats" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.5 }}>
          {stats.map((s) => (
            <div className="slide-stat" key={s.v}>
              <div className="slide-stat-v">{s.v}</div>
              <div className="slide-stat-l">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <AxaLogo />
    </div>
  )
}
