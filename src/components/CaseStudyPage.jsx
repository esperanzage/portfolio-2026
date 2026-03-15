import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import EyebrowLabel from './EyebrowLabel.jsx'
import Badge from './Badge.jsx'
import DeviceMockup from './DeviceMockup.jsx'
import MetricCallout from './MetricCallout.jsx'
import Accordion from './Accordion.jsx'
import FadeIn from './FadeIn.jsx'
import { getAdjacentCaseStudies } from '../data/caseStudies.js'

// Shared section wrapper — sticky card that slides over the previous
function StickySection({ zIndex, background, children, style = {} }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 64,
        zIndex,
        background,
        borderRadius: '16px 16px 0 0',
        boxShadow: '0 -2px 24px rgba(0,0,0,0.04)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ width: 40, height: 2, background: 'var(--c-accent)', marginBottom: 12 }} />
      <EyebrowLabel>{children}</EyebrowLabel>
    </div>
  )
}

const INNER = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }
const SECTION_PAD = 'clamp(64px, 8vw, 96px) 0'

export default function CaseStudyPage({ cs }) {
  const { prev, next } = getAdjacentCaseStudies(cs.id)

  useEffect(() => {
    document.title = `${cs.shortTitle} — Esperanza Garcia`
    return () => { document.title = 'Esperanza Garcia — Senior Product Designer' }
  }, [cs.shortTitle])

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }} className="page-enter">
      <Nav />

      <main id="main-content" style={{ paddingTop: 64 }}>

        {/* ── 1: Header — scrolls normally ── */}
        <div style={{ background: 'var(--c-bg)', padding: 'clamp(48px, 6vw, 80px) 0 64px' }}>
          <div style={INNER}>
            <Link
              to="/"
              className="link-underline"
              style={{ fontSize: 14, color: 'var(--c-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}
            >
              ← Back home
            </Link>

            <div style={{ maxWidth: 800 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {cs.tags.map(tag => (
                  <Badge key={tag} inProgress={tag === 'In Progress'}>{tag}</Badge>
                ))}
              </div>

              <h1 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--c-text)', margin: '0 0 24px' }}>
                {cs.title}
              </h1>

              <p style={{ fontSize: 20, lineHeight: 1.65, color: 'var(--c-body)', maxWidth: 700, margin: '0 0 40px' }}>
                {cs.subtitle}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)', padding: '20px 0' }}>
                {[
                  { label: 'ROLE', value: cs.role },
                  { label: 'TIMELINE', value: cs.timeline },
                  { label: 'TEAM', value: cs.team },
                ].map((meta, i, arr) => (
                  <div key={meta.label} style={{ paddingRight: 32, marginRight: 32, borderRight: i < arr.length - 1 ? '1px solid var(--c-border)' : 'none' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-muted)', marginBottom: 4 }}>
                      {meta.label}
                    </div>
                    <div style={{ fontSize: 15, color: 'var(--c-text)' }}>{meta.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 2: Hero image — sticky card ── */}
        <StickySection zIndex={2} background={cs.gradient || 'var(--grad-img)'}>
          <div style={{ ...INNER, padding: 'clamp(40px, 5vw, 64px) 32px' }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
              {cs.heroImage ? (
                <img
                  src={cs.heroImage}
                  alt={cs.shortTitle}
                  style={{ width: '100%', display: 'block' }}
                />
              ) : (
                <DeviceMockup tintFrom={cs.tintFrom} tintTo={cs.tintTo} accentColor={cs.accentColor} isLarge />
              )}
            </div>
          </div>
        </StickySection>

        {/* ── 3: Problem + Metrics — sticky card ── */}
        <StickySection zIndex={3} background='var(--c-bg)'>
          <div style={{ ...INNER, padding: SECTION_PAD }}>
            <div style={{ maxWidth: 800 }}>
              <FadeIn>
                <SectionLabel>The Problem</SectionLabel>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--c-body)', margin: '0 0 32px' }}>
                  {cs.problem.intro}
                </p>
              </FadeIn>
              <FadeIn delay={80}>
                <ul className="custom-bullets" style={{ borderLeft: '3px solid rgba(176,141,87,0.3)', paddingLeft: 24, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {cs.problem.painPoints.map((pt, i) => (
                    <li key={i} style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--c-body)', paddingLeft: 8 }}>{pt}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
          <MetricCallout metrics={cs.metrics} />
        </StickySection>

        {/* ── 4: Solution + Gallery — sticky card ── */}
        <StickySection zIndex={4} background='var(--grad-warm)' style={{ background: 'var(--c-bg)' }}>
          <div style={{ ...INNER, padding: SECTION_PAD }}>
            <div style={{ maxWidth: 800 }}>
              <FadeIn>
                <SectionLabel>The Solution</SectionLabel>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--c-body)', margin: 0 }}>
                  {cs.solution.intro}
                </p>
              </FadeIn>
            </div>

            {cs.images && cs.images.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <div style={{ display: 'grid', gridTemplateColumns: cs.images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
                  {cs.images.map((src, i) => (
                    <FadeIn key={i} delay={i * 60}>
                      <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
                        <img src={src} alt={`${cs.shortTitle} screenshot ${i + 2}`} style={{ width: '100%', display: 'block' }} loading="lazy" />
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            )}
          </div>
        </StickySection>

        {/* ── 5: Process — sticky card ── */}
        <StickySection zIndex={5} background='var(--c-bg)'>
          <div style={{ ...INNER, padding: SECTION_PAD }}>
            <FadeIn><SectionLabel>Process</SectionLabel></FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 32 }}>
              {cs.process.map((step, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderTop: '2px solid var(--c-accent)' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--c-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
                      {step.step}
                    </div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, color: 'var(--c-text)', margin: '0 0 10px' }}>{step.title}</h4>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--c-body)', margin: 0 }}>{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </StickySection>

        {/* ── 6: Outcome + Navigation — sticky card ── */}
        <StickySection zIndex={6} background='linear-gradient(180deg, var(--c-bg) 0%, var(--c-warm) 100%)'>
          <div style={{ ...INNER, padding: SECTION_PAD }}>
            <div style={{ maxWidth: 800 }}>
              <FadeIn>
                <SectionLabel>Outcome</SectionLabel>
                <p style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.5, color: 'var(--c-text)', margin: '0 0 40px' }}>
                  {cs.outcome.statement}
                </p>
              </FadeIn>
              <FadeIn delay={80}>
                <Accordion items={cs.outcome.highlights} />
              </FadeIn>
            </div>

            {/* Prev / Next */}
            {(prev || next) && (
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--c-border)', marginTop: 80, paddingTop: 40, gap: 24, flexWrap: 'wrap' }}>
                {prev ? (
                  <Link to={`/case-study/${prev.slug}`} className="link-underline" style={{ textDecoration: 'none' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--c-muted)', marginBottom: 6 }}>← Previous</div>
                    <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--c-text)' }}>{prev.shortTitle}</div>
                  </Link>
                ) : <div />}
                {next && (
                  <Link to={`/case-study/${next.slug}`} className="link-underline" style={{ textDecoration: 'none', textAlign: 'right' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--c-muted)', marginBottom: 6 }}>Next →</div>
                    <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--c-text)' }}>{next.shortTitle}</div>
                  </Link>
                )}
              </div>
            )}
          </div>

          <Footer />
        </StickySection>

      </main>
    </div>
  )
}
