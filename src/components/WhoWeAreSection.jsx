import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhoWeAreSection = ({ refs }) => {
  const { whoTitleRef, whoDescRef } = refs
  const sectionRef = useRef(null)
  const patternRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const pattern = patternRef.current
    const image = imageRef.current
    const title = whoTitleRef.current
    const desc = whoDescRef.current

    if (!section || !pattern || !image || !title || !desc) return

    // No pattern animation - kept static

    // Image slide in from left
    gsap.fromTo(image,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Title slide in and fade
    gsap.fromTo(title,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Description fade in
    gsap.fromTo(desc,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [whoTitleRef, whoDescRef])

  return (
    <section 
      ref={sectionRef}
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
        ref={patternRef}
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
      
      {/* Animated subtle gradient glow overlay */}
      <div 
        className="absolute pointer-events-none animate-pulse-glow"
        style={{
          width: '1457px',
          height: '983px',
          background: 'radial-gradient(circle at center, rgba(255, 107, 26, 0.15) 0%, rgba(255, 107, 26, 0.08) 30%, transparent 60%)',
          transform: 'rotate(-120deg)',
          transformOrigin: 'center',
          top: '20%',
          left: '12%',
          marginTop: '-491.5px',
          marginLeft: '-728.5px',
          zIndex: 2,
          mixBlendMode: 'screen',
          filter: 'blur(30px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 py-32 flex items-center gap-16">
        {/* Left - Image */}
        <div ref={imageRef} className="flex-shrink-0 group" style={{ width: '52%' }}>
          <img 
            src="/who.png" 
            alt="Microphone" 
            className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-shash-orange/50"
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

