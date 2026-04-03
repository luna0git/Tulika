import React from 'react';
import { CATEGORIES, RESTAURANTS } from '../data/mockData';
import { RestaurantCard } from '../components/RestaurantCard';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Category Carousel */}
      <section className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800">What's on your mind?</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 cursor-pointer text-center group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2 ring-0 group-hover:ring-4 ring-orange-100 transition-all">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-medium text-gray-600 group-hover:text-orange-500">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Chains */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-b border-gray-100">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Top restaurant chains in Bangalore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESTAURANTS.map(res => (
            <RestaurantCard key={res.id} restaurant={res} />
          ))}
        </div>
      </section>

      {/* All Restaurants */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-extrabold text-gray-800">Restaurants with online food delivery in Bangalore</h2>
          <div className="flex flex-wrap gap-3">
            {['Filter', 'Sort By', 'Fast Delivery', 'New on Swiggy', 'Ratings 4.0+', 'Pure Veg', 'Offers'].map(filter => (
              <button 
                key={filter}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Reusing mock data for listing */}
          {[...RESTAURANTS, ...RESTAURANTS].map((res, idx) => (
            <RestaurantCard key={`${res.id}-${idx}`} restaurant={res} />
          ))}
        </div>
      </section>
    </div>
  );
};
