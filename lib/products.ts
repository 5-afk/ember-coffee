import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'ethiopia-yirgacheffe',
    slug: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    description:
      'Bright and floral with notes of blueberry, jasmine, and citrus. Washed process from our partner cooperative in Yirgacheffe.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    category: 'coffee',
    origin: 'Ethiopia',
    weight: '12 oz',
    roast: 'light',
    inStock: true,
  },
  {
    id: 'colombia-huila',
    slug: 'colombia-huila',
    name: 'Colombia Huila',
    description:
      'Sweet and balanced with caramel, red apple, and cocoa. Direct trade from smallholder farmers in Huila.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    category: 'coffee',
    origin: 'Colombia',
    weight: '12 oz',
    roast: 'medium',
    inStock: true,
  },
  {
    id: 'guatemala-huehue',
    slug: 'guatemala-huehue',
    name: 'Guatemala Huehuetenango',
    description:
      'Deep and structured with dark chocolate, stone fruit, and a nutty finish. High-altitude Huehuetenango.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    category: 'coffee',
    origin: 'Guatemala',
    weight: '12 oz',
    roast: 'medium',
    inStock: true,
  },
  {
    id: 'ember-blend',
    slug: 'ember-blend',
    name: 'EMBER House Blend',
    description:
      'Our signature blend of Ethiopia, Colombia, and Guatemala. Balanced, versatile, and perfect for any brew method.',
    price: 19,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'coffee',
    weight: '12 oz',
    roast: 'medium',
    inStock: true,
  },
  {
    id: 'subscription-single',
    slug: 'subscription-single-origin',
    name: 'Single-Origin Subscription',
    description:
      'One 12 oz bag of our rotating single-origin selection every month. Free shipping. Cancel anytime.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800',
    category: 'subscription',
    inStock: true,
  },
  {
    id: 'subscription-blend',
    slug: 'subscription-house-blend',
    name: 'House Blend Subscription',
    description:
      'One 12 oz bag of EMBER House Blend every month. Consistent, reliable, free shipping.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    category: 'subscription',
    inStock: true,
  },
  {
    id: 'v60-kit',
    slug: 'v60-brewing-kit',
    name: 'V60 Brewing Kit',
    description:
      'Hario V60 ceramic dripper, glass carafe, filters, and our quick-start guide. Everything you need for pour-over at home.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
    category: 'equipment',
    inStock: true,
  },
  {
    id: 'aeropress',
    slug: 'aeropress-go',
    name: 'AeroPress Go',
    description:
      'Compact, durable, and perfect for travel or small kitchens. Includes scoop, stirrer, and 350 filters.',
    price: 34,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
    category: 'equipment',
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: Product['category']
): Product[] {
  return products.filter((p) => p.category === category);
}
