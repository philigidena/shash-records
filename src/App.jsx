import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function App() {
  const titleRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    // GSAP animation example
    gsap.from(titleRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'power3.out'
    })

    gsap.to(boxRef.current, {
      duration: 2,
      rotation: 360,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 
          ref={titleRef}
          className="text-6xl font-bold text-white mb-8 drop-shadow-lg"
        >
          Shash Records
        </h1>
        
        <div className="flex justify-center mb-8">
          <div
            ref={boxRef}
            className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg shadow-2xl"
          />
        </div>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          React + Vite + Tailwind CSS + GSAP
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn Vite
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn React
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn Tailwind
          </a>
          <a
            href="https://greensock.com/gsap/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn GSAP
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

