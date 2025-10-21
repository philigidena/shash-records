import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function App() {
  const logoRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    // Simplified GSAP animations to avoid glitches
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)'
      })
      
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      })
      
      gsap.from(descriptionRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: 'power2.out'
      })
      
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
    })

    return () => ctx.revert()
  }, [])

  const navItems = ['HOME', 'ABOUT', 'MUSIC', 'EVENTS', 'GALLERY', 'CONTACT']

  return (
    <div 
      className="min-h-screen font-raleway relative"
      style={{
        backgroundImage: 'url(/shash_background.png)',
        backgroundSize: '150%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Navigation */}
        <nav ref={navRef} className="w-full bg-black/30 backdrop-blur-sm">
          <div className="flex justify-center items-center gap-6 md:gap-10 py-4 px-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-white text-[10px] md:text-xs font-medium tracking-[0.15em] hover:text-shash-orange transition-colors duration-300 cursor-pointer uppercase"
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
      </div>
    </div>
  )
}

export default App

