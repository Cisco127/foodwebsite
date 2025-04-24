import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import AboutSection from '../components/AboutSection'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function HomePage() {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center transition-all duration-300 bg-secondary rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-primary">
                <FaShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients to create our delicious baked goods.
              </p>
            </div>
            
            <div className="p-6 text-center transition-all duration-300 bg-secondary rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-primary">
                <FaPhone className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Easy Ordering</h3>
              <p className="text-gray-600">
                Order online or by phone for pickup or delivery at your convenience.
              </p>
            </div>
            
            <div className="p-6 text-center transition-all duration-300 bg-secondary rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-primary">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Local Delivery</h3>
              <p className="text-gray-600">
                We offer delivery to your doorstep within our service area.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-16 text-center text-white bg-primary">
        <div className="container">
          <h2 className="mb-6 text-4xl font-bold font-playfair">Ready to Order?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Browse our full menu and place your order today. We can't wait to serve you!
          </p>
          <Link to="/menu" className="btn bg-white text-primary hover:bg-secondary">
            View Our Menu
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
