
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const { toast } = useToast();
  const quantity = getItemQuantity(product.id);
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
      duration: 2000,
    });
  };
  
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-quickmart-rose text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-quickmart-darkGray">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.weight}</p>
        
        <div className="flex items-center mt-1">
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-bold text-quickmart-darkGray">${product.discountedPrice.toFixed(2)}</span>
              {product.discount > 0 && (
                <span className="text-sm text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          {quantity === 0 ? (
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="h-8 bg-quickmart-green hover:bg-quickmart-green/90"
            >
              Add
            </Button>
          ) : (
            <div className="flex items-center border rounded-md overflow-hidden">
              <button 
                className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={handleRemoveFromCart}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-3">{quantity}</span>
              <button 
                className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={handleAddToCart}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
