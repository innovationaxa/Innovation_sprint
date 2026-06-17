import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Scroll-triggered reveal primitive. Fades + slides children into view once,
// and degrades to an instant render when reduced-motion is requested.
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className,
  ...props
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  if (reduced) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
