import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartSummary() {
  const { totalItems, totalAmount } = useCart()
  
  // Calculate tax (assuming 8.5%)
  const taxRate = 0.085
  const taxAmount = totalAmount * taxRate
  
  // Calculate grand total
  const grandTotal = totalAmount + taxAmount
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 text-xl font-bold">Order Summary</h3>
      
      <div className="mb-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8.5%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>
        <div className="pt-2 mt-2 border-t border-gray-200">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <Link 
        to="/checkout" 
        className={`w-full btn btn-primary text-center block ${totalItems === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-disabled={totalItems === 0}
      >
        Proceed to Checkout
      </Link>
      
      <Link to="/menu" className="block mt-4 text-center text-primary hover:underline">
        Continue Shopping
      </Link>
    </div>
  )
}

export default CartSummary
