import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

function CheckoutForm() {
  const navigate = useNavigate()
  const { items, totalAmount, clearCart } = useCart()
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    deliveryDate: '',
    specialInstructions: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required'
    }
    
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Delivery date is required'
    } else {
      const selectedDate = new Date(formData.deliveryDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.deliveryDate = 'Delivery date cannot be in the past'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const sendOrderConfirmationEmail = async () => {
    // Format order items for email
    const orderItems = items.map(item => 
      `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\\n')
    
    const taxAmount = totalAmount * 0.085
    const grandTotal = totalAmount + taxAmount
    
    const emailParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      order_details: orderItems,
      subtotal: totalAmount.toFixed(2),
      tax: taxAmount.toFixed(2),
      total: grandTotal.toFixed(2),
      delivery_date: new Date(formData.deliveryDate).toLocaleDateString(),
      delivery_address: `${formData.address}, ${formData.city}, ${formData.zipCode}`
    }
    
    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID',
        'YOUR_EMAILJS_TEMPLATE_ID',
        emailParams,
        'YOUR_EMAILJS_PUBLIC_KEY'
      )
      return true
    } catch (error) {
      console.error('Failed to send email:', error)
      return false
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // In a real application, you would send the order to your backend here
      // For this example, we'll simulate a successful order
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Send confirmation email
      const emailSent = await sendOrderConfirmationEmail()
      
      // Store order info in localStorage for the confirmation page
      const orderInfo = {
        orderNumber: Math.floor(100000 + Math.random() * 900000),
        customerName: formData.fullName,
        deliveryDate: formData.deliveryDate,
        items,
        subtotal: totalAmount,
        tax: totalAmount * 0.085,
        total: totalAmount + (totalAmount * 0.085),
        emailSent
      }
      
      localStorage.setItem('lastOrder', JSON.stringify(orderInfo))
      
      // Clear the cart
      clearCart()
      
      // Navigate to confirmation page
      navigate('/confirmation')
    } catch (error) {
      console.error('Error processing order:', error)
      toast.error('There was a problem processing your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Get tomorrow's date for min delivery date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDeliveryDate = tomorrow.toISOString().split('T')[0]
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
          />
          {errors.fullName && <p className="form-error">{errors.fullName}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="deliveryDate" className="form-label">Delivery Date *</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            min={minDeliveryDate}
            value={formData.deliveryDate}
            onChange={handleChange}
            className={`form-input ${errors.deliveryDate ? 'border-red-500' : ''}`}
          />
          {errors.deliveryDate && <p className="form-error">{errors.deliveryDate}</p>}
        </div>
        
        <div className="form-group md:col-span-2">
          <label htmlFor="address" className="form-label">Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`form-input ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && <p className="form-error">{errors.address}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="city" className="form-label">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`form-input ${errors.city ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="form-error">{errors.city}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="zipCode" className="form-label">ZIP Code *</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className={`form-input ${errors.zipCode ? 'border-red-500' : ''}`}
          />
          {errors.zipCode && <p className="form-error">{errors.zipCode}</p>}
        </div>
        
        <div className="form-group md:col-span-2">
          <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            rows="3"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="form-input"
            placeholder="Any special requests or delivery instructions..."
          ></textarea>
        </div>
      </div>
      
      <div className="pt-4 mt-6 border-t border-gray-200">
        <button 
          type="submit" 
          className="w-full btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm
