import EyebrowLabel from './EyebrowLabel.jsx'
import FadeIn from './FadeIn.jsx'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(72px, 8vw, 140px) 0',
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F5EDE0 40%, #F0E8DC 70%, #FAFAF8 100%)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 80,
            alignItems: 'center',
          }}
          className="lg:grid-cols-[3fr_2fr]"
        >
          {/* Left: text */}
          <div>
            <FadeIn>
              <EyebrowLabel>About Me</EyebrowLabel>
            </FadeIn>

            <FadeIn delay={80}>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#1A1A1A',
                  margin: '24px 0 28px',
                }}
              >
                Not just a designer.
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <div style={{ maxWidth: 560 }}>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: '#3A3A3A',
                    margin: '0 0 20px',
                  }}
                >
                  I work at the intersection of design, product management, and engineering. Over nearly 10 years, I've led end-to-end product initiatives across B2B platforms — from user research and roadmapping to design systems and production.
                </p>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: '#3A3A3A',
                    margin: '0 0 20px',
                  }}
                >
                  I think in systems. I care about scalable solutions. And I love collaborating with engineering teams to solve hard problems.
                </p>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: '#3A3A3A',
                    margin: 0,
                  }}
                >
                  Currently at Perceptyx, I work across multiple product teams, own our design system Vision, and explore ways to enhance our design process with AI.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div style={{ marginTop: 48 }}>
                <EyebrowLabel>Let's Connect</EyebrowLabel>
                <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href="mailto:esperanzage@gmail.com"
                    className="link-underline"
                    style={{ fontSize: 15, fontWeight: 600, color: '#B08D57', textDecoration: 'none', letterSpacing: '0.01em' }}
                  >
                    Email →
                  </a>
                  <a
                    href="https://linkedin.com/in/esperanzage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                    style={{ fontSize: 15, fontWeight: 500, color: '#666666', textDecoration: 'none' }}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: skills */}
          <FadeIn delay={160}>
            <div style={{ position: 'relative', padding: '32px 16px' }}>
              {/* Gradient blobs */}
              <div style={{ position: 'absolute', top: 0, left: '10%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,141,87,0.22) 0%, transparent 70%)', filter: 'blur(48px)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '10%', right: 0, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(210,190,155,0.28) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '40%', left: '5%', width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,220,200,0.3) 0%, transparent 70%)', filter: 'blur(36px)', pointerEvents: 'none' }} />

              {/* Tags */}
              <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[
                  'Design Systems', 'UI/UX', 'Prototyping', 'Design Tokens',
                  'Design Ops', 'User Research', 'Synthesis', 'Strategy',
                  'Figma', 'Claude Code', 'React', 'Roadmapping',
                  'B2B SaaS', 'Stakeholders',
                ].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#3A3A3A',
                      background: 'rgba(250,248,245,0.65)',
                      border: '1px solid rgba(176,141,87,0.18)',
                      borderRadius: 40,
                      padding: '7px 18px',
                      backdropFilter: 'blur(6px)',
                      lineHeight: 1.4,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Years callout */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 20, paddingLeft: 4 }}>
                <span style={{ fontSize: 52, fontWeight: 700, color: '#B08D57', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  ~10
                </span>
                <span style={{ fontSize: 13, color: '#999', fontWeight: 400 }}>years experience</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
