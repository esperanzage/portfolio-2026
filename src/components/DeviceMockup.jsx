export default function DeviceMockup({ tintFrom, tintTo, accentColor, isLarge = false }) {
  const height = isLarge ? '100%' : '100%'

  return (
    <div
      style={{
        width: '100%',
        height,
        background: `linear-gradient(135deg, ${tintFrom} 0%, ${tintTo} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isLarge ? '48px' : '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: 'absolute',
          width: '60%',
          paddingBottom: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}12 0%, transparent 70%)`,
          top: '-10%',
          right: '-10%',
          pointerEvents: 'none',
        }}
      />
      {/* Browser frame */}
      <div
        style={{
          width: '100%',
          maxWidth: isLarge ? 800 : 520,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(8px)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 16px',
            background: 'rgba(255,255,255,0.5)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFB3A7' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFD580' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#AADE9C' }} />
          <div
            style={{
              flex: 1,
              height: 20,
              background: 'rgba(0,0,0,0.06)',
              borderRadius: 10,
              marginLeft: 8,
            }}
          />
        </div>
        {/* Content area */}
        <div style={{ padding: isLarge ? 32 : 20 }}>
          {/* Simulated UI rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                height: isLarge ? 24 : 16,
                width: '60%',
                background: `${accentColor}30`,
                borderRadius: 8,
              }}
            />
            <div
              style={{
                height: isLarge ? 14 : 10,
                width: '80%',
                background: 'rgba(0,0,0,0.08)',
                borderRadius: 6,
              }}
            />
            <div
              style={{
                height: isLarge ? 14 : 10,
                width: '70%',
                background: 'rgba(0,0,0,0.06)',
                borderRadius: 6,
              }}
            />
            <div style={{ height: isLarge ? 20 : 14 }} />
            <div style={{ display: 'flex', gap: 10 }}>
              <div
                style={{
                  height: isLarge ? 36 : 24,
                  width: isLarge ? 120 : 80,
                  background: `${accentColor}50`,
                  borderRadius: 8,
                }}
              />
              <div
                style={{
                  height: isLarge ? 36 : 24,
                  width: isLarge ? 100 : 70,
                  background: 'rgba(0,0,0,0.08)',
                  borderRadius: 8,
                }}
              />
            </div>
            {isLarge && (
              <>
                <div style={{ height: 16 }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      style={{
                        height: 60,
                        background: i % 2 === 0 ? `${accentColor}15` : 'rgba(0,0,0,0.05)',
                        borderRadius: 8,
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
