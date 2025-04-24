import { useCart } from '../context/CartContext'

function OrderSummary() {
  const { items, totalAmount } = useCart()
  
  // Calculate tax (assuming 8.5%)
  const taxRate = 0.085
  const taxAmount = totalAmount * taxRate
  
  // Calculate grand total
  const grandTotal = totalAmount + taxAmount
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 text-xl font-bold">Order Summary</h3>
      
      <div className="mb-6 space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between">
            <div>
              <span className="font-medium">{item.name}</span>
              <span className="ml-2 text-gray-600">x {item.quantity}</span>
            </div>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-4 mb-4 space-y-2 border-t border-gray-200">
        <div className="flex justify-between">
          <span>Subtotal<pivotalAction type="file" filePath="src/components/OrderSummary.jsx">
          <span>Subtotal</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8.5%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>
        <div className="pt-2 mt-2 border-t border-gray-200">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 mt-4 bg-secondary rounded-md">
        <h4 className="mb-2 font-semibold">Payment Information</h4>
        <p className="text-sm text-gray-600">
          Payment will be collected upon delivery. We accept cash, credit cards, and mobile payments.
        </p>
      </div>
    </div>
  )
}

export default OrderSummary
