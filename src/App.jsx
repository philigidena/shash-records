import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const cursorGlowRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)
  const card5Ref = useRef(null)
  const card6Ref = useRef(null)
  const purposeTitleRef = useRef(null)
  const purposeDescRef = useRef(null)
  const whoTitleRef = useRef(null)
  const whoDescRef = useRef(null)
  const whatTitleRef = useRef(null)
  const whatContentRef = useRef(null)
  const getBoardTitleRef = useRef(null)
  const shashTitleRef = useRef(null)
  const valuesRowRef = useRef(null)
  
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)
  const fullText = 'Bending Boundaries'

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const typingSpeed = 80
    
    const typeTimer = setTimeout(() => {
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1))
          index++
        } else {
          clearInterval(timer)
          setTypingComplete(true)
          // Stop cursor blinking after typing is complete
          setTimeout(() => setShowCursor(false), 500)
        }
      }, typingSpeed)
      
      return () => clearInterval(timer)
    }, 500) // Start after initial animations
    
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    
    return () => {
      clearTimeout(typeTimer)
      clearInterval(cursorInterval)
    }
  }, [])

  useEffect(() => {
    // Optimized GSAP animations with GPU acceleration
    const ctx = gsap.context(() => {
      // Navigation entrance
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'transform'
      })
      
      // Logo entrance with floating animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)',
        force3D: true,
        onComplete: () => {
          // Start floating animation after entrance
          gsap.to(logoRef.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            force3D: true
          })
        }
      })
      
      // Subtitle will be handled by typewriter, just set initial state
      gsap.set(subtitleRef.current, {
        opacity: 1
      })
      
      // Description entrance with word stagger
      gsap.from(descriptionRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 2.1, // After typewriter completes
        stagger: 0.05,
        ease: 'power2.out',
        force3D: true
      })
      
      // Button entrance with magnetic effect setup
      gsap.fromTo(buttonRef.current, 
        {
          scale: 0.9,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 2.4,
          ease: 'back.out(1.7)',
          force3D: true
        }
      )

      // Enhanced glow animations - flowing lava effect - GPU optimized
      if (glow1Ref.current) {
        gsap.to(glow1Ref.current, {
          y: 40,
          scaleY: 1.2,
          scaleX: 0.9,
          opacity: 0.6,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          force3D: true
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
          ease: 'power1.inOut',
          force3D: true
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
          ease: 'power1.inOut',
          force3D: true
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
          ease: 'power1.inOut',
          force3D: true
        })
      }

      // Stacked cards entrance animations with ScrollTrigger - Optimized
      if (cardBackRef.current) {
        gsap.fromTo(cardBackRef.current, 
          {
            opacity: 0,
            y: 60,
            rotateX: 10
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: cardBackRef.current,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              fastScrollEnd: true
            }
          }
        )
      }

      if (cardMiddleRef.current) {
        gsap.fromTo(cardMiddleRef.current,
          {
            opacity: 0,
            y: 60,
            rotateX: 10
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: cardMiddleRef.current,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              fastScrollEnd: true
            }
          }
        )
      }

      if (cardFrontRef.current) {
        gsap.fromTo(cardFrontRef.current,
          {
            opacity: 0,
            y: 60,
            rotateX: 10
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: cardFrontRef.current,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              fastScrollEnd: true
            }
          }
        )
      }

      // Add scroll-triggered animations for sections - Optimized
      gsap.utils.toArray('section').forEach((section, i) => {
        if (i > 0) { // Skip first section (hero)
          gsap.fromTo(section,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              force3D: true,
              scrollTrigger: {
                trigger: section,
                start: 'top 92%',
                end: 'top 70%',
                toggleActions: 'play none none reverse',
                fastScrollEnd: true
              }
            }
          )
        }
      })

      // Purpose & Practice section text animations
      if (purposeTitleRef.current) {
        const titleLines = purposeTitleRef.current.querySelectorAll('div')
        gsap.fromTo(titleLines,
          {
            opacity: 0,
            x: -50,
            rotateX: -15
          },
          {
            opacity: 1,
            x: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: purposeTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      if (purposeDescRef.current) {
        gsap.fromTo(purposeDescRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: purposeDescRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Who We Are section text animations
      if (whoTitleRef.current) {
        gsap.fromTo(whoTitleRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 30
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'back.out(1.4)',
            force3D: true,
            scrollTrigger: {
              trigger: whoTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      if (whoDescRef.current) {
        gsap.fromTo(whoDescRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: whoDescRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // What Is New section text animations
      if (whatTitleRef.current) {
        const titleLines = whatTitleRef.current.querySelectorAll('div')
        gsap.fromTo(titleLines,
          {
            opacity: 0,
            x: -80,
            skewX: 10
          },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: whatTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      if (whatContentRef.current) {
        gsap.fromTo(whatContentRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 40
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: whatContentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Get On Board section text animation
      if (getBoardTitleRef.current) {
        const titleLines = getBoardTitleRef.current.querySelectorAll('br')
        const textContent = getBoardTitleRef.current.textContent
        gsap.fromTo(getBoardTitleRef.current,
          {
            opacity: 0,
            scale: 1.1,
            rotateX: 20
          },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: getBoardTitleRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // SHASH card title animation
      if (shashTitleRef.current) {
        const letters = shashTitleRef.current.querySelectorAll('span')
        gsap.fromTo(letters,
          {
            opacity: 0,
            y: 60,
            rotateX: -90,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            force3D: true,
            scrollTrigger: {
              trigger: shashTitleRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Values row animation
      if (valuesRowRef.current) {
        const valueItems = valuesRowRef.current.querySelectorAll('div')
        gsap.fromTo(valueItems,
          {
            opacity: 0,
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: 'power2.out',
            force3D: true,
            scrollTrigger: {
              trigger: valuesRowRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  // Smooth magnetic button effect - Optimized
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    let animationFrameId = null
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.2)
      currentY = lerp(currentY, targetY, 0.2)
      
      button.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      button.style.willChange = 'transform'
      
      if (Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        button.style.willChange = 'auto'
      }
    }

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      
      const maxDistance = 120
      
      if (distance < maxDistance) {
        const strength = Math.min(distance / maxDistance, 1)
        const maxOffset = 12
        targetX = (distanceX / distance) * strength * maxOffset
        targetY = (distanceY / distance) * strength * maxOffset
      } else {
        targetX = 0
        targetY = 0
      }
      
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const handleMouseLeave = () => {
      targetX = 0
      targetY = 0
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const container = button.parentElement
    container.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      container.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
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
      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)'
        }}
      />

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

          {/* Subtitle - Typewriter Effect */}
          <h2 
            ref={subtitleRef}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-wide text-center"
          >
            {typedText}
            <span className={`typewriter-cursor ${!showCursor ? 'invisible' : ''}`}>|</span>
          </h2>

          {/* Description */}
          <p 
            ref={descriptionRef}
            className="text-white/90 text-lg sm:text-xl md:text-2xl mb-12 tracking-wide text-center max-w-3xl"
          >
            <span className="inline-block">Discovering,</span>{' '}
            <span className="inline-block">unearthing,</span>{' '}
            <span className="inline-block">and</span>{' '}
            <span className="inline-block">polishing</span>{' '}
            <span className="inline-block">artistic</span>{' '}
            <span className="inline-block">gems.</span>
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
                  <div ref={shashTitleRef} className="mb-20 md:mb-24 flex justify-center gap-12 md:gap-16 lg:gap-20">
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
                  <div ref={valuesRowRef} className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
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
          <section 
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

          {/* Who We Are Section - Dark Background */}
          <section 
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

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-16 py-32 flex items-center gap-16">
              {/* Left - Image */}
              <div className="flex-shrink-0" style={{ width: '52%' }}>
                <img 
                  src="/who.png" 
                  alt="Microphone" 
                  className="w-full h-auto"
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

          {/* What Is New Section - Updates Background */}
          <section 
            className="relative w-full flex items-center justify-center" 
            style={{ 
              height: '100vh',
              overflow: 'hidden', 
              zIndex: 20, 
              margin: 0,
              padding: 0
            }}
          >
            {/* Background Image - Zoomed */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/updates.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 120%',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0.7)'
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-16 py-32 flex items-center justify-between gap-20">
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
                className="flex-shrink-0 p-12"
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

          {/* Get On Board Section - Stone Background */}
          <section 
            className="relative w-full flex items-center justify-center" 
            style={{ 
              height: '80vh',
              backgroundImage: 'url(/shash_background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              overflow: 'hidden',
              zIndex: 20,
              display: 'flex',
              margin: 0,
              padding: 0,
              lineHeight: 1
            }}
          >
            {/* Dark Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.25) 100%)',
                zIndex: 1
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
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

         {/* Footer Section */}
         <footer className="relative w-full" style={{ backgroundColor: '#1F1F1F', overflow: 'hidden' }}>
           {/* Large SHASH Background Text */}
           <div 
             className="absolute inset-0 flex items-center justify-center pointer-events-none"
             style={{
               fontFamily: 'Akkordeon, sans-serif',
               fontSize: 'clamp(8rem, 25vw, 20rem)',
               fontWeight: 'bold',
               color: 'rgba(255, 255, 255, 0.03)',
               letterSpacing: '0.05em',
               lineHeight: 1
             }}
           >
             SHASH
           </div>

           {/* Footer Content */}
           <div className="relative z-10 max-w-7xl mx-auto px-16 py-20">
             {/* Logo */}
             <div className="flex justify-center mb-16">
               <img 
                 src="/shash_logo_2.png" 
                 alt="Shash Logo" 
                 className="h-16"
               />
             </div>

             {/* Divider */}
             <div className="w-full h-px bg-white/20 mb-12" />

             {/* Main Footer Content */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
               {/* Left - Contact Form */}
               <div>
                 <form className="space-y-4">
                   <input
                     type="text"
                     placeholder="Full Name"
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-orange-500"
                   />
                   <input
                     type="email"
                     placeholder="E-mail"
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-orange-500"
                   />
                   <textarea
                     placeholder="Message"
                     rows="4"
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-orange-500 resize-none"
                   />
                   <button
                     type="submit"
                     className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                   >
                     Send <span>→</span>
                   </button>
                 </form>
                 
                 {/* Social Icons */}
                 <div className="flex gap-4 mt-6">
                   <a href="#" className="text-white hover:text-orange-500 transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                   </a>
                   <a href="#" className="text-white hover:text-orange-500 transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                   </a>
                   <a href="#" className="text-white hover:text-orange-500 transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                   </a>
                   <a href="#" className="text-white hover:text-orange-500 transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                   </a>
                   <a href="#" className="text-white hover:text-orange-500 transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                   </a>
                 </div>
               </div>

               {/* Center - Navigation & Contact */}
               <div className="flex gap-12">
                 <div>
                   <h3 className="text-orange-500 font-bold text-lg mb-4">Navigation</h3>
                   <ul className="space-y-2">
                     <li><a href="#" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                     <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                     <li><a href="#" className="text-white/80 hover:text-white transition-colors">Service</a></li>
                     <li><a href="#" className="text-white/80 hover:text-white transition-colors">Resume</a></li>
                     <li><a href="#" className="text-white/80 hover:text-white transition-colors">Project</a></li>
                   </ul>
                 </div>
                 
                 <div>
                   <h3 className="text-orange-500 font-bold text-lg mb-4">Contact</h3>
                   <ul className="space-y-2">
                     <li><a href="tel:+917738443636" className="text-white/80 hover:text-white transition-colors">+91 7738443636</a></li>
                     <li><a href="mailto:Jaycrea36@gmail.com" className="text-white/80 hover:text-white transition-colors">Jaycrea36@gmail.com</a></li>
                     <li><a href="https://portfolio-jcrea.com" className="text-white/80 hover:text-white transition-colors">Portfolio-jcrea.com</a></li>
                   </ul>
                 </div>
               </div>

               {/* Right - Newsletter */}
               <div>
                 <h3 className="text-orange-500 font-bold text-lg mb-4">Get the latest information</h3>
                 <form className="flex gap-2">
                   <input
                     type="email"
                     placeholder="Email Address"
                     className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-orange-500"
                   />
                   <button
                     type="submit"
                     className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                   >
                     →
                   </button>
                 </form>
               </div>
             </div>

             {/* Divider */}
             <div className="w-full h-px bg-white/20 mb-8" />

             {/* Bottom Footer */}
             <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
               <div>
                 <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
                 <span className="mx-2">|</span>
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               </div>
               <div>
                 Copyright© 2025 Shash Records. All Rights Reserved.
               </div>
             </div>
           </div>
         </footer>
       </div>
     </div>
   )
 }
 
 export default App

