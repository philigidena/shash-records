import { forwardRef, useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Explore Shash', href: '#explore-shash' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact Us', href: '#contact-us' }
]

const Navigation = forwardRef((props, ref) => {
  const [showLogo, setShowLogo] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const stackedCardsSection = document.getElementById('explore-shash')
      const heroSection = document.getElementById('home')
      
      if (stackedCardsSection) {
        const rect = stackedCardsSection.getBoundingClientRect()
        // Show logo when stacked cards section is in view
        setShowLogo(rect.top <= 100)
      }

      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        // Check if we're still in the hero section (with some buffer)
        const inHero = heroRect.bottom > window.innerHeight * 0.3
        setIsInHeroSection(inHero)
        
        // If leaving hero section and not hovered, retract menu
        if (!inHero && !isHovered) {
          setIsExpanded(false)
        } else if (inHero) {
          // Always expanded in hero section
          setIsExpanded(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHovered])

  const handleClick = (e, href) => {
    e.preventDefault()
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Ensure ScrollTrigger updates after smooth scroll completes
        if (href === '#explore-shash') {
          setTimeout(() => {
            if (window.ScrollTrigger) {
              window.ScrollTrigger.refresh()
            }
          }, 1000)
        }
      }
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Only retract if not in hero section
    if (!isInHeroSection) {
      setIsExpanded(false)
    }
  }

  return (
    <nav 
      ref={ref} 
      className="fixed top-0 left-0 right-0 w-full py-6 px-8 z-50 pointer-events-none"
    >
      <div 
        className="flex justify-end items-center gap-2 px-4 py-2 ml-auto max-w-fit pointer-events-auto transition-all duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          transform: isExpanded ? 'translateX(0)' : 'translateX(calc(100% - 145px))',
        }}
      >
        {/* Navigation Items */}
        <div 
          className="flex items-center gap-2 transition-all duration-500"
          style={{
            opacity: isExpanded ? 1 : 0,
            width: isExpanded ? 'auto' : '0',
            overflow: 'hidden'
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="relative px-3 py-2 text-white text-[10px] md:text-xs font-medium tracking-[0.15em] hover:text-shash-orange transition-all duration-300 cursor-pointer uppercase whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sticky Logo - Right Side */}
        <div 
          className="transition-all duration-500 flex-shrink-0"
          style={{
            opacity: showLogo ? 1 : 0.3,
            transform: showLogo ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <img 
            src="/shash_logo_2.png" 
            alt="Shash Logo" 
            className="h-8 md:h-9 object-contain cursor-pointer"
            onClick={(e) => handleClick(e, '#home')}
          />
        </div>
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation


