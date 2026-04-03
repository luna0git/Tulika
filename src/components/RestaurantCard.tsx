import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../data/mockData';
import { motion } from 'motion/react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      className="group cursor-pointer"
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-3">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-3 left-3 text-white font-bold text-lg drop-shadow-md">
            {restaurant.offers}
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{restaurant.name}</h3>
          <div className="flex items-center gap-1 font-bold text-gray-700">
            <div className="bg-green-600 rounded-full p-0.5">
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
            <span>{restaurant.rating}</span>
            <span className="text-gray-400 mx-1">•</span>
            <span>{restaurant.deliveryTime}</span>
          </div>
          <p className="text-gray-500 text-sm line-clamp-1">{restaurant.cuisines.join(', ')}</p>
          <p className="text-gray-500 text-sm">{restaurant.location}</p>
        </div>
      </Link>
    </motion.div>
  );
};
