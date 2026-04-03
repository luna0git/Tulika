import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronRight, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { items, totalPrice, addToCart, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="w-64 h-64 bg-orange-50 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-32 h-32 text-orange-200" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-xs">You can go to home page to view more restaurants</p>
        <Link to="/" className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
          SEE RESTAURANTS NEAR YOU
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Address & Payment */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-gray-800 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Delivery Address</h2>
                    <span className="text-orange-500 font-bold text-sm cursor-pointer">CHANGE</span>
                  </div>
                  <div className="border-2 border-orange-500 p-6 rounded-2xl relative">
                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-1 rounded-full">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Home</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      123, 4th Cross, 5th Main, Koramangala 4th Block, Bangalore, Karnataka 560034
                    </p>
                    <div className="mt-4 text-sm font-bold text-gray-800">45 MINS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm opacity-50">
              <div className="flex items-start gap-6">
                <div className="bg-gray-400 p-3 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Payment</h2>
                  <p className="text-sm text-gray-500">Select your payment method to complete the order</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-28">
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 border ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded px-2 py-1 text-xs font-bold text-green-600">
                      <button onClick={() => removeFromCart(item.id)} className="px-2">-</button>
                      <span className="px-1">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="px-2">+</button>
                    </div>
                    <span className="text-sm text-gray-600">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Item Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery Fee | 2.5 kms</span>
                <span>₹35</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Platform Fee</span>
                <span>₹5</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>GST and Restaurant Charges</span>
                <span>₹{Math.round(totalPrice * 0.05)}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-extrabold text-gray-800 mb-8 pt-4 border-t-2 border-gray-800">
              <span>TO PAY</span>
              <span>₹{totalPrice + 35 + 5 + Math.round(totalPrice * 0.05)}</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 uppercase tracking-wider">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
