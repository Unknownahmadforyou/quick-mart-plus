
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/database';
import { ArrowLeft } from 'lucide-react';

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>('default');
  
  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.discountedPrice - b.discountedPrice;
      case 'price-high-low':
        return b.discountedPrice - a.discountedPrice;
      case 'discount':
        return b.discount - a.discount;
      default:
        return 0; // Keep original order
    }
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-quickmart-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 md:w-64 flex-shrink-0">
            <h2 className="font-medium mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left px-2 py-1 rounded ${selectedCategory === null ? 'bg-quickmart-green/10 text-quickmart-green font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Products
                </button>
              </li>
              {categories.map(category => (
                <li key={category.id}>
                  <button 
                    className={`w-full text-left px-2 py-1 rounded ${selectedCategory === category.id ? 'bg-quickmart-green/10 text-quickmart-green font-medium' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
                </span>
                
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                  <select 
                    className="border rounded px-2 py-1 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="discount">Discount</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {sortedProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-2">No products found</h2>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProducts;
