import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 sm:hidden" />
            <h1 className="ml-2 text-xl font-bold">Kerala Dairy</h1>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="hover:text-green-200 transition">Products</a>
            <a href="#" className="hover:text-green-200 transition">Farmers</a>
            <a href="#" className="hover:text-green-200 transition">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 hover:text-green-200 cursor-pointer" />
            <User className="h-6 w-6 hover:text-green-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}