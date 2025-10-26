import { useRef } from 'react'
import { useGSAPAnimations } from './hooks/useGSAPAnimations'
import Navigation from './components/Navigation'
import GlowEffects from './components/GlowEffects'
import HeroSection from './components/HeroSection'
import StackedCards from './components/StackedCards'
import VinylDiskSection from './components/VinylDiskSection'
import PurposePracticeSection from './components/PurposePracticeSection'
import WhoWeAreSection from './components/WhoWeAreSection'
import WhatIsNewSection from './components/WhatIsNewSection'
import GetOnBoardSection from './components/GetOnBoardSection'
import Footer from './components/Footer'

function App() {
  // All refs for GSAP animations
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
  const purposeTitleRef = useRef(null)
  const purposeDescRef = useRef(null)
  const whoTitleRef = useRef(null)
  const whoDescRef = useRef(null)
  const whatTitleRef = useRef(null)
  const whatContentRef = useRef(null)
  const getBoardTitleRef = useRef(null)
  const shashTitleRef = useRef(null)
  const valuesRowRef = useRef(null)
  
  // Initialize GSAP animations
  useGSAPAnimations({
    navRef,
    logoRef,
    subtitleRef,
    descriptionRef,
    buttonRef,
    glow1Ref,
    glow2Ref,
    glow3Ref,
    glow4Ref,
    cardBackRef,
    cardMiddleRef,
    cardFrontRef,
    purposeTitleRef,
    purposeDescRef,
    whoTitleRef,
    whoDescRef,
    whatTitleRef,
    whatContentRef,
    getBoardTitleRef,
    shashTitleRef,
    valuesRowRef
  })

  return (
    <div 
      className="min-h-screen font-raleway relative"
      style={{
        backgroundImage: 'url(/shash_background.png)',
        backgroundSize: '200%',
        backgroundPosition: '10% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#000',
        overflowX: 'hidden'
      }}
    >
      {/* Dark Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)',
          zIndex: 0
        }}
      />

      {/* Throbbing Glow Animation Following Crack Patterns */}
      <GlowEffects refs={{ glow1Ref, glow2Ref, glow3Ref, glow4Ref }} />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
            {/* Navigation */}
        <Navigation ref={navRef} />

        {/* Hero Content */}
        <HeroSection refs={{ logoRef, subtitleRef, descriptionRef, buttonRef }} />

         {/* Stacked Glassmorphic Cards Section */}
        <StackedCards refs={{ cardBackRef, cardMiddleRef, cardFrontRef, shashTitleRef, valuesRowRef }} />

         {/* Vinyl Disk Section - Top Half Only */}
        <VinylDiskSection />

          {/* Purpose & Practice Section - Orange Background */}
        <PurposePracticeSection refs={{ purposeTitleRef, purposeDescRef }} />

          {/* Who We Are Section - Dark Background */}
        <WhoWeAreSection refs={{ whoTitleRef, whoDescRef }} />

          {/* What Is New Section - Updates Background */}
        <WhatIsNewSection refs={{ whatTitleRef, whatContentRef }} />

          {/* Get On Board Section - Stone Background */}
        <GetOnBoardSection refs={{ getBoardTitleRef }} />

         {/* Footer Section */}
        <Footer />
       </div>
     </div>
   )
 }
 
 export default App
