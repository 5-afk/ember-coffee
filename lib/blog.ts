import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-brew-pour-over',
    title: 'How to Brew the Perfect Pour-Over at Home',
    excerpt:
      'A step-by-step guide to nailing your V60 or Chemex. Grind size, water temperature, and timing explained.',
    date: '2025-02-18',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
    category: 'Brewing',
    readTime: '8 min',
  },
  {
    slug: 'understanding-coffee-origins',
    title: 'Understanding Coffee Origins: Why Terroir Matters',
    excerpt:
      'From altitude to soil to processing, learn how where your coffee grows shapes what’s in the cup.',
    date: '2025-02-10',
    author: 'Marcus Webb',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    category: 'Education',
    readTime: '6 min',
  },
  {
    slug: 'light-vs-dark-roast',
    title: 'Light vs. Dark Roast: What’s Actually Different?',
    excerpt:
      'We break down the myths and the science so you can choose the roast that fits your taste.',
    date: '2025-02-02',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'Education',
    readTime: '5 min',
  },
  {
    slug: 'sustainability-direct-trade',
    title: 'Our Direct Trade Model: Paying Farmers Fairly',
    excerpt:
      'How we source from small farms in Ethiopia, Colombia, and Guatemala—and why transparency matters.',
    date: '2025-01-25',
    author: 'Marcus Webb',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    category: 'Sustainability',
    readTime: '7 min',
  },
  {
    slug: 'grind-size-guide',
    title: 'Grind Size Guide: Match Your Grind to Your Method',
    excerpt:
      'Too fine or too coarse? A practical guide to grind settings for espresso, pour-over, French press, and more.',
    date: '2025-01-15',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    category: 'Brewing',
    readTime: '6 min',
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
