import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl font-playfair">
            Artisan Baked Goods for Every Occasion
          </h1>
          <p className="mb-8 text-xl text-white">
            Handcrafted with love using only the finest ingredients. Experience the taste of perfection with our premium baked goods.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
