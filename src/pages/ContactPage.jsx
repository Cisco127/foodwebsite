import ContactForm from '../components/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative py-16 bg-center bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}>
        <div className="container text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-playfair">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We'd love to hear from you! Reach out with any questions, feedback, or special orders.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-primary font-playfair">Get in Touch</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="mb-6 text-2xl font-bold text-primary font-playfair">Contact Information</h2>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-6 space-y-4">
                <div className="flex">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Our Location</h3>
                    <p className="text-gray-600">123 Bakery Street, Foodville, FD 12345</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone Number</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email Address</h3>
                    <p className="text-gray-600">info@gourmetdelights.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7am - 7pm</p>
                    <p className="text-gray-600">Saturday - Sunday: 8am - 8pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="mb-4 font-semibold">Find Us</h3>
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98784492426285!3d40.75797623440235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5b1!4m5!3m4!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9856644!16zL20vMDdxZHI!5e0!3m2!1sen!2sus!4v1686321978868!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
