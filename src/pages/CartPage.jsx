import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa'

function CartPage() {
  const { items, totalItems } = useCart()
  
  return (
    <div className="pt-20">
      <div className="container py-12">
        <h1 className="mb-8 text-3xl font-bold text-primary font-playfair">Your Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div>
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-lg shadow-md">
            <FaShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="mb-2 text-2xl font-semibold">Your cart is empty</h2>
            <p className="mb-6 text-gray-600">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/menu" className="btn btn-primary">
              <FaArrowLeft className="mr-2" />
              Browse Our Menu
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
