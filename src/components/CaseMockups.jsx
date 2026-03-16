import { Bell, Calendar, Page } from 'iconoir-react'

const frame = {
  background: 'rgba(255,255,255,0.72)',
  backdropFilter: 'blur(8px)',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
  width: '100%',
  height: '60%',
  display: 'flex',
  flexDirection: 'column',
}

const toolbar = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '10px 16px',
  background: 'rgba(255,255,255,0.5)',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
}

function BrowserChrome() {
  return (
    <div style={toolbar}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFB3A7' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFD580' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#AADE9C' }} />
      <div style={{ flex: 1, height: 20, background: 'rgba(0,0,0,0.06)', borderRadius: 10, marginLeft: 8 }} />
    </div>
  )
}

// ── Rebranding: Design system component gallery ─────────────────────────

export function RebrandingMockup() {
  const paletteSwatches = [
    { color: '#4A3B28', h: 18 },
    { color: '#8A7455', h: 16 },
    { color: '#C4B490', h: 14 },
    { color: '#E8E0D0', h: 12 },
  ]
  const colorChips = [
    { label: 'Purple',    bg: '#EDE8F5', color: '#7B6FA8' },
    { label: 'Melon',     bg: '#FDEEE8', color: '#C96A50' },
    { label: 'Buttermilk',bg: '#FDF6E0', color: '#9A8020' },
    { label: 'Cyan',      bg: '#E2F2F5', color: '#3A8FA8' },
  ]

  return (
    <div style={frame}>
      <BrowserChrome />
      <div style={{ padding: 12, background: '#F5F5F3', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {/* Top row: 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1fr 1fr 0.8fr', gap: 8 }}>
          {/* Typography */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '12px 14px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {[28, 22, 17, 13, 10].map((s, i) => (
              <span key={i} style={{ fontSize: s, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3, display: 'block' }}>Aa</span>
            ))}
          </div>

          {/* Palette */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '12px 14px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
            {paletteSwatches.map((s, i) => (
              <div key={i} style={{ height: s.h, borderRadius: 4, background: s.color, width: '100%' }} />
            ))}
          </div>

          {/* Buttons */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ width: '100%', height: 26, background: '#1A1A1A', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, color: '#fff', fontWeight: 700, letterSpacing: '0.01em' }}>Primary Button</span>
            </div>
            <div style={{ width: '100%', height: 24, border: '1.5px solid #1A1A1A', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, color: '#1A1A1A', fontWeight: 600, whiteSpace: 'nowrap' }}>Secondary Button</span>
            </div>
            <span style={{ fontSize: 9, color: '#555', fontWeight: 500 }}>Tertiary Button</span>
            <span style={{ fontSize: 12, color: '#555' }}>←</span>
          </div>

          {/* Color chips */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
            {colorChips.map((c) => (
              <div key={c.label} style={{ display: 'inline-flex' }}>
                <span style={{ fontSize: 9, fontWeight: 600, color: c.color, background: c.bg, borderRadius: 20, padding: '3px 7px', whiteSpace: 'nowrap' }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.7fr 1fr 0.55fr', gap: 8 }}>
          {/* Notifications menu */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '8px', border: '1px solid rgba(0,0,0,0.06)' }}>
            {[
              { label: 'Notifications', active: true,  Icon: Bell },
              { label: 'Date',          active: false, Icon: Calendar },
              { label: 'Documents',     active: false, Icon: Page },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '6px 8px',
                  borderRadius: 6,
                  background: item.active ? '#1A1A1A' : 'transparent',
                  marginBottom: 2,
                }}
              >
                <item.Icon width={13} height={13} strokeWidth={1.8} color={item.active ? '#fff' : '#666'} />
                <span style={{ fontSize: 10, fontWeight: item.active ? 600 : 400, color: item.active ? '#fff' : '#3A3A3A' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Toggles */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '10px 0', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
            {[
              { on: true,  bg: '#555555' },
              { on: true,  bg: '#9A7A50' },
              { on: false, bg: '#D0D0D0' },
              { on: false, bg: '#D0D0D0', small: true },
            ].map((t, i) => (
              <div key={i} style={{ width: 30, height: 17, borderRadius: 9, background: t.on ? t.bg : '#D0D0D0', position: 'relative' }}>
                <div style={{ position: 'absolute', width: 11, height: 11, borderRadius: '50%', background: '#fff', top: 3, [t.on ? 'right' : 'left']: 3 }} />
              </div>
            ))}
          </div>

          {/* Color fills */}
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, background: '#E8B84B' }} />
            <div style={{ flex: 1, background: '#ECC96A' }} />
            <div style={{ flex: 1, background: '#F5E090' }} />
          </div>

          {/* Avatars */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '8px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
            {[
              { label: 'JD', bg: '#E0D8CC' },
              { gradient: 'linear-gradient(135deg, #B8956A, #7A5A35)' },
              { gradient: 'linear-gradient(135deg, #A89080, #6A5048)' },
              { label: 'JD', bg: '#D0C8BC' },
            ].map((a, i) => (
              <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: a.bg || a.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {a.label && <span style={{ fontSize: 7, fontWeight: 700, color: '#5A4A38' }}>{a.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Fee Management ────────────────────────────────────────────────────────

export function FeeManagementMockup() {
  const rows = [
    {
      label: 'Credit Card',
      icon: (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <rect x="0.5" y="0.5" width="13" height="10" rx="1.5" stroke="#7B6FA8" strokeWidth="1.2"/>
          <rect x="0.5" y="3" width="13" height="2.5" fill="#7B6FA8" opacity="0.3"/>
          <rect x="2" y="7" width="4" height="1.5" rx="0.75" fill="#7B6FA8" opacity="0.5"/>
        </svg>
      ),
      iconBg: '#EDE8F5', enabled: true,
    },
    {
      label: 'Direct Debit',
      icon: (
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <rect x="0.5" y="2.5" width="13" height="9" rx="1.5" stroke="#4A7A9A" strokeWidth="1.2"/>
          <path d="M4 2.5V1.5C4 0.948 4.448 0.5 5 0.5H9C9.552 0.5 10 0.948 10 1.5V2.5" stroke="#4A7A9A" strokeWidth="1.2"/>
          <line x1="7" y1="5" x2="7" y2="9" stroke="#4A7A9A" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="5" y1="7" x2="9" y2="7" stroke="#4A7A9A" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#E4EEF8', enabled: true,
    },
    {
      label: 'Cash App',
      icon: (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
          <rect x="0.5" y="0.5" width="11" height="12" rx="2.5" stroke="#AAAAAA" strokeWidth="1.2"/>
          <path d="M6 3.5V4.5M6 8.5V9.5M4.5 6.5C4.5 5.672 5.172 5 6 5C6.828 5 7.5 5.672 7.5 6.5C7.5 7.328 6.828 8 6 8C5.172 8 4.5 7.328 4.5 6.5Z" stroke="#AAAAAA" strokeWidth="1.1" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#F0F0F0', enabled: false,
    },
  ]

  return (
    <div style={frame}>
      <BrowserChrome />
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A' }}>Fees and payment methods</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ height: 24, padding: '0 12px', background: '#1A1A1A', borderRadius: 5, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 9, color: '#fff', fontWeight: 600 }}>Edit</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 4 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(0,0,0,0.35)' }} />)}
            </div>
          </div>
        </div>

        {/* Manage based on */}
        <div>
          <span style={{ fontSize: 10, color: '#3A3A3A', fontWeight: 500, display: 'block', marginBottom: 5 }}>Manage based on</span>
          <div style={{ height: 28, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 5, background: '#FAFAF8', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
            <span style={{ fontSize: 10, color: '#3A3A3A' }}>All Tenancies in Company</span>
          </div>
        </div>

        {/* Divider + column labels */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: 8, display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 9, color: '#999', width: 110 }}>Fee allocation ⓘ</span>
          <span style={{ fontSize: 9, color: '#999', width: 60, textAlign: 'right' }}>Status</span>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div key={i}>
            {i > 0 && <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', marginBottom: 10 }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: row.enabled ? 1 : 0.4 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: row.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {row.icon}
              </div>
              <span style={{ flex: 1, fontSize: 11, fontWeight: 600, color: '#1A1A1A' }}>{row.label}</span>
              <div style={{ width: 110 }}>
                <div style={{ fontSize: 9, color: '#999', marginBottom: 2 }}>Fee allocation ⓘ</div>
                <div style={{ fontSize: 10, color: '#3A3A3A' }}>Tenant</div>
              </div>
              <div style={{
                width: 56, height: 20, borderRadius: 20, flexShrink: 0,
                background: row.enabled ? '#E6F4EE' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 9, fontWeight: 600, color: row.enabled ? '#2A7A50' : '#888' }}>
                  {row.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── AI Prototyping Tool ────────────────────────────────────────────────────

export function AIPrototypingMockup() {
  return (
    <div style={{ ...frame, display: 'flex', flexDirection: 'column' }}>
      <BrowserChrome />
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>

        {/* Left: Prompt / chat panel */}
        <div style={{
          width: '46%',
          borderRight: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          padding: '12px 12px 10px',
          gap: 8,
          background: '#FAFAF8',
        }}>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B08D57' }}>
            Prompt
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
            {/* User bubble */}
            <div style={{ background: '#1A1A1A', borderRadius: '8px 8px 2px 8px', padding: '6px 9px', alignSelf: 'flex-end', maxWidth: '90%' }}>
              <span style={{ fontSize: 8.5, color: '#fff', lineHeight: 1.5 }}>Survey builder with question types and progress indicator</span>
            </div>

            {/* AI response */}
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '2px 8px 8px 8px', padding: '6px 9px', maxWidth: '92%' }}>
              <span style={{ fontSize: 7.5, color: '#B08D57', display: 'block', marginBottom: 3 }}>✦ Using Vision tokens</span>
              <span style={{ fontSize: 8.5, color: '#3A3A3A', lineHeight: 1.5 }}>Generated SurveyCard with QuestionBlock and ProgressBar...</span>
            </div>

            {/* User bubble 2 */}
            <div style={{ background: '#1A1A1A', borderRadius: '8px 8px 2px 8px', padding: '6px 9px', alignSelf: 'flex-end', maxWidth: '90%' }}>
              <span style={{ fontSize: 8.5, color: '#fff', lineHeight: 1.5 }}>Add a scale question with labels below</span>
            </div>
          </div>

          {/* Input */}
          <div style={{ height: 27, border: '1px solid rgba(176,141,87,0.28)', borderRadius: 6, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6 }}>
            <span style={{ flex: 1, fontSize: 8, color: '#CCC' }}>Describe a feature or change...</span>
            <div style={{ width: 17, height: 17, borderRadius: 4, background: '#B08D57', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 9, color: '#fff', lineHeight: 1 }}>↑</span>
            </div>
          </div>
        </div>

        {/* Right: Prototype preview */}
        <div style={{ flex: 1, padding: '12px 12px 10px', background: '#F2EEE8', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999' }}>
            Preview
          </div>

          {/* Rendered card */}
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid rgba(0,0,0,0.07)', padding: '11px 11px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>Q3 Engagement Survey</div>
                <div style={{ fontSize: 8.5, color: '#888' }}>Annual pulse · 8 questions</div>
              </div>
              <span style={{ fontSize: 7.5, fontWeight: 600, color: '#2A7A50', background: '#E6F4EE', borderRadius: 20, padding: '3px 8px' }}>Draft</span>
            </div>

            {/* Progress bar */}
            <div style={{ height: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 2, marginBottom: 8, overflow: 'hidden' }}>
              <div style={{ width: '62%', height: '100%', background: '#B08D57', borderRadius: 2 }} />
            </div>

            {[
              { label: 'Audience', value: 'All employees' },
              { label: 'Questions', value: '5 of 8 done' },
              { label: 'Launch date', value: 'Apr 1, 2026' },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 8.5, color: '#888' }}>{label}</span>
                <span style={{ fontSize: 8.5, fontWeight: 600, color: '#1A1A1A' }}>{value}</span>
              </div>
            ))}

            <div style={{ display: 'flex', gap: 6, marginTop: 9 }}>
              <div style={{ flex: 1, height: 22, background: '#1A1A1A', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 8, color: '#fff', fontWeight: 600 }}>Continue editing</span>
              </div>
              <div style={{ width: 22, height: 22, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 11, color: '#888', lineHeight: 1 }}>⋯</span>
              </div>
            </div>
          </div>

          {/* Token chips */}
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {['color.primary', 'space.md', 'radius.sm', 'type.label'].map(t => (
              <span key={t} style={{ fontSize: 6.5, color: '#B08D57', background: 'rgba(176,141,87,0.08)', border: '1px solid rgba(176,141,87,0.15)', borderRadius: 3, padding: '2px 5px', fontFamily: 'monospace' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Custom Fields ──────────────────────────────────────────────────────────

export function CustomFieldsMockup() {
  const typeOptions = [
    { icon: 'T', label: 'Text',     iconStyle: { fontWeight: 800, fontFamily: 'serif', fontSize: 12 } },
    { icon: '#', label: 'Number',   selected: true },
    { icon: '▣', label: 'Date' },
    { icon: '✓', label: 'Checkbox' },
    { icon: '⌄', label: 'Select' },
  ]
  return (
    <div style={{ ...frame, position: 'relative' }}>
      <BrowserChrome />
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
        {/* Field name */}
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>Field name</span>
          <div style={{ height: 34, border: '1px solid rgba(0,0,0,0.14)', borderRadius: 6, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
            <span style={{ fontSize: 11, color: '#BBBBBB' }}>Text</span>
          </div>
        </div>

        {/* Applies to */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 7 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A' }}>Applies to</span>
            <span style={{ fontSize: 10, color: '#BBB' }}>ⓘ</span>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#3A7A8A', background: '#D5EEF2', borderRadius: 20, padding: '4px 11px' }}>Tenancies</span>
        </div>

        {/* Type */}
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A', display: 'block', marginBottom: 6 }}>Type</span>
          <div style={{ height: 34, border: '1px solid rgba(0,0,0,0.14)', borderRadius: 6, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 7 }}>
            <span style={{ fontSize: 11, color: '#888' }}>#</span>
            <span style={{ fontSize: 11, color: '#1A1A1A', flex: 1 }}>Number</span>
            <span style={{ fontSize: 9, color: '#BBB' }}>▾</span>
          </div>
        </div>

        {/* Format + decimals */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: 5 }}>Format</span>
            <div style={{ height: 30, border: '1px solid rgba(0,0,0,0.14)', borderRadius: 5, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 5 }}>
              <span style={{ fontSize: 10, color: '#888' }}>#</span>
              <span style={{ fontSize: 10, color: '#1A1A1A', flex: 1 }}>Default</span>
              <span style={{ fontSize: 8, color: '#BBB' }}>▾</span>
            </div>
          </div>
          <div style={{ width: 70 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: 5 }}>Decimals</span>
            <div style={{ height: 30, border: '1px solid rgba(0,0,0,0.14)', borderRadius: 5, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, color: '#1A1A1A' }}>2</span>
              <span style={{ fontSize: 8, color: '#BBB' }}>▾</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating dropdown — positioned over the Type field */}
      <div style={{
        position: 'absolute',
        top: 148,
        right: 18,
        width: 110,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 6px 24px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.06)',
        padding: '4px 0',
        zIndex: 10,
      }}>
        {typeOptions.map((t, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              padding: '7px 12px',
              background: t.selected ? 'rgba(0,0,0,0.04)' : 'transparent',
            }}
          >
            <span style={{ fontSize: 11, color: '#888', width: 12, textAlign: 'center', lineHeight: 1, ...t.iconStyle }}>{t.icon}</span>
            <span style={{ fontSize: 10, color: '#1A1A1A', fontWeight: t.selected ? 600 : 400 }}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
