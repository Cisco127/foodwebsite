import { useState } from 'react'

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-xl font-semibold">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
            activeCategory === 'all' 
              ? 'bg-primary text-white' 
              : 'bg-white text-primary hover:bg-secondary'
          }`}
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              activeCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary hover:bg-secondary'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
