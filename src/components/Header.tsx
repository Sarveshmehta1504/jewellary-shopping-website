import React from 'react';
import { Diamond, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Diamond className="text-purple-600 mr-2" size={32} />
          <span className="text-2xl font-bold text-gray-800">LuxeGems</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600">Collections</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600">About</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <User size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <ShoppingCart size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;