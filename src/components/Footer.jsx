import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import Logo from './Logo'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <Logo className="w-12 h-12" />
              <span className="ml-2 text-2xl font-bold text-white font-playfair">Gourmet Delights</span>
            </Link>
            <p className="text-sm text-center md:text-left text-secondary">
              Crafting delicious moments with premium baked goods since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-secondary hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2 text-secondary">
              <li>123 Bakery Street</li>
              <li>Foodville, FD 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@gourmetdelights.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors" aria-label="Pinterest">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-bold">Business Hours</h4>
              <p className="text-sm text-secondary">Mon-Fri: 7am - 7pm</p>
              <p className="text-sm text-secondary">Sat-Sun: 8am - 8pm</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-4 text-sm text-center border-t border-primary-light bg-primary-dark">
        <p>&copy; {currentYear} Gourmet Delights. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
