export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'consumer';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'milk' | 'fodder';
  quantity: number;
  unit: string;
  farmerId: string;
  farmerName: string;
  description: string;
  image: string;
}

export interface Order {
  id: string;
  productId: string;
  consumerId: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'delivered';
  orderDate: string;
}