const GlowEffects = ({ refs }) => {
  const { glow1Ref, glow2Ref, glow3Ref, glow4Ref } = refs

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Top crack - aligned with upper right crack */}
      <div 
        ref={glow1Ref}
        className="absolute top-[8%] right-[15%] w-24 h-64 bg-gradient-to-b from-orange-600/25 via-orange-500/15 to-transparent blur-3xl animate-pulse-glow" 
        style={{ 
          borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
          transform: 'rotate(15deg)'
        }}
      />
      
      {/* Upper-middle crack - diagonal curved */}
      <div 
        ref={glow2Ref}
        className="absolute top-[22%] right-[18%] w-32 h-56 bg-gradient-to-br from-amber-500/20 via-orange-600/12 to-transparent blur-3xl animate-pulse-glow-delayed" 
        style={{ 
          borderRadius: '50% 50% 40% 60% / 40% 60% 40% 60%',
          transform: 'rotate(25deg)',
          animationDelay: '0.8s'
        }}
      />
      
      {/* Middle crack - organic shape following crack pattern */}
      <div 
        className="absolute top-[38%] right-[12%] w-40 h-72 bg-gradient-to-b from-orange-600/22 via-orange-500/14 to-transparent blur-3xl animate-pulse-glow" 
        style={{ 
          borderRadius: '30% 70% 70% 30% / 30% 50% 50% 70%',
          transform: 'rotate(-5deg)',
          animationDelay: '0.4s'
        }}
      />
      
      {/* Middle-lower crack - curved organic */}
      <div 
        ref={glow3Ref}
        className="absolute top-[52%] right-[20%] w-28 h-60 bg-gradient-to-b from-red-500/18 via-orange-500/12 to-transparent blur-2xl animate-pulse-glow-delayed" 
        style={{ 
          borderRadius: '60% 40% 30% 70% / 60% 50% 50% 40%',
          transform: 'rotate(-15deg)',
          animationDelay: '1.2s'
        }}
      />
      
      {/* Lower crack - bottom right organic shape */}
      <div 
        ref={glow4Ref}
        className="absolute bottom-[18%] right-[16%] w-36 h-80 bg-gradient-to-t from-orange-500/16 via-amber-600/10 to-transparent blur-3xl animate-pulse-glow" 
        style={{ 
          borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
          transform: 'rotate(18deg)',
          animationDelay: '1.6s'
        }}
      />
      
      {/* Subtle accent glow - upper area */}
      <div 
        className="absolute top-[15%] right-[25%] w-20 h-40 bg-orange-400/12 blur-2xl animate-pulse-glow-delayed" 
        style={{ 
          borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%',
          transform: 'rotate(35deg)',
          animationDelay: '2.4s'
        }}
      />
      
      {/* Subtle accent glow - mid area */}
      <div 
        className="absolute top-[45%] right-[8%] w-24 h-48 bg-orange-400/10 blur-2xl animate-pulse-glow" 
        style={{ 
          borderRadius: '60% 40% 40% 60% / 50% 50% 50% 50%',
          transform: 'rotate(8deg)',
          animationDelay: '2s'
        }}
      />
    </div>
  )
}

export default GlowEffects

