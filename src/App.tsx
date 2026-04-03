import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { RestaurantDetail } from './pages/RestaurantDetail';
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-600">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="bg-black text-white py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transform rotate-12">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">swiggy</span>
                </div>
                <p className="text-gray-400 text-sm">© 2026 Bundl Technologies Pvt. Ltd</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Company</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">About</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Team</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Swiggy One</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Contact us</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">Help & Support</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Partner with us</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Ride with us</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">We deliver to:</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="hover:text-white cursor-pointer transition-colors">Bangalore</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Gurgaon</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Hyderabad</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Delhi</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Mumbai</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Pune</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}
