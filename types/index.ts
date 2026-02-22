export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'subscription' | 'equipment';
  origin?: string;
  weight?: string;
  roast?: 'light' | 'medium' | 'dark';
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  maxAttendees: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}
