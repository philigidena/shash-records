import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GetOnBoardSection = ({ refs }) => {
  const { getBoardTitleRef } = refs
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = getBoardTitleRef.current

    if (!section || !title) return

    // Title animation - scale and fade
    gsap.fromTo(title,
      { opacity: 0, scale: 0.8, y: 60 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
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
  }, [getBoardTitleRef])

  return (
    <section 
      ref={sectionRef}
      id="contact-us"
      className="relative w-full flex items-center justify-center" 
      style={{ 
        height: '70vh',
        overflow: 'hidden',
        zIndex: 21,
        display: 'block',
        margin: 0,
        marginTop: 0,
        padding: 0,
        fontSize: 0,
        lineHeight: 0
      }}
    >
      {/* Content - No background, transparent */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <h2 
          ref={getBoardTitleRef}
          className="text-center leading-none"
          style={{
            fontFamily: 'Akkordeon, sans-serif',
            fontSize: 'clamp(6rem, 18vw, 14rem)',
            color: '#CC5500',
            letterSpacing: '0.03em',
            fontWeight: 'normal',
            lineHeight: 0.9
          }}
        >
          GET ON<br />BOARD
        </h2>
      </div>
    </section>
  )
}

export default GetOnBoardSection

