import { useState } from 'react'

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #E5E0D8' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 16, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.4 }}>
          {title}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            color: '#B08D57',
          }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`accordion-content ${open ? 'open' : ''}`}
        style={{ paddingBottom: open ? 20 : 0 }}
      >
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: '#3A3A3A',
            margin: 0,
          }}
        >
          {content}
        </p>
      </div>
    </div>
  )
}

export default function Accordion({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title} content={item.content} />
      ))}
    </div>
  )
}
