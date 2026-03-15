export default function Badge({ children, inProgress = false }) {
  if (inProgress) {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: '#EAE4F0',
          border: '1px solid #C4B8D8',
          borderRadius: 24,
          padding: '5px 14px',
          fontSize: 13,
          fontWeight: 500,
          color: '#5B4F8A',
          cursor: 'default',
          transition: 'background 0.2s',
        }}
      >
        <span
          className="pulse-dot"
          style={{ width: 6, height: 6, borderRadius: '50%', background: '#7B6FA8', flexShrink: 0 }}
        />
        {children}
      </span>
    )
  }

  return (
    <span
      style={{
        display: 'inline-block',
        background: '#F0EBE3',
        border: '1px solid #D4C9B8',
        borderRadius: 24,
        padding: '5px 16px',
        fontSize: 13,
        fontWeight: 500,
        color: '#2D2D2D',
        cursor: 'default',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = '#E8E0D4')}
      onMouseLeave={e => (e.currentTarget.style.background = '#F0EBE3')}
    >
      {children}
    </span>
  )
}
