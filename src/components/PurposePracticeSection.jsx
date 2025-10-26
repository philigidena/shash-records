import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PurposePracticeSection = ({ refs }) => {
  const { purposeTitleRef, purposeDescRef } = refs
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = purposeTitleRef.current
    const desc = purposeDescRef.current

    if (!section || !title || !desc) return

    // Text animations - fast and clean, no reverse
    gsap.fromTo(title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(desc,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [purposeTitleRef, purposeDescRef])

  return (
    <section 
      ref={sectionRef}
      id="about-us"
      className="relative w-full bg-shash-orange flex flex-col items-center justify-center" 
      style={{ 
        height: '100vh',
        overflow: 'hidden', 
        zIndex: 20 
      }}
    >
      {/* White crack pattern - LEFT side - Rotated 5 degrees */}
      <div 
        className="absolute"
        style={{
          width: '800px',
          height: '120%',
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0) invert(1)',
          opacity: 1,
          transform: 'rotate(5deg)',
          transformOrigin: 'center',
          top: '-10%',
          left: '-300px'
        }}
      />
      
      {/* White crack pattern - RIGHT side - Rotated 25 degrees */}
      <div 
        className="absolute"
        style={{
          width: '800px',
          height: '120%',
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0) invert(1)',
          opacity: 1,
          transform: 'rotate(-25deg)',
          transformOrigin: 'center',
          top: '-10%',
          right: '-300px'
        }}
      />

      {/* Content - Centered with offset */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-24 px-16">
        {/* Title - PURPOSE & PRACTICE with offset */}
        <div className="w-full max-w-5xl mb-12">
          <h2 
            ref={purposeTitleRef}
            className="text-white"
            style={{
              fontFamily: 'Akkordeon, sans-serif',
              fontSize: 'clamp(6rem, 18vw, 15rem)',
              letterSpacing: '0.02em',
              fontWeight: 'normal',
              lineHeight: 0.85
            }}
          >
            <div style={{ textAlign: 'center', marginLeft: '-5%' }}>PURPOSE &</div>
            <div style={{ textAlign: 'center', marginLeft: '25%' }}>PRACTICE.</div>
          </h2>
        </div>

        {/* Description - Below title */}
        <div className="max-w-2xl">
          <p 
            ref={purposeDescRef}
            className="text-white font-medium text-left leading-relaxed"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              lineHeight: '1.65'
            }}
          >
            We Are Culture Exporters Shaping Music That Feels True To Home While Resonating Globally. Building Stronger East African Music Ecosystem Connecting Artists To Opportunities, Bending Boundaries. Unearthing Hidden Gems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PurposePracticeSection

