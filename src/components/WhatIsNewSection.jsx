import { useRef, useEffect } from 'react'
import { gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhatIsNewSection = ({ refs }) => {
  const { whatTitleRef, whatContentRef } = refs
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const title = whatTitleRef.current
    const content = whatContentRef.current

    if (!section || !bg || !title || !content) return

    // Parallax background
    gsap.to(bg, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    // Title animation
    gsap.fromTo(title,
      { opacity: 0, x: -80 },
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

    // Content box animation
    gsap.fromTo(content,
      { opacity: 0, x: 80, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [whatTitleRef, whatContentRef])

  return (
    <section 
      ref={sectionRef}
      id="updates"
      className="relative w-full flex items-center justify-center" 
      style={{ 
        height: '100vh',
        overflow: 'hidden', 
        zIndex: 20, 
        margin: 0,
        marginBottom: '-2px',
        padding: 0,
        display: 'block',
        fontSize: 0,
        lineHeight: 0
      }}
    >
      {/* Background Image - Zoomed */}
      <div 
        ref={bgRef}
        className="absolute"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: 'url(/updates.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 90%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)',
          willChange: 'transform'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-16 flex items-center justify-between gap-20">
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
          className="flex-shrink-0 p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-shash-orange/40"
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

