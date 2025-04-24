import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'
import { featuredProducts } from '../data/products'

function FeaturedProducts() {
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState(
    featuredProducts.reduce((acc, product) => {
      acc[product.id] = 1
      return acc
    }, {})
  )
  
  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, value)
    }))
  }
  
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: quantities[product.id]
    })
    toast.success(`${product.name} added to cart!`)
  }
  
  return (
    <section className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map(product => (
            <div key={product.id} className="food-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="food-card-img"
              />
              <div className="food-card-body">
                <h3 className="food-card-title">{product.name}</h3>
                <p className="mb-2 text-gray-600">{product.description}</p>
                <p className="food-card-price">${product.price.toFixed(2)}</p>
                <div className="food-card-actions">
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="w-3 h-3" />
                    </button>
                    <input 
                      type="number" 
                      min="1"
                      value={quantities[product.id]} 
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                      className="quantity-input"
                      aria-label="Quantity"
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="w-3 h-3" />
                    </button>
                  </div>
                  <button 
                    className="btn btn-primary"<pivotalAction type="file" filePath="src/components/FeaturedProducts.jsx">
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/menu" className="btn btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
