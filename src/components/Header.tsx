import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-bg-black border-b border-border-color shadow-sm sticky top-0 z-40">
      <div className="header-inner">
        <div className="logo flex items-center h-20">
          <Link to="/">
            <img 
              src="/images/hd_logo.svg" 
              alt="アライランドスケーピングロゴ" 
              width="388" 
              height="158"
            />
          </Link>
        </div>
        <nav className="nav-menu flex justify-end">
          <ul className={isMenuOpen ? 'open' : ''}>
            <li>
              <Link to="/" onClick={closeMenu}>ホーム</Link>
            </li>
            <li>
              <Link to="/message" onClick={closeMenu}>代表挨拶</Link>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/arailandscaping" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </nav>
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          aria-label="メニューを開く"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header 