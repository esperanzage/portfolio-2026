import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'

function SingleMetric({ value, suffix, label }) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(value, 1500, inView)

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '0 32px' }}>
      <div className="metric-number">
        {count}{suffix}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#666666',
          marginTop: 8,
          maxWidth: 160,
          margin: '8px auto 0',
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
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F0E8DC 50%, #FAFAF8 100%)',
        padding: '80px 0',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
          flexWrap: 'wrap',
        }}
      >
        {metrics.map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'stretch' }}>
            <SingleMetric {...m} />
            {i < metrics.length - 1 && (
              <div
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
