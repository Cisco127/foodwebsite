import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'

function CheckoutPage() {
  const { items } = useCart()
  const navigate = useNavigate()
  
  // Redirect to cart if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart')
    }
  }, [items, navigate])
  
  if (items.length === 0) {
    return null
  }
  
  return (
    <div className="pt-20">
      <div className="container py-12">
        <h1 className="mb-8 text-3xl font-bold text-primary font-playfair">Checkout</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-semibold">Delivery Information</h2>
              <CheckoutForm />
            </div>
          </div>
          
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
