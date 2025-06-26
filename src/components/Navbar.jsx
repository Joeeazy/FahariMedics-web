import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jfif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Define toggle functions
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowDropdown(false) // Close dropdown when mobile menu opens
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const closeAllMenus = () => {
    setIsOpen(false)
    setShowDropdown(false)
  }

  const mainLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/facilities', label: 'Facilities' }
  ]

  const secondaryLinks = [
    { path: '/testimonies', label: 'Testimonials' },
    { path: '/faq', label: 'FAQ' },
    { path: '/partners', label: 'Partners' }
  ]

  return (
    <nav className={`fixed w-full z-50 py-2 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Branding */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <div className="w-12 h-12">
              <img 
                src={logo} 
                alt="FahariMedics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-800 mb-1">
                FahariMedics Hospital
              </h1>
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                <a href="tel:0700000000" className="flex items-center hover:text-blue-700">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0700 000 000
                </a>
                <a href="tel:0700001000" className="flex items-center hover:text-blue-700">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0700 001 000
                </a>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {mainLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 font-medium ${location.pathname === link.path ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-blue-700'}`}
                onClick={closeAllMenus}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="px-3 py-2 font-medium text-gray-700 hover:text-blue-700 flex items-center"
              >
                More
                <svg className={`w-4 h-4 ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  {secondaryLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeAllMenus}
                      className={`block px-4 py-2 ${location.pathname === link.path ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={closeAllMenus}
                    className={`block px-4 py-2 ${location.pathname === '/contact' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/appointment" 
              className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
              onClick={closeAllMenus}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {mainLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeAllMenus}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {secondaryLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeAllMenus}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/contact' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                Contact
              </Link>
              
              <Link
                to="/appointment"
                onClick={closeAllMenus}
                className="block w-full mt-2 px-4 py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-800"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar