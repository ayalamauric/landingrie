import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/rie-logo.svg" 
              alt="Rie+ Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-primary-600 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-primary-600 transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-primary-600 transition-colors">
              Cómo Funciona
            </a>
            <a href="#descargar" className="btn-primary">
              Descargar App
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Servicios
              </a>
              <a
                href="#como-funciona"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Cómo Funciona
              </a>
              <a
                href="#testimonios"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Testimonios
              </a>
              <a
                href="#descargar"
                className="block px-3 py-2 btn-primary text-center"
                onClick={toggleMenu}
              >
                Descargar App
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 