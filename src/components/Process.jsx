import { Search, BrainElectricity, KanbanBoard, RefreshDouble } from 'iconoir-react'
import EyebrowLabel from './EyebrowLabel.jsx'
import FadeIn from './FadeIn.jsx'

const STEPS = [
  {
    icon: Search,
    title: 'Discovery & Problem Definition',
    description: 'Talking to users, auditing what exists, and understanding why past decisions were made — so I can find the best path forward.',
  },
  {
    icon: BrainElectricity,
    title: 'Ideation & Collaboration',
    description: 'Exploring what\'s possible with the team. The best ideas come from mixing user needs, business goals, and technical constraints together.',
  },
  {
    icon: KanbanBoard,
    title: 'Phase Breakdown & Planning',
    description: 'Breaking big initiatives into phases that deliver value incrementally — gathering feedback along the way toward the bigger vision.',
  },
  {
    icon: RefreshDouble,
    title: 'Implementation & Iteration',
    description: 'Staying close during build — writing specs, unblocking engineering, and iterating based on how the solution actually performs.',
  },
]

const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at 80% 0%, #EDE5D6 0%, #F5EDE0 45%, #F0E8DC 100%)',
        padding: 'clamp(72px, 7vw, 100px) 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: 16 }}>
            <div style={{ width: 40, height: 2, background: '#B08D57', marginBottom: 16 }} />
            <EyebrowLabel>How I Work</EyebrowLabel>
          </div>
        </FadeIn>

        <FadeIn delay={60}>
          <p
            style={{
              fontSize: 'clamp(18px, 2vw, 21px)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: '#3A3A3A',
              maxWidth: 640,
              margin: '20px 0 48px',
            }}
          >
            I work end-to-end — always in close collaboration with engineering and product.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <FadeIn key={step.title} delay={i * 60}>
                <div
                  style={{
                    background: `linear-gradient(145deg, #FAF8F3 0%, #F3EDE0 100%), ${NOISE_BG}`,
                    backgroundBlendMode: 'multiply',
                    border: '1px solid rgba(176, 141, 87, 0.18)',
                    borderRadius: 16,
                    padding: '32px 28px',
                    height: '100%',
                    boxShadow: '0 1px 2px rgba(100,70,20,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}
                >
                  {/* Icon badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(176, 141, 87, 0.1)',
                      border: '1px solid rgba(176, 141, 87, 0.22)',
                      marginBottom: 20,
                      color: '#B08D57',
                    }}
                  >
                    <Icon width={22} height={22} strokeWidth={1.6} />
                  </div>

                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#1A1A1A',
                      margin: '0 0 12px',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: '#4A3E30',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
