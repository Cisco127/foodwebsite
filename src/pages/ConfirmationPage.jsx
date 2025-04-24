import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaExclamationTriangle, FaHome, FaShoppingCart } from 'react-icons/fa'

function ConfirmationPage() {
  const [orderInfo, setOrderInfo] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Get order info from localStorage
    const savedOrder = localStorage.getItem('lastOrder')
    
    if (savedOrder) {
      try {
        setOrderInfo(JSON.parse(savedOrder))
      } catch (error) {
        console.error('Failed to parse order info:', error)
        navigate('/')
      }
    } else {
      // No order info found, redirect to home
      navigate('/')
    }
  }, [navigate])
  
  if (!orderInfo) {
    return null
  }
  
  const { orderNumber, customerName, deliveryDate, items, subtotal, tax, total, emailSent } = orderInfo
  
  return (
    <div className="pt-20">
      <div className="container py-12">
        <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-6 text-center">
            <FaCheckCircle className="mb-4 text-green-500" size={64} />
            <h1 className="mb-2 text-3xl font-bold text-primary font-playfair">Order Confirmed!</h1>
            <p className="text-xl text-gray-700">
              Thank you for your order, {customerName}!
            </p>
          </div>
          
          <div className="p-4 mb-6 bg-secondary rounded-md">
            <h2 className="mb-2 text-xl font-semibold">Order Details</h2>
            <p><strong>Order Number:</strong> #{orderNumber}</p>
            <p><strong>Delivery Date:</strong> {new Date(deliveryDate).toLocaleDateString()}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
            <div className="mb-4 space-y-2">
              {items.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2 space-y-1 border-t border-gray-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {!emailSent && (
            <div className="p-4 mb-6 text-yellow-800 bg-yellow-100 rounded-md">
              <div className="flex items-center mb-2">
                <FaExclamationTriangle className="mr-2" />
                <span className="font-semibold">Note:</span>
              </div>
              <p className="text-sm">
                We couldn't send a confirmation email. Please save your order number for reference.
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/" className="flex-1 btn btn-primary">
              <FaHome className="mr-2" />
              Return to Home
            </Link>
            <Link to="/menu" className="flex-1 btn btn-secondary">
              <FaShoppingCart className="mr-2" />
              Order Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage
