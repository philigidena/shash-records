const GetOnBoardSection = ({ refs }) => {
  const { getBoardTitleRef } = refs

  return (
    <section 
      className="relative w-full flex items-center justify-center" 
      style={{ 
        height: '80vh',
        backgroundImage: 'url(/shash_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        zIndex: 20,
        display: 'flex',
        margin: 0,
        marginTop: '-1px',
        padding: 0,
        lineHeight: 1
      }}
    >
      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.25) 100%)',
          zIndex: 1
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 
          ref={getBoardTitleRef}
          className="text-center leading-none"
          style={{
            fontFamily: 'Akkordeon, sans-serif',
            fontSize: 'clamp(6rem, 18vw, 14rem)',
            color: '#CC5500',
            letterSpacing: '0.03em',
            fontWeight: 'normal',
            lineHeight: 0.9
          }}
        >
          GET ON<br />BOARD
        </h2>
      </div>
    </section>
  )
}

export default GetOnBoardSection

