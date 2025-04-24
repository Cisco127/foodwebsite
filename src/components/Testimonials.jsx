import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Enthusiast',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: 'The cakes from Gourmet Delights made my daughter\'s wedding absolutely perfect. Not only were they stunning to look at, but the taste was divine. Everyone was asking where we got them!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Local Business Owner',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'I order pastries from Gourmet Delights for all our office meetings. The quality is consistently excellent, and their delivery is always on time. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    quote: 'As someone who reviews bakeries professionally, I can say with confidence that Gourmet Delights stands out for their attention to detail and innovative flavors. Their sourdough bread is the best in town!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Regular Customer',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: 'Saturday mornings aren\'t complete without a box of Gourmet Delights\' pastries. My family looks forward to it every week. The chocolate croissants are our absolute favorite!',
    rating: 4
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const currentTestimonial = testimonials[currentIndex]
  
  return (
    <section className="section" style={{ 
      backgroundImage: 'linear-gradient(rgba(139, 90, 43, 0.9), rgba(139, 90, 43, 0.9)), url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center text-white font-playfair">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 bg-white rounded-lg shadow-lg">
            <FaQuoteLeft className="absolute text-primary opacity-10 top-8 left-8" size={60} />
            
            <div className="flex flex-col items-center text-center">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="object-cover w-24 h-24 mb-4 border-4 rounded-full border-primary"
              />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < currentTestimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                    size={20} 
                  />
                ))}
              </div>
              
              <p className="mb-6 text-lg italic text-gray-700">{currentTestimonial.quote}</p>
              
              <h3 className="text-xl font-bold text-primary">{currentTestimonial.name}</h3>
              <p className="text-gray-600">{currentTestimonial.role}</p>
            </div>
            
            <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
              <button 
                onClick={goToPrevious}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full bg-primary hover:bg-primary-dark focus:outline-none"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={goToNext}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full bg-primary hover:bg-primary-dark focus:outline-none"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
