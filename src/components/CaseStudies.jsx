import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'
import DeviceMockup from './DeviceMockup.jsx'
import { RebrandingMockup, FeeManagementMockup, CustomFieldsMockup, AIPrototypingMockup } from './CaseMockups.jsx'
import { caseStudies } from '../data/caseStudies.js'

const MOCKUPS = {
  rebranding: RebrandingMockup,
  'fee-management': FeeManagementMockup,
  'custom-fields': CustomFieldsMockup,
  'ai-prototyping': AIPrototypingMockup,
}

function FullScreenCard({ cs, index }) {
  const [hovered, setHovered] = useState(false)
  const [inView, setInView] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: 0,
        height: '100dvh',
        zIndex: index + 1,
        overflow: 'hidden',
        background: cs.gradient,
      }}
    >
      {/* Main layout */}
      <div
        className="case-card-layout"
        style={{
          display: 'flex',
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Image half */}
        <div
          className="case-image-half"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(24px, 4vh, 64px) clamp(20px, 3vw, 56px)',
          }}
        >
          {/* Decorative accent circle */}
          <div
            style={{
              position: 'absolute',
              width: '60%',
              paddingBottom: '60%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${cs.accentColor}12 0%, transparent 70%)`,
              top: '-10%',
              right: '-5%',
              pointerEvents: 'none',
            }}
          />

          <div
            className="case-mockup-inner"
            style={{
              transform: 'scale(1) translateY(0)',
              transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'center center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {MOCKUPS[cs.slug] ? (
              (() => { const M = MOCKUPS[cs.slug]; return <M accentColor={cs.accentColor} /> })()
            ) : (
              <DeviceMockup
                tintFrom={cs.tintFrom}
                tintTo={cs.tintTo}
                accentColor={cs.accentColor}
              />
            )}
          </div>
        </div>

        {/* Text half */}
        <div
          className="case-text-half"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: 'clamp(20px, 3vw, 80px) clamp(24px, 5vw, 72px)',
            position: 'relative',
          }}
        >
          {/* Title — big fluid type */}
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
              margin: '0 0 20px',
              maxWidth: '14em',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1) 120ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) 120ms',
            }}
          >
            {cs.shortTitle}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(14px, 1.3vw, 17px)',
              lineHeight: 1.65,
              color: '#3A3A3A',
              maxWidth: '38em',
              margin: '0 0 28px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1) 200ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) 200ms',
            }}
          >
            {cs.subtitle}
          </p>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 36,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1) 280ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) 280ms',
            }}
          >
            {cs.tags.map(tag => (
              <Badge key={tag} inProgress={tag === 'Coming Soon'}>{tag}</Badge>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-12px)',
              transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1) 360ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) 360ms',
            }}
          >
            {cs.inProgress ? (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--c-muted)',
                }}
              >
                Coming soon
              </span>
            ) : (
              <Link
                to={`/case-study/${cs.slug}`}
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#B08D57',
                    letterSpacing: '0.01em',
                    borderBottom: hovered ? '1.5px solid #B08D57' : '1.5px solid transparent',
                    paddingBottom: 2,
                    transition: 'border-color 0.25s',
                  }}
                >
                  View case study
                  <span
                    style={{
                      display: 'inline-block',
                      transform: hovered ? 'translateX(5px)' : 'translateX(0)',
                      transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    →
                  </span>
                </span>
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 2,
          background: `linear-gradient(to right, ${cs.accentColor}70, transparent 60%)`,
        }}
      />
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="cases">
      {/* Sticky card stack */}
      <div style={{ position: 'relative', height: `calc(100dvh * ${caseStudies.length})` }}>
        {caseStudies.map((cs, i) => (
          <FullScreenCard key={cs.id} cs={cs} index={i} />
        ))}
      </div>
    </section>
  )
}
