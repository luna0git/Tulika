import React from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANTS } from '../data/mockData';
import { Star, Clock, IndianRupee, Info, Search, Heart, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(r => r.id === id);
  const { addToCart, items, removeFromCart } = useCart();

  if (!restaurant) return <div className="p-20 text-center">Restaurant not found</div>;

  const getItemQuantity = (itemId: string) => {
    return items.find(i => i.id === itemId)?.quantity || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-3xl mx-auto px-4 pt-8">
        {/* Breadcrumbs */}
        <div className="text-[10px] text-gray-400 mb-8 flex gap-2 uppercase tracking-widest font-bold">
          <span>Home</span> / <span>Bangalore</span> / <span className="text-gray-800">{restaurant.name}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800 mb-2">{restaurant.name}</h1>
              <p className="text-sm text-gray-500">{restaurant.cuisines.join(', ')}</p>
              <p className="text-sm text-gray-500">{restaurant.location}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-2 text-center">
              <div className="flex items-center justify-center gap-1 text-green-700 font-bold border-b border-gray-100 pb-2 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">10K+ ratings</div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-dashed border-gray-200">
            <div className="flex items-center gap-2 font-bold text-gray-700">
              <Clock className="w-5 h-5" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-gray-700">
              <IndianRupee className="w-5 h-5" />
              <span>₹400 for two</span>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold text-gray-800">Recommended ({restaurant.menu.length})</h2>
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-12">
            {restaurant.menu.map(item => (
              <div key={item.id} className="flex justify-between gap-8 pb-12 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className={`w-4 h-4 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center mb-2`}>
                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="font-medium text-gray-700 mb-3">₹{item.price}</p>
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
                
                <div className="relative w-40 h-40 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32">
                    {getItemQuantity(item.id) > 0 ? (
                      <div className="bg-white shadow-lg rounded-lg border border-gray-100 flex items-center justify-between p-2 font-bold text-green-600">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="px-3 hover:bg-gray-50 rounded"
                        >
                          -
                        </button>
                        <span>{getItemQuantity(item.id)}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="px-3 hover:bg-gray-50 rounded"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-white shadow-lg rounded-lg border border-gray-100 py-2 font-bold text-green-600 hover:bg-gray-50 transition-colors uppercase text-sm tracking-wider"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
