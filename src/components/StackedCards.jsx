import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Make ScrollTrigger globally accessible for navigation
if (typeof window !== 'undefined') {
  window.ScrollTrigger = ScrollTrigger
}

// Card data for each letter
const cardData = [
  {
    id: 'intro',
    type: 'intro',
    title: 'SHASH',
    values: [
      { icon: '/Singularity.png', text: 'Singularity' },
      { icon: '/Humility.png', text: 'Humility' },
      { icon: '/Adaptivity.png', text: 'Adaptivity' },
      { icon: '/Synergy.png', text: 'Synergy' },
      { icon: '/Hustle.png', text: 'Hustle' },
    ]
  },
  {
    id: 's1',
    type: 'letter',
    letter: 'S',
    title: 'Singularity',
    icon: '/Singularity.png',
    description: 'We strive to be singular in what we do, by embracing authenticity and creativity.'
  },
  {
    id: 'h1',
    type: 'letter',
    letter: 'H',
    title: 'Humility',
    icon: '/Humility.png',
    description: 'We stay humble about our competitive advantages, believing in shared growth & continued learning.'
  },
  {
    id: 'a',
    type: 'letter',
    letter: 'A',
    title: 'Adaptivity',
    icon: '/Adaptivity.png',
    description: 'We adapt to changing atmospheres without loosing our touch of innovativeness and originality.'
  },
  {
    id: 's2',
    type: 'letter',
    letter: 'S',
    title: 'Synergy',
    icon: '/Synergy.png',
    description: 'Our collaboration is evidence by itself that synergy is the leading cause of breakthroughs.'
  },
  {
    id: 'h2',
    type: 'letter',
    letter: 'H',
    title: 'Hustle',
    icon: '/Hustle.png',
    description: 'Hard-work, commitment and perseverance are our driving ideals to reach where we\'re headed.'
  }
]

const CardContent = ({ card, shashTitleRef, valuesRowRef }) => {
  if (card.type === 'intro') {
  return (
      <div className="relative z-10 h-full flex flex-col items-center px-10 py-16">
        {/* SHASH Letters - Positioned slightly above center */}
        <div 
          ref={shashTitleRef}
          className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center"
          style={{ 
            top: '35%',
            gap: 'clamp(2rem, 8vw, 6rem)'
          }}
        >
          {card.title.split('').map((letter, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center"
              style={{ 
                minWidth: 'clamp(3.5rem, 10vw, 8rem)',
                width: 'clamp(3.5rem, 10vw, 8rem)'
              }}
            >
              <span 
                className="text-white font-black"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Icon-Text Pairs - Positioned closer to bottom */}
        <div 
          ref={valuesRowRef}
          className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center"
          style={{ 
            bottom: '15%',
            gap: 'clamp(2rem, 8vw, 6rem)'
          }}
        >
          {card.values.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2.5 group cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ 
                minWidth: 'clamp(3.5rem, 10vw, 8rem)',
                width: 'clamp(3.5rem, 10vw, 8rem)'
              }}
            >
              <img 
                src={item.icon}
                alt={item.text}
                className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 object-contain"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5))'
                }}
              />
              <span className="text-white group-hover:text-shash-orange text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Letter card content
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center px-12 py-16">
      {/* Glowing Icon - Top */}
      <div className="mb-8 relative">
        <div 
          className="absolute inset-0"
          style={{
            filter: 'blur(25px)',
            opacity: 0.6,
            background: 'radial-gradient(circle, rgba(255, 107, 26, 0.6) 0%, transparent 70%)',
            transform: 'scale(1.5)'
          }}
        />
        <img 
          src={card.icon}
          alt={card.title}
          className="relative z-10 object-contain"
          style={{
            width: 'clamp(2.5rem, 5vw, 3.5rem)',
            height: 'clamp(2.5rem, 5vw, 3.5rem)',
            filter: 'brightness(0) invert(1) drop-shadow(0 0 15px rgba(255, 107, 26, 0.8)) drop-shadow(0 0 30px rgba(255, 107, 26, 0.4))',
          }}
        />
      </div>

      {/* Large Letter - Positioned Behind Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08, zIndex: 0 }}>
        <span 
          className="text-white font-black"
          style={{
            fontSize: 'clamp(15rem, 35vw, 28rem)',
            lineHeight: 1,
            userSelect: 'none'
          }}
        >
          {card.letter}
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-white font-black mb-8 text-center relative z-10"
        style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          textShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}
      >
        {card.title}
      </h3>

      {/* Decorative Line */}
      <div 
        className="mb-8 relative z-10"
        style={{
          width: 'clamp(60px, 15vw, 120px)',
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #FF6B1A 50%, transparent 100%)',
          boxShadow: '0 0 10px rgba(255, 107, 26, 0.5)'
        }}
      />

      {/* Description */}
      <p 
        className="text-white/95 text-center max-w-2xl leading-relaxed relative z-10 font-medium"
        style={{
          fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
          lineHeight: '1.9',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          letterSpacing: '0.02em'
        }}
      >
        {card.description}
      </p>
    </div>
  )
}

const Card = ({ card, index, shashTitleRef, valuesRowRef, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="card-item absolute top-0 left-0 right-0 bottom-0"
      data-index={index}
      style={{
        background: 'linear-gradient(145deg, rgba(75, 75, 75, 0.85), rgba(65, 65, 65, 0.8))',
        backdropFilter: 'blur(50px) saturate(200%)',
        WebkitBackdropFilter: 'blur(50px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '32px',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d'
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
          
      {/* Stone texture */}
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
          
      {/* Enhanced corner glow - Layer 1 (Intense) */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-10%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle at center, rgba(255, 107, 26, 0.45) 0%, rgba(255, 107, 26, 0.25) 25%, rgba(255, 107, 26, 0.12) 45%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

      {/* Enhanced corner glow - Layer 2 (Spread) */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-20%',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle at center, rgba(255, 107, 26, 0.3) 0%, rgba(255, 107, 26, 0.15) 20%, rgba(255, 107, 26, 0.08) 40%, rgba(255, 107, 26, 0.04) 60%, transparent 80%)',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }}
          />

      {/* Enhanced corner glow - Layer 3 (Subtle outer) */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-30%',
              right: '-30%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(255, 107, 26, 0.2) 0%, rgba(255, 107, 26, 0.1) 15%, rgba(255, 107, 26, 0.05) 30%, transparent 60%)',
              filter: 'blur(80px)',
              pointerEvents: 'none'
            }}
          />

      <CardContent card={card} shashTitleRef={index === 0 ? shashTitleRef : null} valuesRowRef={index === 0 ? valuesRowRef : null} />
    </div>
  )
}

const StackedCards = ({ refs }) => {
  const { shashTitleRef, valuesRowRef } = refs
  const sectionRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardRefs.current.filter(Boolean)

    if (!section || cards.length === 0) return

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.trigger === section) t.kill()
    })

    const ctx = gsap.context(() => {
      // Set initial state for all cards with stacked effect
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          scale: 1 - (i * 0.01), // Subtle scale for depth
          zIndex: cards.length - i,
          force3D: true,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d'
        })
      })

      const scrollDistance = window.innerHeight * 0.7 // Distance per card
      const initialDelay = window.innerHeight * 0.3 // Extra time to view intro card

      // Create individual scroll trigger for each card with realistic flip
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return // Last card stays visible

        const cardStart = initialDelay + (i * scrollDistance)
        const cardEnd = cardStart + scrollDistance

        // Enhanced 3D flip animation
        gsap.to(card, {
          y: -300,
          z: -200, // Move further back
          rotationX: -25, // More dramatic tilt
          rotationY: -5, // Slight side rotation for realism
          opacity: 0,
          scale: 0.6,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${cardStart} top`,
            end: () => `top+=${cardEnd} top`,
            scrub: 0.8, // Smoother scrub
            onEnter: () => {
              // Smoothly move card to back as it starts flipping
              gsap.to(card, { 
                zIndex: -10 - i,
                duration: 0.3,
                ease: 'none'
              })
            },
            onLeaveBack: () => {
              // Restore z-index when scrolling back
              gsap.to(card, { 
                zIndex: cards.length - i,
                duration: 0.3,
                ease: 'none'
              })
            }
          }
        })
      })

      // Pin the section with longer duration to show intro card
      const totalScroll = initialDelay + (cards.length * scrollDistance)
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section 
      id="explore-shash"
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: '100vh',
        padding: '0',
        margin: '0',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
      }}
    >
      <div 
        ref={cardsContainerRef}
        className="relative w-full max-w-6xl mx-auto px-4"
        style={{
          height: 'min(600px, 70vh)',
          perspective: '2500px',
          perspectiveOrigin: 'center 40%',
          transformStyle: 'preserve-3d'
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            shashTitleRef={shashTitleRef}
            valuesRowRef={valuesRowRef}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  )
}

export default StackedCards
