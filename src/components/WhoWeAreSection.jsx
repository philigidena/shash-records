const WhoWeAreSection = ({ refs }) => {
  const { whoTitleRef, whoDescRef } = refs

  return (
    <section 
      className="relative w-full flex items-center justify-center" 
      style={{ 
        height: '100vh',
        backgroundColor: '#1F1F1F', 
        overflow: 'hidden', 
        zIndex: 20 
      }}
    >
      {/* Orange crack pattern - Large, rotated, behind image */}
      <div 
        className="absolute"
        style={{
          width: '1457px',
          height: '983px',
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          transform: 'rotate(-120deg)',
          transformOrigin: 'center',
          top: '20%',
          left: '12%',
          marginTop: '-491.5px',
          marginLeft: '-728.5px',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 py-32 flex items-center gap-16">
        {/* Left - Image */}
        <div className="flex-shrink-0" style={{ width: '52%' }}>
          <img 
            src="/who.png" 
            alt="Microphone" 
            className="w-full h-auto"
            style={{
              border: '4px solid #FF6B1A',
              borderRadius: '20px'
            }}
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          {/* Title */}
          <h2 
            ref={whoTitleRef}
            className="text-white mb-10"
            style={{
              fontFamily: 'Akkordeon, sans-serif',
              fontSize: 'clamp(5rem, 12vw, 9rem)',
              letterSpacing: '0.05em',
              fontWeight: 'normal',
              lineHeight: 1
            }}
          >
            WHO WE ARE
          </h2>

          {/* Description */}
          <p 
            ref={whoDescRef}
            className="text-white font-normal leading-relaxed"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              lineHeight: '1.8'
            }}
          >
            SHASH is an independent East African Record label building a living bridge between local culture and global stages. developing artists, crafting high-quality music and visual work, and creating sustainable commercial pathways so creators can be heard and earn a living from their art.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

