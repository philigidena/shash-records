import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VinylDiskSection = () => {
  const sectionRef = useRef(null)
  const diskRef = useRef(null)
  const textRef = useRef(null)
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState(0)
  const lastAngleRef = useRef(0)
  const lastTimeRef = useRef(Date.now())
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const disk = diskRef.current
    const text = textRef.current

    if (!section || !disk || !text) return

    // Animate text opacity on scroll
    gsap.fromTo(text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1
        }
      }
    )

    // Calculate angle from center
    const getAngle = (e) => {
      const rect = disk.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      return Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
    }

    const handleMouseDown = (e) => {
      setIsDragging(true)
      setVelocity(0)
      lastAngleRef.current = getAngle(e)
      lastTimeRef.current = Date.now()
      disk.style.cursor = 'grabbing'
    }

    const handleMouseMove = (e) => {
      if (!isDragging) return
      
      const currentAngle = getAngle(e)
      const currentTime = Date.now()
      
      let angleDiff = currentAngle - lastAngleRef.current
      
      // Handle angle wrap-around
      if (angleDiff > 180) angleDiff -= 360
      if (angleDiff < -180) angleDiff += 360
      
      const timeDiff = currentTime - lastTimeRef.current
      
      setRotation(prev => prev + angleDiff)
      
      // Calculate velocity for momentum
      if (timeDiff > 0) {
        setVelocity(angleDiff / timeDiff * 16) // Normalize to ~60fps
      }
      
      lastAngleRef.current = currentAngle
      lastTimeRef.current = currentTime
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      disk.style.cursor = 'grab'
    }

    disk.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      disk.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [isDragging])

  // Apply momentum/inertia or continuous spin
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        if (Math.abs(velocity) > 0.1) {
          // Apply momentum when there's velocity
          setRotation(prev => prev + velocity)
          setVelocity(prev => prev * 0.95) // Friction
        } else {
          // Default continuous spin when no interaction
          setRotation(prev => prev + 0.05) // Slow continuous rotation
        }
        
        animationFrameRef.current = requestAnimationFrame(animate)
      }
      animationFrameRef.current = requestAnimationFrame(animate)
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }
  }, [isDragging, velocity])

  return (
    <section ref={sectionRef} className="relative w-full flex items-end justify-center pb-0 px-4 bg-black" style={{ height: '100vh', overflow: 'visible', zIndex: 1 }}>
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
          <div ref={textRef} className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ overflow: 'visible' }}>
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
          <div 
            ref={diskRef} 
            className="absolute inset-0 flex items-center justify-center select-none"
            style={{
              transform: `rotate(${rotation}deg)`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/disk.png" 
              alt="Vinyl Record" 
              className="w-full h-full object-contain drop-shadow-2xl pointer-events-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VinylDiskSection


