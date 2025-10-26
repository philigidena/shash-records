const VinylDiskSection = () => {
  return (
    <section className="relative w-full flex items-end justify-center pb-0 px-4 bg-black" style={{ height: '100vh', overflow: 'visible', zIndex: 1 }}>
      {/* Orange crack pattern on top of dark background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-end max-w-7xl mx-auto w-full">
        {/* Rotating Vinyl Disk - Bigger size, positioned at bottom, half will be covered */}
        <div className="relative w-[1600px] h-[1600px] max-w-[160vw] max-h-[160vw]" style={{ marginBottom: '-800px', overflow: 'visible' }}>
          {/* Orange Gradient Background for Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ overflow: 'visible' }}>
            <svg className="w-full h-full" viewBox="0 0 1000 1000" style={{ overflow: 'visible' }}>
              <defs>
                {/* Define the circular path for text */}
                <path
                  id="textPath"
                  d="M 500, 500 m -400, 0 a 400,400 0 1,1 800,0 a 400,400 0 1,1 -800,0"
                />
                {/* Define gradient for the background band */}
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF6B1A', stopOpacity: 0.9 }} />
                  <stop offset="50%" style={{ stopColor: '#FF8C42', stopOpacity: 0.95 }} />
                  <stop offset="100%" style={{ stopColor: '#FF6B1A', stopOpacity: 0.9 }} />
                </linearGradient>
              </defs>
              
              {/* Orange gradient band behind text */}
              <circle 
                cx="500" 
                cy="500" 
                r="400" 
                fill="none" 
                stroke="url(#orangeGradient)" 
                strokeWidth="80"
                opacity="0.95"
              />
              
              {/* White text on the path */}
              <text 
                style={{
                  fontSize: '32px',
                  fontWeight: 900,
                  letterSpacing: '0.35em',
                  fill: '#FFFFFF',
                  fontFamily: 'Raleway, sans-serif',
                  textTransform: 'uppercase'
                }}
              >
                <textPath href="#textPath" startOffset="0%">
                  COMMITTED CUSTODIANS FOR AFRICAN ARTISTS
                </textPath>
              </text>
            </svg>
          </div>

          {/* Vinyl Disk with Rotation */}
          <div className="absolute inset-0 flex items-center justify-center vinyl-disk-rotate">
            <img 
              src="/disk.png" 
              alt="Vinyl Record" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VinylDiskSection

