import { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'
import DeviceMockup from './DeviceMockup.jsx'
import FadeIn from './FadeIn.jsx'

export default function CaseStudyCard({ cs, index }) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 1

  return (
    <FadeIn delay={index * 80}>
      <Link
        to={`/case-study/${cs.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <article
          style={{
            background: '#FFFFFF',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
            transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: isEven ? undefined : 'column',
          }}
          className={isEven ? 'lg:flex-row' : 'flex-col'}
        >
          {/* Image area */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: isEven ? undefined : 300,
              flex: isEven ? '0 0 50%' : undefined,
              background: `linear-gradient(135deg, ${cs.tintFrom} 0%, ${cs.tintTo} 100%)`,
            }}
            className={isEven ? 'lg:min-h-[380px]' : 'min-h-[240px] md:min-h-[320px]'}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: 'inherit',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {cs.heroImage ? (
                <img
                  src={cs.heroImage}
                  alt={cs.shortTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top left',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              ) : (
                <DeviceMockup
                  tintFrom={cs.tintFrom}
                  tintTo={cs.tintTo}
                  accentColor={cs.accentColor}
                />
              )}
            </div>
          </div>

          {/* Text area */}
          <div
            style={{
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: isEven ? 1 : undefined,
            }}
          >
            {/* Company chip */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#B08D57',
                marginBottom: 12,
              }}
            >
              Perceptyx · {cs.id === 'ai-prototyping' ? 'In Progress' : '2024'}
            </div>

            <h3
              style={{
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#1A1A1A',
                margin: '0 0 12px',
              }}
            >
              {cs.title}
            </h3>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: '#666666',
                margin: '0 0 20px',
                maxWidth: 500,
              }}
            >
              {cs.subtitle}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {cs.tags.map(tag => (
                <Badge key={tag} inProgress={tag === 'In Progress'}>
                  {tag}
                </Badge>
              ))}
            </div>

            {/* View link */}
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#B08D57',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                opacity: hovered ? 1 : 0.6,
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}
            >
              View case study →
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}
