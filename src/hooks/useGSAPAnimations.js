import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAPAnimations = (refs) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const {
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
      } = refs

      // Navigation entrance
      if (navRef?.current) {
        gsap.from(navRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          force3D: true,
          clearProps: 'transform'
        })
      }
      
      // Logo entrance with floating animation
      if (logoRef?.current) {
        gsap.from(logoRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'back.out(1.7)',
          force3D: true,
          onComplete: () => {
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
      }
      
      // Subtitle will be handled by typewriter
      if (subtitleRef?.current) {
        gsap.set(subtitleRef.current, {
          opacity: 1
        })
      }
      
      // Description entrance with word stagger
      if (descriptionRef?.current?.children) {
        gsap.from(descriptionRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: 2.1,
          stagger: 0.05,
          ease: 'power2.out',
          force3D: true
        })
      }
      
      // Button entrance
      if (buttonRef?.current) {
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
      }

      // Enhanced glow animations
      if (glow1Ref?.current) {
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

      if (glow2Ref?.current) {
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

      if (glow3Ref?.current) {
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

      if (glow4Ref?.current) {
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

      // Stacked cards animations
      if (cardBackRef?.current) {
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

      if (cardMiddleRef?.current) {
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

      if (cardFrontRef?.current) {
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

      // Section animations
      gsap.utils.toArray('section').forEach((section, i) => {
        if (i > 0) {
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

      // Purpose section animations
      if (purposeTitleRef?.current) {
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

      if (purposeDescRef?.current) {
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

      // Who We Are animations
      if (whoTitleRef?.current) {
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

      if (whoDescRef?.current) {
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

      // What Is New animations
      if (whatTitleRef?.current) {
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

      if (whatContentRef?.current) {
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

      // Get On Board animation
      if (getBoardTitleRef?.current) {
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

      // SHASH title animation
      if (shashTitleRef?.current) {
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
      if (valuesRowRef?.current) {
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
  }, [refs])
}


