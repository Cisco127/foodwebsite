import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }
  
  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-img"
      />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button 
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <FaMinus className="w-3 h-3" />
          </button>
          <input 
            type="number" 
            min="1"
            value={item.quantity} 
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className="quantity-input"
            aria-label="Quantity"
          />
          <button 
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
        <p className="mx-4 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        <button 
          className="p-2 text-white transition-all duration-300 bg-red-500 rounded-full hover:bg-red-600"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default CartItem
