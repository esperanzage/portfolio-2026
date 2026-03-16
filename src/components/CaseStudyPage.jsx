import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import EyebrowLabel from './EyebrowLabel.jsx'
import Badge from './Badge.jsx'
import DeviceMockup from './DeviceMockup.jsx'
import MetricCallout from './MetricCallout.jsx'
import FadeIn from './FadeIn.jsx'
import { getAdjacentCaseStudies } from '../data/caseStudies.js'

const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`

// Full-screen sticky card — same stacking mechanism as the homepage case study cards
function StickySection({ zIndex, background, noShadow, flat, children }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex,
        background,
        borderRadius: flat ? 0 : '16px 16px 0 0',
        boxShadow: noShadow ? 'none' : '0 -2px 24px rgba(0,0,0,0.04)',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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

function ClickableImage({ src, alt, style = {}, blend = true, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', cursor: 'zoom-in', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(src)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          transform: hovered ? 'scale(1.005)' : undefined,
          transition: 'transform 400ms cubic-bezier(0.4,0,0.2,1)',
          mixBlendMode: blend ? 'multiply' : undefined,
          ...style,
        }}
        loading="lazy"
      />
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          background: 'rgba(0,0,0,0.55)',
          color: '#fff',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          borderRadius: 6,
          padding: '5px 10px',
          backdropFilter: 'blur(4px)',
          pointerEvents: 'none',
        }}>
          Expand
        </div>
      )}
    </div>
  )
}

const INNER = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }

export default function CaseStudyPage({ cs }) {
  const { prev, next } = getAdjacentCaseStudies(cs.id)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.title = `${cs.shortTitle} — Esperanza Garcia`
    return () => { document.title = 'Esperanza Garcia — Senior Product Designer' }
  }, [cs.shortTitle])

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // Exclude heroImage from gallery — it's shown in the hero+problem section already
  const allImages = (cs.images || []).filter(Boolean)
  const extraImages = allImages.slice(cs.outcome2 ? 3 : 2)
  const hasGallery = extraImages.length > 0

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }} className="page-enter">
      <Nav />

      {/* ── Lightbox — portaled to body to escape transform stacking context ── */}
      {lightbox && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100vw', height: '100dvh',
            zIndex: 9999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: '90vw', maxHeight: '80dvh', borderRadius: 10, boxShadow: '0 32px 80px rgba(0,0,0,0.5)', display: 'block', objectFit: 'contain' }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 24, right: 24,
              background: 'rgba(255,255,255,0.12)', border: 'none',
              color: '#fff', fontSize: 20, width: 40, height: 40,
              borderRadius: '50%', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>,
        document.body
      )}

      <main id="main-content" style={{ paddingTop: 64 }}>

        {/* ── 1: Header — scrolls normally, no sticky ── */}
        <div style={{ background: 'var(--c-bg)', padding: 'clamp(48px, 6vw, 80px) 0 64px' }}>
          <div style={INNER}>
            <Link to="/" className="link-underline" style={{ fontSize: 14, color: 'var(--c-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
              ← Back home
            </Link>
            <div style={{ maxWidth: 800 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {cs.tags.map(tag => <Badge key={tag} inProgress={tag === 'In Progress'}>{tag}</Badge>)}
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--c-text)', margin: '0 0 24px' }}>
                {cs.title}
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.65, color: 'var(--c-body)', maxWidth: 700, margin: '0 0 40px' }}>
                {cs.subtitle}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: 12, columnGap: 0, borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)', padding: '16px 0' }}>
                {[{ label: 'ROLE', value: cs.role }, { label: 'TIMELINE', value: cs.timeline }, { label: 'TEAM', value: cs.team }].map((meta, i, arr) => (
                  <div key={meta.label} className={meta.label === 'TEAM' ? 'meta-team' : undefined} style={{ paddingRight: 20, marginRight: 20, borderRight: i < arr.length - 1 ? '1px solid var(--c-border)' : 'none' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-muted)', marginBottom: 4 }}>{meta.label}</div>
                    <div style={{ fontSize: 15, color: 'var(--c-text)' }}>{meta.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sticky sections wrapper — bounds sticky behavior so footer is never covered ── */}
        <div>

        {/* ── 2: Hero image + Problem — merged, full-screen sticky ── */}
        <StickySection zIndex={2} background={cs.gradient || 'var(--c-bg)'}>
          <div style={{ ...INNER, padding: 'clamp(48px, 6vw, 72px) 32px' }}>
            <div
              className={cs.heroImage ? 'md:grid-cols-[1fr_1.75fr]' : undefined}
              style={{
                display: 'grid',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
              }}
            >
              {/* Left: Problem */}
              <div>
                <FadeIn>
                  <SectionLabel>The Problem</SectionLabel>
                  <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--c-body)', margin: '0 0 28px' }}>
                    {cs.problem.intro}
                  </p>
                </FadeIn>
                <FadeIn delay={80}>
                  <ul className="custom-bullets" style={{ borderLeft: '3px solid rgba(176,141,87,0.3)', paddingLeft: 24, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {cs.problem.painPoints.map((pt, i) => (
                      <li key={i} style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--c-body)' }}>{pt}</li>
                    ))}
                  </ul>
                </FadeIn>
              </div>

              {/* Right: Hero image or mockup */}
              {cs.heroImage ? (
                <FadeIn delay={120}>
                  <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                    <ClickableImage src={cs.heroImage} alt={cs.shortTitle} onClick={setLightbox} />
                  </div>
                </FadeIn>
              ) : (
                <FadeIn delay={120}>
                  <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                    <DeviceMockup tintFrom={cs.tintFrom} tintTo={cs.tintTo} accentColor={cs.accentColor} isLarge />
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
          <MetricCallout metrics={cs.metrics} />
        </StickySection>

        {/* ── 3: Process — full-screen sticky, homepage card style ── */}
        <StickySection zIndex={3} background='radial-gradient(ellipse 120% 100% at 80% 0%, #EDE5D6 0%, #F5EDE0 45%, #F0E8DC 100%)'>
          <div style={{ ...INNER, padding: 'clamp(56px, 7vw, 96px) 32px', width: '100%', boxSizing: 'border-box' }}>
            <FadeIn>
              <SectionLabel>Process</SectionLabel>
            </FadeIn>
            <div className="process-cards-slider" style={{ gap: 16, marginTop: 28 }}>
              {cs.process.map((step, i) => (
                <FadeIn key={i} delay={i * 80} className="process-card-item">
                  <div style={{
                    background: `linear-gradient(145deg, #FAF8F3 0%, #F3EDE0 100%), ${NOISE_BG}`,
                    backgroundBlendMode: 'multiply',
                    border: '1px solid rgba(176, 141, 87, 0.18)',
                    borderRadius: 16,
                    padding: '32px 28px',
                    height: '100%',
                    boxShadow: '0 1px 2px rgba(100,70,20,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 12, background: 'rgba(176,141,87,0.1)', border: '1px solid rgba(176,141,87,0.22)', marginBottom: 20, color: 'var(--c-accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em' }}>
                      {step.step}
                    </div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, color: 'var(--c-text)', margin: '0 0 10px', lineHeight: 1.35 }}>{step.title}</h4>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4A3E30', margin: 0 }}>{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </StickySection>

        {/* ── 4: Solution + first image ── */}
        <StickySection zIndex={4} background='var(--c-bg)'>
          <div style={{ ...INNER, padding: 'clamp(48px, 6vw, 72px) 32px' }}>
            <div
              className={allImages.length > 0 ? 'md:grid-cols-[1fr_1.4fr]' : undefined}
              style={{
                display: 'grid',
                gap: 'clamp(32px, 5vw, 72px)',
                alignItems: 'center',
              }}
            >
              <FadeIn>
                <SectionLabel>The Solution</SectionLabel>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--c-body)', margin: 0 }}>
                  {cs.solution.intro}
                </p>
              </FadeIn>
              {allImages.length > 0 && (
                <FadeIn delay={100}>
                  <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                    <ClickableImage src={allImages[0]} alt={`${cs.shortTitle} — solution`} onClick={setLightbox} />
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </StickySection>

        {/* ── 5: Outcome + second image ── */}
        <StickySection zIndex={5} background='var(--c-warm)' noShadow flat={!cs.outcome2 && !hasGallery}>
          <div style={{ ...INNER, padding: 'clamp(48px, 6vw, 72px) 32px' }}>
            <div
              className={allImages.length > 1 ? 'md:grid-cols-[1.8fr_1fr]' : undefined}
              style={{
                display: 'grid',
                gap: 'clamp(32px, 5vw, 72px)',
                alignItems: 'start',
              }}
            >
              {allImages.length > 1 && (
                <FadeIn className="order-2 md:order-1">
                  <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                    <ClickableImage src={allImages[1]} alt={`${cs.shortTitle} — outcome`} onClick={setLightbox} />
                  </div>
                </FadeIn>
              )}
              <FadeIn delay={allImages.length > 1 ? 100 : 0} className="order-1 md:order-2">
                <div>
                  <SectionLabel>Outcome</SectionLabel>
                  <p style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.5, color: 'var(--c-text)', margin: cs.outcome.body ? '0 0 16px' : '0 0 36px' }}>
                    {cs.outcome.statement}
                  </p>
                  {cs.outcome.body && (
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--c-body)', margin: '0 0 32px' }}>
                      {cs.outcome.body}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {cs.outcome.highlights.map((h, i) => (
                      <div key={i} style={{
                        borderTop: i === 0 ? '1px solid var(--c-border)' : 'none',
                        borderBottom: '1px solid var(--c-border)',
                        padding: '16px 0',
                        display: 'grid',
                        gridTemplateColumns: '1.2em 1fr',
                        gap: '12px',
                        alignItems: 'start',
                      }}>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--c-accent)', paddingTop: 3 }}>0{i + 1}</span>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--c-text)', marginBottom: 4 }}>{h.title}</div>
                          <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--c-body)' }}>{h.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </StickySection>

        {/* ── 6: Outcome Part 2 — optional second outcome section ── */}
        {cs.outcome2 && (
          <StickySection zIndex={6} background='var(--c-bg)' flat={!hasGallery}>
            <div style={{ ...INNER, padding: 'clamp(48px, 6vw, 72px) 32px' }}>
              <div
                className={(cs.outcome2.image || allImages.length > 2) ? 'md:grid-cols-[1.8fr_1fr]' : undefined}
                style={{
                  display: 'grid',
                  gap: 'clamp(32px, 5vw, 72px)',
                  alignItems: 'start',
                }}
              >
                {(cs.outcome2.image || allImages[2]) && (
                  <FadeIn className="order-2 md:order-1">
                    <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                      <ClickableImage src={cs.outcome2.image || allImages[2]} alt={`${cs.shortTitle} — outcome 2`} onClick={setLightbox} />
                    </div>
                  </FadeIn>
                )}
                <FadeIn delay={100} className="order-1 md:order-2">
                  <div>
                    <SectionLabel>Outcome</SectionLabel>
                    <p style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.5, color: 'var(--c-text)', margin: cs.outcome2.body ? '0 0 16px' : '0 0 36px' }}>
                      {cs.outcome2.statement}
                    </p>
                    {cs.outcome2.body && (
                      <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--c-body)', margin: '0 0 32px' }}>
                        {cs.outcome2.body}
                      </p>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {cs.outcome2.highlights.map((h, i) => (
                        <div key={i} style={{
                          borderTop: i === 0 ? '1px solid var(--c-border)' : 'none',
                          borderBottom: '1px solid var(--c-border)',
                          padding: '16px 0',
                          display: 'grid',
                          gridTemplateColumns: '1.2em 1fr',
                          gap: '12px',
                          alignItems: 'start',
                        }}>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--c-accent)', paddingTop: 3 }}>0{i + 1}</span>
                          <div>
                            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--c-text)', marginBottom: 4 }}>{h.title}</div>
                            <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--c-body)' }}>{h.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </StickySection>
        )}

        {/* ── 7: Extra images gallery ── */}
        {allImages.length > (cs.outcome2 ? 3 : 2) && (
          <StickySection zIndex={7} background='var(--c-warm)' flat>
            <div style={{ ...INNER, padding: 'clamp(48px, 6vw, 72px) 32px' }}>
              <div className="md:grid-cols-2" style={{ display: 'grid', gap: 24 }}>
                {allImages.slice(cs.outcome2 ? 3 : 2).map((img, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'none' }}>
                      <ClickableImage src={img} alt={`${cs.shortTitle} — detail ${i + 1}`} onClick={setLightbox} />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </StickySection>
        )}

        </div>{/* end sticky wrapper */}

        {/* ── 7: Navigation + Footer — normal flow, below sticky sections ── */}
        <div style={{ background: 'linear-gradient(180deg, var(--c-bg) 0%, var(--c-warm) 100%)' }}>
          {(prev || next) && (
            <div style={{ ...INNER, padding: 'clamp(56px, 7vw, 96px) 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--c-border)', paddingTop: 48, gap: 24, flexWrap: 'wrap' }}>
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
            </div>
          )}
          <Footer />
        </div>

      </main>
    </div>
  )
}
