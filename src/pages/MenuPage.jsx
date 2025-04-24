import { useState, useEffect } from 'react'
import { products } from '../data/products'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))]
  
  useEffect(() => {
    let result = products
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory)
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      )
    }
    
    setFilteredProducts(result)
  }, [activeCategory, searchTerm])
  
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative py-16 bg-center bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}>
        <div className="container text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-playfair">Our Menu</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our wide selection of freshly baked goods made with love and the finest ingredients.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            
            <div className="w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-lg shadow">
            <h3 className="mb-2 text-xl font-semibold">No products found</h3>
            <p className="text-gray-600">
              Try changing your search term or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuPage
