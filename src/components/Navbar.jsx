import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import Logo from './Logo'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="w-12 h-12" />
          <span className="ml-2 text-2xl font-bold text-primary font-playfair">Gourmet Delights</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="relative">
                <FaShoppingCart className="w-6 h-6 text-primary" />
                {totalItems > 0 && (
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <NavLink to="/cart" className="relative mr-4">
            <FaShoppingCart className="w-6 h-6 text-primary" />
            {totalItems > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {totalItems}
              </span>
            )}
          </NavLink>
          
          <button 
            className="text-primary focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 p-4 mt-2 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink to="/" className="block nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="block nav-link">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
