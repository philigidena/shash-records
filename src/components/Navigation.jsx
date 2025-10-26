import { forwardRef } from 'react'

const navItems = ['HOME', 'ABOUT', 'MUSIC', 'EVENTS', 'GALLERY', 'CONTACT']

const Navigation = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="w-full py-6 px-8">
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
  )
})

Navigation.displayName = 'Navigation'

export default Navigation

