
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Product } from '@/types/product';
import { CartItem } from '@/types/cart-item';
import { getCartFromStorage, saveCartToStorage, clearCartInStorage } from '@/lib/database';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: number) => number;
  getSubtotal: () => number;
  getTotal: () => number;
  getDeliveryFee: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart from local storage on initial render
  useEffect(() => {
    const savedCart = getCartFromStorage();
    setCartItems(savedCart);
  }, []);
  
  // Save cart to local storage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      saveCartToStorage(cartItems);
    }
  }, [cartItems]);
  
  const addToCart = (product: Product) => {
    setCartItems(currentItems => {
      // Check if the product is already in the cart
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increment the quantity if it's already in the cart
        return currentItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add the new item to the cart
        return [...currentItems, { id: product.id, product, quantity: 1 }];
      }
    });
  };
  
  const removeFromCart = (productId: number) => {
    setCartItems(currentItems => {
      // Find the item to check its quantity
      const existingItem = currentItems.find(item => item.id === productId);
      
      if (existingItem && existingItem.quantity === 1) {
        // Remove the item if the quantity is 1
        return currentItems.filter(item => item.id !== productId);
      } else if (existingItem) {
        // Decrement the quantity if it's more than 1
        return currentItems.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
      
      return currentItems;
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      // If quantity is 0 or negative, remove the item
      setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
    } else {
      // Update the quantity
      setCartItems(currentItems => 
        currentItems.map(item => 
          item.id === productId 
            ? { ...item, quantity } 
            : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
    clearCartInStorage();
  };
  
  const getItemQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };
  
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.product.discountedPrice * item.quantity);
    }, 0);
  };
  
  const getDeliveryFee = () => {
    // Calculate delivery fee based on subtotal
    const subtotal = getSubtotal();
    return subtotal >= 30 ? 0 : 3.99;
  };
  
  const getTotal = () => {
    return getSubtotal() + getDeliveryFee();
  };
  
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
    getSubtotal,
    getTotal,
    getDeliveryFee,
    getTotalItems,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
