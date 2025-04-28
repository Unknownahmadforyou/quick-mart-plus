
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart-item";

// Categories data
export const categories: Category[] = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=300&auto=format&fit=crop",
    description: "Fresh fruits and vegetables delivered to your doorstep",
  },
  {
    id: 2,
    name: "Dairy & Breakfast",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=300&auto=format&fit=crop",
    description: "Milk, cheese, yogurt, eggs, bread and more",
  },
  {
    id: 3,
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=300&auto=format&fit=crop",
    description: "Chips, cookies, candies and more",
  },
  {
    id: 4,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1596803244535-925769f320b9?q=80&w=300&auto=format&fit=crop",
    description: "Soft drinks, juices, tea, coffee and more",
  },
  {
    id: 5,
    name: "Household",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=300&auto=format&fit=crop",
    description: "Cleaning supplies, detergents, home essentials",
  },
  {
    id: 6,
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?q=80&w=300&auto=format&fit=crop",
    description: "Bath & body, skin care, hair care products",
  },
];

// Products data
export const products: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    description: "Fresh organic bananas from local farms",
    price: 3.99,
    discountedPrice: 3.29,
    discount: 18,
    weight: "1 bunch (5-7 pcs)",
    image: "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=300&auto=format&fit=crop",
    categoryId: 1,
    inStock: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Red Apples",
    description: "Sweet and crunchy red apples",
    price: 4.49,
    discountedPrice: 4.49,
    discount: 0,
    weight: "1 kg (4-5 pcs)",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=300&auto=format&fit=crop",
    categoryId: 1,
    inStock: true,
  },
  {
    id: 3,
    name: "Organic Avocados",
    description: "Perfectly ripe avocados ready to eat",
    price: 6.99,
    discountedPrice: 5.49,
    discount: 21,
    weight: "2 pcs",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=300&auto=format&fit=crop",
    categoryId: 1,
    inStock: true,
  },
  {
    id: 4,
    name: "Fresh Milk",
    description: "Pasteurized whole milk",
    price: 3.29,
    discountedPrice: 2.99,
    discount: 9,
    weight: "1 liter",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300&auto=format&fit=crop",
    categoryId: 2,
    inStock: true,
    isPopular: true,
  },
  {
    id: 5,
    name: "Greek Yogurt",
    description: "Creamy Greek yogurt, plain flavor",
    price: 4.99,
    discountedPrice: 4.49,
    discount: 10,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?q=80&w=300&auto=format&fit=crop",
    categoryId: 2,
    inStock: true,
  },
  {
    id: 6,
    name: "Eggs",
    description: "Farm fresh eggs",
    price: 5.99,
    discountedPrice: 5.99,
    discount: 0,
    weight: "12 pcs",
    image: "https://images.unsplash.com/photo-1598965402089-897c69f5bf50?q=80&w=300&auto=format&fit=crop",
    categoryId: 2,
    inStock: true,
    isPopular: true,
  },
  {
    id: 7,
    name: "Potato Chips",
    description: "Crispy salted potato chips",
    price: 3.49,
    discountedPrice: 2.79,
    discount: 20,
    weight: "200g",
    image: "https://images.unsplash.com/photo-1600952899374-5d7e5ba41d13?q=80&w=300&auto=format&fit=crop",
    categoryId: 3,
    inStock: true,
  },
  {
    id: 8,
    name: "Chocolate Cookies",
    description: "Crunchy chocolate chip cookies",
    price: 4.59,
    discountedPrice: 3.99,
    discount: 13,
    weight: "300g",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=300&auto=format&fit=crop",
    categoryId: 3,
    inStock: true,
  },
  {
    id: 9,
    name: "Mixed Nuts",
    description: "Premium quality mixed nuts",
    price: 8.99,
    discountedPrice: 8.99,
    discount: 0,
    weight: "250g",
    image: "https://images.unsplash.com/photo-1606scoc9-2fn4-480b1dd45a73?q=80&w=300&auto=format&fit=crop",
    categoryId: 3,
    inStock: true,
  },
  {
    id: 10,
    name: "Coca Cola",
    description: "Classic cola soft drink",
    price: 1.99,
    discountedPrice: 1.79,
    discount: 10,
    weight: "2L",
    image: "https://images.unsplash.com/photo-1626640230040-8255a7ebf1d9?q=80&w=300&auto=format&fit=crop",
    categoryId: 4,
    inStock: true,
    isPopular: true,
  },
  {
    id: 11,
    name: "Orange Juice",
    description: "100% pure orange juice",
    price: 4.29,
    discountedPrice: 3.49,
    discount: 19,
    weight: "1L",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=300&auto=format&fit=crop",
    categoryId: 4,
    inStock: true,
  },
  {
    id: 12,
    name: "Mineral Water",
    description: "Natural mineral water",
    price: 1.49,
    discountedPrice: 1.49,
    discount: 0,
    weight: "1.5L",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=300&auto=format&fit=crop",
    categoryId: 4,
    inStock: true,
  },
];

// Helper functions for local storage operations
const CART_STORAGE_KEY = 'quickmart_cart';

// Get cart from local storage
export const getCartFromStorage = (): CartItem[] => {
  const cartJSON = localStorage.getItem(CART_STORAGE_KEY);
  return cartJSON ? JSON.parse(cartJSON) : [];
};

// Save cart to local storage
export const saveCartToStorage = (cart: CartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

// Clear cart in local storage
export const clearCartInStorage = (): void => {
  localStorage.removeItem(CART_STORAGE_KEY);
};

// Get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get products by category ID
export const getProductsByCategory = (categoryId: number): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

// Get popular products
export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular === true);
};

// Get category by ID
export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};
