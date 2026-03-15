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

function SectionLabel({ children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ width: 40, height: 2, background: '#B08D57', marginBottom: 12 }} />
      <EyebrowLabel>{children}</EyebrowLabel>
    </div>
  )
}

export default function CaseStudyPage({ cs }) {
  const { prev, next } = getAdjacentCaseStudies(cs.id)

  useEffect(() => {
    document.title = `${cs.shortTitle} — Esperanza Garcia`
    return () => { document.title = 'Esperanza Garcia — Senior Product Designer' }
  }, [cs.shortTitle])

  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }} className="page-enter">
      <Nav />

      <main id="main-content" style={{ paddingTop: 64 }}>
        {/* ── Header ── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px 48px' }}>
          <Link
            to="/"
            className="link-underline"
            style={{
              fontSize: 14,
              color: '#666666',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 48,
            }}
          >
            ← Back home
          </Link>

          <div style={{ maxWidth: 800 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {cs.tags.map(tag => (
                <Badge key={tag} inProgress={tag === 'In Progress'}>{tag}</Badge>
              ))}
            </div>

            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 54px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#1A1A1A',
                margin: '0 0 24px',
              }}
            >
              {cs.title}
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.65,
                color: '#3A3A3A',
                maxWidth: 700,
                margin: '0 0 40px',
              }}
            >
              {cs.subtitle}
            </p>

            {/* Metadata row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0,
                borderTop: '1px solid #E5E0D8',
                borderBottom: '1px solid #E5E0D8',
                padding: '20px 0',
              }}
            >
              {[
                { label: 'ROLE', value: cs.role },
                { label: 'TIMELINE', value: cs.timeline },
                { label: 'TEAM', value: cs.team },
              ].map((meta, i, arr) => (
                <div
                  key={meta.label}
                  style={{
                    paddingRight: 32,
                    marginRight: 32,
                    borderRight: i < arr.length - 1 ? '1px solid #E5E0D8' : 'none',
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#666666',
                      marginBottom: 4,
                    }}
                  >
                    {meta.label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 400, color: '#1A1A1A' }}>
                    {meta.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hero image ── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 80px' }}>
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              background: 'linear-gradient(160deg, #F5F1EC 0%, #EAE4DA 100%)',
              ...(cs.heroImage ? { padding: '40px 40px 0' } : {}),
            }}
          >
            {cs.heroImage ? (
              <img
                src={cs.heroImage}
                alt={cs.shortTitle}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '10px 10px 0 0',
                  boxShadow: '0 -4px 32px rgba(0,0,0,0.08)',
                }}
              />
            ) : (
              <DeviceMockup
                tintFrom={cs.tintFrom}
                tintTo={cs.tintTo}
                accentColor={cs.accentColor}
                isLarge
              />
            )}
          </div>
        </div>

        {/* ── The Problem ── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: 800 }}>
            <FadeIn>
              <SectionLabel>The Problem</SectionLabel>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: '#3A3A3A',
                  margin: '0 0 32px',
                }}
              >
                {cs.problem.intro}
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <ul
                className="custom-bullets"
                style={{
                  borderLeft: '3px solid rgba(176,141,87,0.3)',
                  paddingLeft: 24,
                  margin: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {cs.problem.painPoints.map((pt, i) => (
                  <li
                    key={i}
                    style={{ fontSize: 16, lineHeight: 1.65, color: '#3A3A3A', paddingLeft: 8 }}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* ── Metrics ── */}
        <div style={{ margin: '80px 0' }}>
          <MetricCallout metrics={cs.metrics} />
        </div>

        {/* ── The Solution ── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: 800 }}>
            <FadeIn>
              <SectionLabel>The Solution</SectionLabel>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: '#3A3A3A',
                  margin: 0,
                }}
              >
                {cs.solution.intro}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ── Secondary images gallery ── */}
        {cs.images && cs.images.length > 0 && (
          <div style={{ maxWidth: 1200, margin: '64px auto 0', padding: '0 32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: cs.images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 16,
              }}
            >
              {cs.images.map((src, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: 'hidden',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      background: 'linear-gradient(160deg, #F5F1EC 0%, #EAE4DA 100%)',
                      padding: '28px 28px 0',
                    }}
                  >
                    <img
                      src={src}
                      alt={`${cs.shortTitle} screenshot ${i + 2}`}
                      style={{ width: '100%', display: 'block', borderRadius: '8px 8px 0 0', boxShadow: '0 -2px 16px rgba(0,0,0,0.07)' }}
                      loading="lazy"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* ── Process ── */}
        <div style={{ maxWidth: 1200, margin: '80px auto 0', padding: '0 32px' }}>
          <FadeIn>
            <SectionLabel>Process</SectionLabel>
          </FadeIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              marginTop: 32,
            }}
          >
            {cs.process.map((step, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 16,
                    padding: 32,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    borderTop: '2px solid #B08D57',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: '#B08D57',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      marginBottom: 16,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {step.step}
                  </div>
                  <h4
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#1A1A1A',
                      margin: '0 0 10px',
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: '#3A3A3A',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Outcome ── */}
        <div style={{ maxWidth: 1200, margin: '80px auto 0', padding: '0 32px' }}>
          <div style={{ maxWidth: 800 }}>
            <FadeIn>
              <SectionLabel>Outcome</SectionLabel>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: '#1A1A1A',
                  margin: '0 0 40px',
                }}
              >
                {cs.outcome.statement}
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <Accordion items={cs.outcome.highlights} />
            </FadeIn>
          </div>
        </div>

        {/* ── Next/Prev navigation ── */}
        {(prev || next) && (
          <div style={{ maxWidth: 1200, margin: '80px auto 0', padding: '0 32px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid #E5E0D8',
                paddingTop: 40,
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              {prev ? (
                <Link
                  to={`/case-study/${prev.slug}`}
                  className="link-underline"
                  style={{ textDecoration: 'none', color: '#3A3A3A' }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666666', marginBottom: 6 }}>
                    ← Previous
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 500, color: '#1A1A1A' }}>
                    {prev.shortTitle}
                  </div>
                </Link>
              ) : <div />}
              {next && (
                <Link
                  to={`/case-study/${next.slug}`}
                  className="link-underline"
                  style={{ textDecoration: 'none', color: '#3A3A3A', textAlign: 'right' }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666666', marginBottom: 6 }}>
                    Next →
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 500, color: '#1A1A1A' }}>
                    {next.shortTitle}
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* ── Back home band ── */}
        <div
          style={{
            background: '#F5EDE0',
            marginTop: 80,
            padding: '80px 32px',
            textAlign: 'center',
          }}
        >
          <Link
            to="/"
            className="link-underline"
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: '#3A3A3A',
              textDecoration: 'none',
            }}
          >
            ← Back home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
