import React, { useState } from 'react'
import logo from '../../Logo.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-center items-center py-4 relative">
          {/* Logo and Company Name - Always Centered */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Blackbear Creative Studio Logo" className="h-10 w-10 object-contain" />
            <div className="text-base font-light text-black whitespace-nowrap" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif', fontWeight: 300 }}>
              Blackbear Creative Studio
            </div>
          </div>

          {/* Home Button - Positioned Absolutely on Right */}
          {location.pathname === '/book' && (
            <div className="absolute right-0">
              <Link to="/" className="btn-electric">
                Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header 