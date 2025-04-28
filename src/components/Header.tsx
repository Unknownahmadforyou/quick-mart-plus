import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, MapPin, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import LocationSelector from './LocationSelector';
import AuthButton from './AuthButton';

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-quickmart-green">Quick<span className="text-quickmart-yellow">Mart</span><span className="text-xs align-top ml-1">+</span></span>
          </Link>
          
          {/* Location selector (desktop) */}
          <div className="hidden md:flex items-center ml-4 cursor-pointer" onClick={() => setIsLocationOpen(!isLocationOpen)}>
            <MapPin className="h-4 w-4 text-quickmart-green mr-1" />
            <span className="text-sm font-medium">Deliver to: <span className="text-quickmart-green">Current Location</span></span>
          </div>
          
          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for groceries, essentials..."
                className="pl-10 w-full bg-gray-50"
              />
            </div>
          </div>
          
          {/* Auth button (desktop) */}
          <div className="hidden md:block">
            <AuthButton />
          </div>
          
          {/* Cart button */}
          <Link 
            to="/cart"
            className="hidden md:flex items-center hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
          >
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-quickmart-darkGray" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-quickmart-rose text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="ml-2 font-medium">Cart</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-quickmart-darkGray" />
            ) : (
              <Menu className="h-6 w-6 text-quickmart-darkGray" />
            )}
          </button>
          
          {/* Mobile cart button */}
          <Link to="/cart" className="md:hidden">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-quickmart-darkGray" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-quickmart-rose text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
        
        {/* Mobile search and location */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for groceries, essentials..."
              className="pl-10 w-full bg-gray-50"
            />
          </div>
          <div 
            className="flex items-center mt-2 cursor-pointer"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <MapPin className="h-4 w-4 text-quickmart-green mr-1" />
            <span className="text-sm">Deliver to: <span className="text-quickmart-green font-medium">Current Location</span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-3">
          <div className="container mx-auto px-4">
            <ul className="space-y-3">
              <li>
                <Link to="/" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/offers" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Offers
                </Link>
              </li>
              <li>
                <div className="py-2">
                  <AuthButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Location selector modal */}
      {isLocationOpen && (
        <LocationSelector onClose={() => setIsLocationOpen(false)} />
      )}
    </header>
  );
};

export default Header;
