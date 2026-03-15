import { useEffect, useState } from 'react'
import { GrainGradient } from '@paper-design/shaders-react'
import Badge from './Badge.jsx'

const HEADLINE = 'I design systems that scale.'
const WORDS = HEADLINE.split(' ')

export default function Hero() {
  const [wordVisible, setWordVisible] = useState([])
  const [subVisible, setSubVisible] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState(false)

  useEffect(() => {
    WORDS.forEach((_, i) => {
      setTimeout(() => setWordVisible(prev => [...prev, i]), 200 + i * 100)
    })
    const subTimer = setTimeout(() => setSubVisible(true), 200 + WORDS.length * 100 + 400)
    const badgeTimer = setTimeout(() => setBadgesVisible(true), 200 + WORDS.length * 100 + 600)
    return () => { clearTimeout(subTimer); clearTimeout(badgeTimer) }
  }, [])

  const badges = ['Systems Thinking', 'Product Strategy', 'Design Systems', 'Product Management', 'AI Design']

  return (
    <section
      id="hero"
      style={{
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* GrainGradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <GrainGradient
          speed={1.1}
          scale={2.59}
          rotation={0}
          offsetX={0}
          offsetY={0}
          softness={1}
          intensity={0.53}
          noise={0}
          shape="wave"
          colors={['#AD9877', '#D4C9B8', '#D8CCC7']}
          colorBack="#00000000"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage:
              'linear-gradient(180deg, #FAFAF8 0%, #F0E8DC 100%)',
          }}
        />
      </div>

      {/* Dot grid decorative — desktop only */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          top: 80,
          right: 0,
          width: '40%',
          height: '80%',
          backgroundImage: 'radial-gradient(circle, rgba(176,141,87,0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse 80% 80% at 80% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 80% 40%, black 30%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '96px 32px 0',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#7A5C2E',
              margin: '0 0 24px',
              opacity: wordVisible.length > 0 ? 1 : 0,
              transform: wordVisible.length > 0 ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease 100ms, transform 0.5s ease 100ms',
            }}
          >
            Hi, I'm Esperanza 👋
          </p>

          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
              margin: '0 0 28px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 0.25em',
            }}
          >
            {WORDS.map((word, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  opacity: wordVisible.includes(i) ? 1 : 0,
                  transform: wordVisible.includes(i) ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 50}ms, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 50}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.65,
              fontWeight: 400,
              color: '#3A3A3A',
              margin: '0 0 36px',
              maxWidth: 640,
              opacity: subVisible ? 1 : 0,
              transform: subVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Nearly 10 years leading product design end-to-end — from research and strategy to production.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              opacity: badgesVisible ? 1 : 0,
              transform: badgesVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {badges.map(b => <Badge key={b}>{b}</Badge>)}
          </div>

          <div
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 24,
              alignItems: 'center',
              flexWrap: 'wrap',
              opacity: badgesVisible ? 1 : 0,
              transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 100ms',
            }}
          >
            <a
              href="#cases"
              onClick={e => {
                e.preventDefault()
                document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: '#7A5C2E',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
              className="link-underline"
            >
              View my work →
            </a>
            <a
              href="mailto:esperanzage@gmail.com"
              style={{ fontSize: 15, fontWeight: 500, color: '#7A5C2E', textDecoration: 'none' }}
              className="link-underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
