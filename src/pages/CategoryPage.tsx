
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getCategoryById, getProductsByCategory } from '@/lib/database';
import { Category } from '@/types/category';
import { Product } from '@/types/product';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API request delay
    setLoading(true);
    setTimeout(() => {
      if (id) {
        const categoryId = parseInt(id);
        const foundCategory = getCategoryById(categoryId);
        
        if (foundCategory) {
          setCategory(foundCategory);
          setProducts(getProductsByCategory(categoryId));
        } else {
          setCategory(null);
          setProducts([]);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-quickmart-green"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-quickmart-green hover:bg-quickmart-green/90">
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-quickmart-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="h-40 relative">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-white">{category.name}</h1>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-2">No products available</h2>
            <p className="text-gray-600">There are no products in this category at the moment.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
