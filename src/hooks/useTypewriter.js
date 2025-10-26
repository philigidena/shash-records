import { useEffect, useState } from 'react'

export const useTypewriter = (text, typingSpeed = 80, startDelay = 500) => {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    let index = 0
    
    const typeTimer = setTimeout(() => {
      const timer = setInterval(() => {
        if (index < text.length) {
          setTypedText(text.substring(0, index + 1))
          index++
        } else {
          clearInterval(timer)
          setTypingComplete(true)
          setTimeout(() => setShowCursor(false), 500)
        }
      }, typingSpeed)
      
      return () => clearInterval(timer)
    }, startDelay)
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    
    return () => {
      clearTimeout(typeTimer)
      clearInterval(cursorInterval)
    }
  }, [text, typingSpeed, startDelay])

  return { typedText, showCursor, typingComplete }
}

