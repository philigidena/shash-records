const GlowEffects = ({ refs }) => {
  const { glow1Ref, glow2Ref, glow3Ref, glow4Ref } = refs

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Top crack - elongated vertical glow */}
      <div 
        ref={glow1Ref}
        className="absolute top-[5%] right-[8%] w-32 h-96 bg-gradient-to-b from-orange-600/30 via-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse-glow rotate-[25deg]" 
      />
      
      {/* Upper-middle crack - diagonal */}
      <div 
        ref={glow2Ref}
        className="absolute top-[20%] right-[12%] w-40 h-80 bg-gradient-to-br from-amber-500/25 via-orange-600/15 to-transparent rounded-full blur-3xl animate-pulse-glow-delayed rotate-[15deg]" 
      />
      
      {/* Middle crack - strong glow point */}
      <div 
        className="absolute top-[35%] right-[10%] w-64 h-64 bg-orange-600/30 rounded-full blur-3xl animate-pulse-glow" 
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Middle-lower crack - curved pattern */}
      <div 
        ref={glow3Ref}
        className="absolute top-[45%] right-[15%] w-36 h-72 bg-gradient-to-b from-red-500/25 via-orange-500/18 to-transparent rounded-full blur-2xl animate-pulse-glow-delayed rotate-[-10deg]" 
      />
      
      {/* Lower crack - bottom right */}
      <div 
        ref={glow4Ref}
        className="absolute bottom-[20%] right-[12%] w-48 h-96 bg-gradient-to-t from-orange-500/20 via-amber-600/15 to-transparent rounded-full blur-3xl animate-pulse-glow rotate-[20deg]" 
        style={{ animationDelay: '1s' }}
      />
      
      {/* Additional accent glows for realism */}
      <div 
        className="absolute top-[12%] right-[18%] w-24 h-48 bg-red-600/20 rounded-full blur-2xl animate-pulse-glow-delayed rotate-[30deg]" 
        style={{ animationDelay: '2s' }}
      />
      
      <div 
        className="absolute top-[55%] right-[8%] w-28 h-56 bg-orange-400/15 rounded-full blur-2xl animate-pulse-glow rotate-[5deg]" 
        style={{ animationDelay: '1.5s' }}
      />
    </div>
  )
}

export default GlowEffects

