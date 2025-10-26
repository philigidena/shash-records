const WhatIsNewSection = ({ refs }) => {
  const { whatTitleRef, whatContentRef } = refs

  return (
    <section 
      className="relative w-full flex items-center justify-center" 
      style={{ 
        height: '100vh',
        overflow: 'hidden', 
        zIndex: 20, 
        margin: 0,
        padding: 0,
        display: 'flex'
      }}
    >
      {/* Background Image - Zoomed */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/updates.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 80%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 flex items-center justify-between gap-20">
        {/* Left - "WHAT IS NEW" Title */}
        <div className="flex-shrink-0">
          <h2 
            ref={whatTitleRef}
            className="leading-none"
            style={{
              fontFamily: 'Akkordeon, sans-serif',
              color: '#CC5500',
              letterSpacing: '0.02em',
              fontWeight: 'normal',
              lineHeight: 0.9
            }}
          >
            <div style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>WHAT IS</div>
            <div style={{ fontSize: 'clamp(8rem, 19vw, 19rem)' }}>NEW</div>
          </h2>
        </div>

        {/* Right - Orange Content Box */}
        <div 
          ref={whatContentRef}
          className="flex-shrink-0 p-12"
          style={{
            backgroundColor: '#CC5500',
            borderRadius: '20px',
            width: '693px',
            minHeight: '510px'
          }}
        >
          {/* Title */}
          <h3 
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 'bold',
              lineHeight: 1.2
            }}
          >
            Creative Season Is Here.
          </h3>

          {/* Description */}
          <div className="text-white space-y-4" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.7' }}>
            <p>
              This December, we're introducing the label through two powerful voices:
            </p>
            
            <p>
              <strong>Ane</strong> — A storyteller at heart. His Hip Hop/Trap concept album unfolds through a 30-episode cinematic social series — textured lyrics, intimate visuals, and stories that build toward each single.
            </p>
            
            <p>
              <strong>Arn</strong> — The sound of contemporary R&B and Pop. Stylish visuals, polished performance, and culture-shaping moments defining the next wave of East African Pop.
            </p>
            
            <p>
              We're crafting authentic brands, music, and stories — timing everything for maximum cultural impact.
            </p>
            
            <p className="font-semibold">
              Bold visuals. Quiet authenticity. Measurable momentum.<br />
              Watch this space for updates and first listens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsNewSection

