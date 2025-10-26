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
    description: 'We focus on what makes each artist unique. Your distinct voice, your story, your sound—that\'s what we amplify. No cookie-cutter approaches, just authentic artistic identity.'
  },
  {
    id: 'h1',
    type: 'letter',
    letter: 'H',
    title: 'Humility',
    description: 'We stay grounded and open to learning. Success comes from respecting the craft, the culture, and the community. We listen, adapt, and grow together with our artists.'
  },
  {
    id: 'a',
    type: 'letter',
    letter: 'A',
    title: 'Adaptivity',
    description: 'The music landscape evolves rapidly, and so do we. We stay flexible, innovative, and responsive to change—always finding new ways to connect artists with their audience.'
  },
  {
    id: 's2',
    type: 'letter',
    letter: 'S',
    title: 'Synergy',
    description: 'Together we achieve more. We build collaborative ecosystems where artists, producers, and creative minds work in harmony to create something greater than the sum of its parts.'
  },
  {
    id: 'h2',
    type: 'letter',
    letter: 'H',
    title: 'Hustle',
    description: 'We put in the work. Consistent, dedicated, relentless effort towards excellence. No shortcuts, just commitment to making great music and building sustainable careers.'
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
      {/* Large Letter */}
      <div className="mb-8">
        <span 
          className="text-shash-orange font-black"
          style={{
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            textShadow: '0 10px 40px rgba(255, 107, 26, 0.5)',
            lineHeight: 1
          }}
        >
          {card.letter}
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-white font-black mb-6 text-center"
            style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          textShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
          letterSpacing: '0.05em'
        }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p 
        className="text-white/90 text-center max-w-2xl leading-relaxed"
            style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          lineHeight: '1.8'
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
          
      {/* Glow effect */}
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
