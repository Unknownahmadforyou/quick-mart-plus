
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Plus, Minus, ArrowLeft, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getSubtotal, 
    getTotal, 
    getDeliveryFee, 
    clearCart 
  } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Handle checkout
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: `Your order will be delivered in 12-15 minutes.`,
        variant: "default",
      });
      
      clearCart();
      navigate('/');
      setIsProcessing(false);
    }, 2000);
  };
  
  // Check if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/">
              <Button className="bg-quickmart-green hover:bg-quickmart-green/90">
                Continue Shopping
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-quickmart-green transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart items */}
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="px-4 py-4 border-b last:border-b-0">
                    <div className="flex items-center">
                      <div className="w-20 h-20 mr-4">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">{item.product.weight}</p>
                        <div className="flex items-center mt-1">
                          <span className="font-bold mr-2">${item.product.discountedPrice.toFixed(2)}</span>
                          {item.product.discount > 0 && (
                            <span className="text-sm text-gray-400 line-through">${item.product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex items-center border rounded-md overflow-hidden mr-4">
                          <button 
                            className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button 
                            className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button 
                          className="text-gray-400 hover:text-quickmart-rose transition-colors"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Button 
                  variant="outline" 
                  className="text-sm text-quickmart-rose border-quickmart-rose hover:bg-quickmart-rose/10"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${getDeliveryFee().toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-quickmart-green hover:bg-quickmart-green/90"
                  disabled={isProcessing}
                  onClick={handleCheckout}
                >
                  {isProcessing ? "Processing..." : "Checkout"}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Free delivery on orders over $30
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
