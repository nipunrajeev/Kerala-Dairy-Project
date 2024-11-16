import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import type { Product } from './types';

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Cow Milk',
    price: 60,
    category: 'milk',
    quantity: 100,
    unit: 'liter',
    farmerId: 'f1',
    farmerName: 'Thomas Kumar',
    description: 'Pure and fresh cow milk from grass-fed cows. Available daily.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Premium Fodder',
    price: 400,
    category: 'fodder',
    quantity: 50,
    unit: 'kg',
    farmerId: 'f2',
    farmerName: 'Priya Nair',
    description: 'High-quality mixed fodder perfect for dairy cattle.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;