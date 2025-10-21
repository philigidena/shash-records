import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function App() {
  const logoRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const navRef = useRef(null)
  const glow1Ref = useRef(null)
  const glow2Ref = useRef(null)
  const glow3Ref = useRef(null)
  const glow4Ref = useRef(null)
  const cardBackRef = useRef(null)
  const cardMiddleRef = useRef(null)
  const cardFrontRef = useRef(null)

  useEffect(() => {
    // Simplified GSAP animations to avoid glitches
    const ctx = gsap.context(() => {
      // Navigation entrance
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      
      // Logo entrance
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)'
      })
      
      // Subtitle entrance
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      })
      
      // Description entrance
      gsap.from(descriptionRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: 'power2.out'
      })
      
      // Button entrance
      gsap.fromTo(buttonRef.current, 
        {
          scale: 0.9,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          ease: 'back.out(1.7)'
        }
      )

      // Enhanced glow animations - flowing lava effect
      if (glow1Ref.current) {
        gsap.to(glow1Ref.current, {
          y: 40,
          scaleY: 1.2,
          scaleX: 0.9,
          opacity: 0.6,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      if (glow2Ref.current) {
        gsap.to(glow2Ref.current, {
          x: -12,
          y: 30,
          scaleY: 1.15,
          opacity: 0.7,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      if (glow3Ref.current) {
        gsap.to(glow3Ref.current, {
          y: -35,
          scaleY: 1.3,
          scaleX: 0.85,
          opacity: 0.5,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      if (glow4Ref.current) {
        gsap.to(glow4Ref.current, {
          y: -45,
          scaleY: 1.25,
          opacity: 0.55,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      // Stacked cards entrance animations
      if (cardBackRef.current) {
        gsap.fromTo(cardBackRef.current, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.out'
          }
        )
      }

      if (cardMiddleRef.current) {
        gsap.fromTo(cardMiddleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.7,
            ease: 'power2.out'
          }
        )
      }

      if (cardFrontRef.current) {
        gsap.fromTo(cardFrontRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.9,
            ease: 'power2.out'
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const navItems = ['HOME', 'ABOUT', 'MUSIC', 'EVENTS', 'GALLERY', 'CONTACT']
  
  const valueItems = [
    { icon: '🎯', text: 'Singularity' },
    { icon: '🤝', text: 'Humility' },
    { icon: '🔄', text: 'Adaptivity' },
    { icon: '🔗', text: 'Singularity' },
    { icon: '⚡', text: 'Singularity' },
  ]

  return (
    <div 
      className="min-h-screen font-raleway relative overflow-hidden"
      style={{
        backgroundImage: 'url(/shash_background.png)',
        backgroundSize: '200%',
        backgroundPosition: '10% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Throbbing Glow Animation Following Crack Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
            {/* Navigation */}
            <nav ref={navRef} className="w-full py-6 px-8">
              <div className="flex justify-end items-center gap-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-white text-[10px] md:text-xs font-medium tracking-[0.15em] hover:text-shash-orange transition-all duration-300 cursor-pointer uppercase"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
          {/* Logo */}
          <div ref={logoRef} className="mb-10">
            <img 
              src="/shash-logo.png" 
              alt="Shash Logo" 
              className="w-100 h-100 md:w-100 md:h-100 lg:w-90 lg:h-90 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Subtitle */}
          <h2 
            ref={subtitleRef}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-wide text-center"
          >
            Bending Boundaries
          </h2>

          {/* Description */}
          <p 
            ref={descriptionRef}
            className="text-white/90 text-lg sm:text-xl md:text-2xl mb-12 tracking-wide text-center max-w-3xl"
          >
            Discovering, unearthing, and polishing artistic gems.
          </p>

           {/* CTA Button */}
           <button 
             ref={buttonRef}
             className="bg-shash-orange hover:bg-orange-600 text-white font-semibold px-14 py-4 rounded-full text-lg md:text-xl tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-shash-orange/50 opacity-100"
           >
             Explore Shash
           </button>
         </div>

         {/* Stacked Glassmorphic Cards Section */}
         <section className="relative w-full py-20 md:py-32 px-4">
           <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] mx-auto">
             
             {/* Back Card */}
             <div
               ref={cardBackRef}
               className="absolute top-0 left-0 right-0 bottom-0 mx-auto"
               style={{
                 width: '85%',
                 background: 'linear-gradient(145deg, rgba(55, 55, 55, 0.75), rgba(45, 45, 45, 0.7))',
                 backdropFilter: 'blur(40px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                 transform: 'translateY(-24px) translateX(-24px) rotate(-3deg)',
                 border: '1px solid rgba(255, 255, 255, 0.12)',
                 borderRadius: '32px',
                 boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                 overflow: 'hidden'
               }}
             >
               <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
               <div 
                 style={{ 
                   position: 'absolute',
                   bottom: '-5%',
                   right: '-5%',
                   width: '55%',
                   height: '55%',
                   backgroundImage: 'url(/stone-texture.png)',
                   backgroundSize: 'contain',
                   backgroundPosition: 'bottom right',
                   backgroundRepeat: 'no-repeat',
                   opacity: 0.35,
                   mixBlendMode: 'overlay'
                 }}
               />
               {/* Smooth glow */}
               <div 
                 style={{
                   position: 'absolute',
                   bottom: '-20%',
                   right: '-20%',
                   width: '80%',
                   height: '80%',
                   background: 'radial-gradient(circle, rgba(255, 107, 26, 0.2) 0%, rgba(255, 107, 26, 0.1) 25%, rgba(255, 107, 26, 0.05) 50%, transparent 75%)',
                   filter: 'blur(40px)',
                   pointerEvents: 'none'
                 }}
               />
             </div>

             {/* Middle Card */}
             <div
               ref={cardMiddleRef}
               className="absolute top-0 left-0 right-0 bottom-0 mx-auto"
               style={{
                 width: '92%',
                 background: 'linear-gradient(145deg, rgba(65, 65, 65, 0.8), rgba(55, 55, 55, 0.75))',
                 backdropFilter: 'blur(45px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(45px) saturate(180%)',
                 transform: 'translateY(-12px) translateX(14px) rotate(2deg)',
                 border: '1px solid rgba(255, 255, 255, 0.15)',
                 borderRadius: '32px',
                 boxShadow: '0 25px 70px rgba(0, 0, 0, 0.65)',
                 overflow: 'hidden'
               }}
             >
               <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/65 to-transparent" />
               <div 
                 style={{ 
                   position: 'absolute',
                   bottom: '-5%',
                   right: '-5%',
                   width: '55%',
                   height: '55%',
                   backgroundImage: 'url(/stone-texture.png)',
                   backgroundSize: 'contain',
                   backgroundPosition: 'bottom right',
                   backgroundRepeat: 'no-repeat',
                   opacity: 0.4,
                   mixBlendMode: 'overlay'
                 }}
               />
               {/* Smooth glow */}
               <div 
                 style={{
                   position: 'absolute',
                   bottom: '-20%',
                   right: '-20%',
                   width: '80%',
                   height: '80%',
                   background: 'radial-gradient(circle, rgba(255, 107, 26, 0.18) 0%, rgba(255, 107, 26, 0.09) 25%, rgba(255, 107, 26, 0.04) 50%, transparent 75%)',
                   filter: 'blur(40px)',
                   pointerEvents: 'none'
                 }}
               />
             </div>

             {/* Front Card - Main Card */}
             <div
               ref={cardFrontRef}
               className="absolute top-0 left-0 right-0 bottom-0"
               style={{
                 background: 'linear-gradient(145deg, rgba(75, 75, 75, 0.85), rgba(65, 65, 65, 0.8))',
                 backdropFilter: 'blur(50px) saturate(200%)',
                 WebkitBackdropFilter: 'blur(50px) saturate(200%)',
                 border: '1px solid rgba(255, 255, 255, 0.18)',
                 borderRadius: '32px',
                 boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                 overflow: 'hidden'
               }}
             >
               {/* Orange accent line */}
               <div 
                 style={{
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   height: '3px',
                   background: 'linear-gradient(90deg, transparent 0%, #FF6B1A 50%, transparent 100%)'
                 }}
               />
               
               {/* Stone texture - bottom right corner */}
               <div 
                 style={{ 
                   position: 'absolute',
                   bottom: '-5%',
                   right: '-5%',
                   width: '60%',
                   height: '60%',
                   backgroundImage: 'url(/stone-texture.png)',
                   backgroundSize: 'contain',
                   backgroundPosition: 'bottom right',
                   backgroundRepeat: 'no-repeat',
                   opacity: 0.5,
                   mixBlendMode: 'overlay'
                 }}
               />
               
               {/* Smooth, soft glow - no sharp edges */}
               <div 
                 style={{
                   position: 'absolute',
                   bottom: '-25%',
                   right: '-25%',
                   width: '90%',
                   height: '90%',
                   background: 'radial-gradient(circle, rgba(255, 107, 26, 0.25) 0%, rgba(255, 107, 26, 0.12) 20%, rgba(255, 107, 26, 0.06) 40%, rgba(255, 107, 26, 0.03) 60%, transparent 80%)',
                   filter: 'blur(50px)',
                   pointerEvents: 'none'
                 }}
               />

               {/* Card Content */}
               <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 py-16">
                 {/* SHASH Title - spaced to align with values */}
                 <div className="mb-20 md:mb-24 flex justify-center gap-12 md:gap-16 lg:gap-20">
                   {'SHASH'.split('').map((letter, index) => (
                     <span 
                       key={index}
                       className="text-white font-black"
                       style={{
                         fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                         textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                       }}
                     >
                       {letter}
                     </span>
                   ))}
                 </div>

                 {/* Values Row */}
                 <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
                   {valueItems.map((item, index) => (
                     <div 
                       key={index}
                       className="flex items-center gap-2.5 group cursor-pointer hover:scale-105 transition-transform duration-300"
                     >
                       <span 
                         className="text-2xl md:text-3xl transition-all duration-300"
                         style={{
                           filter: 'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5))'
                         }}
                       >
                         {item.icon}
                       </span>
                       <span className="text-white group-hover:text-shash-orange text-xs md:text-sm font-medium tracking-wide transition-colors duration-300">
                         {item.text}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Vinyl Disk Section - Top Half Only */}
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

         {/* Purpose & Practice Section - Orange Background */}
         <section className="relative w-full min-h-screen bg-shash-orange flex items-center justify-start" style={{ overflow: 'hidden', zIndex: 20 }}>
           {/* White crack pattern borders on all edges */}
           
           {/* TOP edge */}
           <div 
             className="absolute top-0 left-0 right-0"
             style={{
               height: '15%',
               backgroundImage: 'url(/pattern.png)',
               backgroundSize: '100% 400%',
               backgroundPosition: 'center 0%',
               backgroundRepeat: 'no-repeat',
               filter: 'brightness(0) invert(1)',
               opacity: 1
             }}
           />
           
           {/* BOTTOM edge */}
           <div 
             className="absolute bottom-0 left-0 right-0"
             style={{
               height: '15%',
               backgroundImage: 'url(/pattern.png)',
               backgroundSize: '100% 400%',
               backgroundPosition: 'center 100%',
               backgroundRepeat: 'no-repeat',
               filter: 'brightness(0) invert(1)',
               opacity: 1
             }}
           />
           
           {/* LEFT edge */}
           <div 
             className="absolute top-0 left-0 bottom-0"
             style={{
               width: '8%',
               backgroundImage: 'url(/pattern.png)',
               backgroundSize: '500% 100%',
               backgroundPosition: '0% center',
               backgroundRepeat: 'no-repeat',
               filter: 'brightness(0) invert(1)',
               opacity: 1
             }}
           />
           
           {/* RIGHT edge */}
           <div 
             className="absolute top-0 right-0 bottom-0"
             style={{
               width: '8%',
               backgroundImage: 'url(/pattern.png)',
               backgroundSize: '500% 100%',
               backgroundPosition: '100% center',
               backgroundRepeat: 'no-repeat',
               filter: 'brightness(0) invert(1)',
               opacity: 1
             }}
           />

           {/* Content */}
           <div className="relative z-10 w-full px-20 md:px-32 py-24">
             {/* Title */}
             <h2 
               className="text-white leading-[0.85] mb-8"
               style={{
                 fontFamily: 'Akkordeon, sans-serif',
                 fontSize: 'clamp(4.5rem, 12vw, 9rem)',
                 letterSpacing: '0.01em',
                 fontWeight: 'normal'
               }}
             >
               PURPOSE &<br />PRACTICE.
             </h2>

             {/* Description */}
             <p 
               className="text-white font-medium max-w-2xl leading-relaxed"
               style={{
                 fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                 lineHeight: '1.6'
               }}
             >
               We Are Culture Exporters Shaping Music That Feels True To Home While Resonating Globally. Building Stronger East African Music Ecosystem Connecting Artists To Opportunities, Bending Boundaries. Unearthing Hidden Gems.
             </p>
           </div>
         </section>
       </div>
     </div>
   )
 }
 
 export default App

