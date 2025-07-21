import React from 'react'

const ScrollToTop: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className="scroll-to-top" 
      aria-label="ページトップへ"
      onClick={scrollToTop}
    >
      <span className="arrow-up">&#x25B2;</span>
    </button>
  )
}

export default ScrollToTop 