import { motion } from 'framer-motion'
import { AxaLogo } from '../AxaLogo'

function Body({ s }) {
  switch (s.layout) {
    case 'bullets':
      return (
        <ul className="cs-bullets">
          {s.points.map((p, i) => (
            <li className="cs-bullet" key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </ul>
      )

    case 'split':
      return (
        <div className="cs-split">
          <Col col={s.left} />
          <div className="cs-arrow">→</div>
          <Col col={s.right} hi />
        </div>
      )

    case 'grid':
      return (
        <div className={`cs-grid c${s.cols || 3}`}>
          {s.cards.map((c, i) => (
            <div className="cs-card" key={i}>
              {c.icon && <span className="cs-card-ic">{c.icon}</span>}
              <div className="cs-card-t">{c.title}</div>
              {c.text && <div className="cs-card-x">{c.text}</div>}
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <div className={`cs-steps c${s.cols || 4}`}>
          {s.steps.map((st, i) => (
            <div className={`cs-step${st.hi ? ' hi' : ''}`} key={i}>
              <div className="cs-step-n">{st.n}</div>
              {st.phase && <div className="cs-step-p">{st.phase}</div>}
              <div className="cs-step-t">{st.title}</div>
            </div>
          ))}
        </div>
      )

    case 'flow':
      return (
        <div className="cs-flow">
          {s.nodes.map((n, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="cs-node">
                <div className="cs-node-c">{n.icon}</div>
                <div className="cs-node-l">{n.label}</div>
              </div>
              {i < s.nodes.length - 1 && <div className="cs-arr">→</div>}
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <table className="cs-table">
          <thead>
            <tr>{s.headers.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {s.rows.map((r, i) => (
              <tr key={i}>
                <td>{r.a}</td>
                <td>{r.h}</td>
                <td className="ai">{r.ai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )

    case 'cats':
      return (
        <div className="cs-cats">
          {s.cats.map((c) => (
            <div className="cs-cat" key={c.cat}>
              <div className="cs-cat-h">{c.cat}</div>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      )

    default:
      return null
  }
}

function Col({ col, hi }) {
  return (
    <div className={`cs-col${hi ? ' hi' : ''}`}>
      <div className="cs-col-badge">{col.badge}</div>
      <div className="cs-col-title">{col.title}</div>
      <ul>{col.points.map((p) => <li key={p}>{p}</li>)}</ul>
    </div>
  )
}

export function ContentSlide({ slide }) {
  return (
    <div className="slide">
      <motion.div className="slide-kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        {slide.kicker}
      </motion.div>
      <motion.h2
        className={`slide-title${slide.titleSm ? ' sm' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5 }}
      >
        {slide.title}
      </motion.h2>
      {slide.lead && (
        <motion.p className="slide-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.45 }}>
          {slide.lead}
        </motion.p>
      )}
      <motion.div className="slide-body" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }}>
        <Body s={slide} />
      </motion.div>
      <AxaLogo />
    </div>
  )
}
