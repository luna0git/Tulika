import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, MapPin, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center transform rotate-12">
                <ShoppingBag className="text-white w-6 h-6 -rotate-12" />
              </div>
              <span className="text-2xl font-bold text-orange-500 tracking-tight">swiggy</span>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 cursor-pointer group">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="border-b-2 border-gray-800 group-hover:border-orange-500 pb-0.5">Other</span>
              <span className="text-gray-400 font-normal">Bangalore, Karnataka, India</span>
              <ChevronDown className="w-4 h-4 text-orange-500" />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-orange-500 cursor-pointer font-medium">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-orange-500 cursor-pointer font-medium">
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold absolute -top-4 left-0 text-orange-500">NEW</span>
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </span>
              </div>
            </div>

            <Link to="/checkout" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium relative">
              <ShoppingBag className="w-5 h-5" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
