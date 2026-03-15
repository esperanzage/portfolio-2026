export default function EyebrowLabel({ children, withLine = false, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      {withLine && (
        <div style={{ width: 40, height: 2, background: '#B08D57', flexShrink: 0 }} />
      )}
      <span
        style={{
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.12em',

          color: '#B08D57',
        }}
      >
        {children}
      </span>
    </div>
  )
}
