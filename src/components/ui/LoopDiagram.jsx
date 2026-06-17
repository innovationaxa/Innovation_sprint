import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Animated circular loop diagram. Data-driven: pass `steps` (labels) and it
// lays them around a circle with an animated rotating arc connecting them.
// Used for the 6 AI Squad loops.
export function LoopDiagram({ steps = [], label, size = 280 }) {
  const reduced = useReducedMotion()
  const r = size / 2
  const ringR = r - 44
  const n = steps.length || 1

  return (
    <div className="my-6 flex flex-col items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="overflow-visible"
        role="img"
        aria-label={label ?? 'Boucle'}
      >
        {/* base ring */}
        <circle
          cx={r}
          cy={r}
          r={ringR}
          fill="none"
          className="stroke-black/10 dark:stroke-white/10"
          strokeWidth="2"
        />
        {/* animated rotating arc */}
        <motion.circle
          cx={r}
          cy={r}
          r={ringR}
          fill="none"
          className="stroke-accent"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * ringR * 0.18} ${2 * Math.PI * ringR}`}
          style={{ originX: '50%', originY: '50%' }}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={
            reduced
              ? undefined
              : { duration: 8, repeat: Infinity, ease: 'linear' }
          }
        />
        {steps.map((step, i) => {
          const angle = (i / n) * 2 * Math.PI - Math.PI / 2
          const x = r + ringR * Math.cos(angle)
          const y = r + ringR * Math.sin(angle)
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                className="fill-accent"
                initial={reduced ? false : { scale: 0 }}
                whileInView={reduced ? undefined : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              />
              <text
                x={x}
                y={y}
                dy={y < r ? -16 : 24}
                textAnchor="middle"
                className="fill-current text-[11px] font-medium"
              >
                {step}
              </text>
            </g>
          )
        })}
      </svg>
      {label && (
        <p className="mt-1 text-sm font-medium opacity-70">{label}</p>
      )}
    </div>
  )
}
