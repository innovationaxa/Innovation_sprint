import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { usePresentationMode } from '../presentation/PresentationContext'

// Scroll-triggered reveal primitive. Fades + slides children into view once.
// Degrades to an instant render when reduced-motion is requested OR when shown
// inside the presentation deck (where content must be visible immediately and
// may sit inside a horizontal carousel where whileInView never fires).
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className,
  ...props
}) {
  const reduced = useReducedMotion()
  const presentation = usePresentationMode()
  const MotionTag = motion[as] ?? motion.div

  if (reduced || presentation) {
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
