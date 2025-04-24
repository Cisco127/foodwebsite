import { useState } from 'react'
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  
  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, value))
  }
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    })
    toast.success(`${product.name} added to cart!`)
  }
  
  return (
    <div className="food-card">
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
              onClick={() => handleQuantityChange(quantity - 1)}
              aria-label="Decrease quantity"
            >
              <FaMinus className="w-3 h-3" />
            </button>
            <input 
              type="number" 
              min="1"
              value={quantity} 
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              className="quantity-input"
              aria-label="Quantity"
            />
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(quantity + 1)}
              aria-label="Increase quantity"
            >
              <FaPlus className="w-3 h-3" />
            </button>
          </div>
          <button 
            className="btn btn-primary"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
