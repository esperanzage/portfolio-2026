export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #E5E0D8',
        padding: '48px 0',
        background: '#FAFAF8',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <p style={{ fontSize: 14, color: '#666666', margin: 0 }}>
          © 2026 Esperanza Garcia Espina
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          <a
            href="mailto:esperanzage@gmail.com"
            className="link-underline"
            style={{ fontSize: 14, color: '#666666' }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/esperanzage"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            style={{ fontSize: 14, color: '#666666' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
