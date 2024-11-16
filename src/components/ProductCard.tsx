import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.farmerName}</p>
          </div>
          <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
            {product.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-sm text-gray-500">/{product.unit}</span>
          </div>
          <button className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}