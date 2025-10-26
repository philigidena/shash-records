import { useTypewriter } from '../hooks/useTypewriter'
import { useMagneticButton } from '../hooks/useMagneticButton'

const HeroSection = ({ refs }) => {
  const { logoRef, subtitleRef, descriptionRef, buttonRef } = refs
  const { typedText, showCursor } = useTypewriter('Bending Boundaries')
  
  useMagneticButton(buttonRef)

  const handleExploreClick = () => {
    const stackedCardsSection = document.getElementById('explore-shash')
    if (stackedCardsSection) {
      stackedCardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Ensure ScrollTrigger updates after smooth scroll completes
      setTimeout(() => {
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh()
        }
      }, 1000)
    }
  }

  return (
    <div id="home" className="flex-1 flex flex-col items-center justify-center px-4 pb-16 pt-32">
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
        onClick={handleExploreClick}
        className="bg-shash-orange hover:bg-orange-600 text-white font-semibold px-14 py-4 rounded-full text-lg md:text-xl tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-shash-orange/50 opacity-100"
      >
        Explore Shash
      </button>
    </div>
  )
}

export default HeroSection

