import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'

function SingleMetric({ value, suffix, label, text }) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(text ? 0 : value, 1500, inView)

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '0 clamp(16px, 5vw, 40px)' }}>
      <div className="metric-number">
        {text ?? `${count}${suffix}`}
      </div>
      <div
        style={{
          fontSize: 'clamp(10px, 2vw, 12px)',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#666666',
          maxWidth: 240,
          margin: '8px auto 0',
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function MetricCallout({ metrics }) {
  return (
    <div
      style={{
        padding: '0 32px 64px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          borderTop: '1px solid rgba(176,141,87,0.2)',
          paddingTop: 40,
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
          flexWrap: 'wrap',
        }}
      >
        {metrics.map((m, i) => (
          <div key={i} className="metric-group" style={{ display: 'flex', alignItems: 'stretch' }}>
            <SingleMetric {...m} />
            {i < metrics.length - 1 && (
              <div
                className="metric-divider"
                style={{
                  width: 1,
                  background: '#D4C9B8',
                  margin: '8px 0',
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
