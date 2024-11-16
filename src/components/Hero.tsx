import React from 'react';
import { Milk, Wheat } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Fresh Dairy Products</span>
            <span className="block text-green-600">Direct from Farmers</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect directly with local dairy farmers in Kerala. Get fresh milk and quality fodder delivered to your doorstep.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Browse Products
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Join as Farmer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Milk className="h-8 w-8 text-green-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">Fresh Milk</h3>
            </div>
            <p className="mt-4 text-gray-500">
              Pure and fresh milk from local farms, delivered daily. Support local farmers while enjoying quality dairy products.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Wheat className="h-8 w-8 text-green-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">Quality Fodder</h3>
            </div>
            <p className="mt-4 text-gray-500">
              High-quality fodder for livestock. Connect with trusted suppliers and ensure the best nutrition for your animals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}