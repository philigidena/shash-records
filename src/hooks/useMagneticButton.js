import { useEffect } from 'react'

export const useMagneticButton = (buttonRef) => {
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
  }, [buttonRef])
}

