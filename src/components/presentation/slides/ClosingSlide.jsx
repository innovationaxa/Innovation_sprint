import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

export function ClosingSlide() {
  return (
    <div className="slide centered">
      <div className="slide-body" style={{ justifyContent: 'center' }}>
        <motion.div className="slide-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Message Board Innovation
        </motion.div>
        <motion.h2 className="slide-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} style={{ maxWidth: '24ch' }}>
          La connaissance dispersée est votre actif le plus sous-exploité
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
            fontSize: 24, color: 'rgba(255,255,255,.9)', maxWidth: '58ch',
            marginTop: 26, lineHeight: 1.5,
          }}
        >
          « C'est la décision de travailler autrement avec l'IA — en lui donnant le
          bon contexte, les bons rôles et les bons garde-fous — qui fera la
          différence entre une équipe qui parle d'IA et une équipe qui exécute avec
          l'IA. »
        </motion.blockquote>
      </div>
      <AxaLogo />
    </div>
  )
}
