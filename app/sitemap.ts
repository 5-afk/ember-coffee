import { SITE_URL } from '@/lib/constants';
import { products } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export default function sitemap() {
  const staticPages = [
    '',
    '/shop',
    '/about',
    '/cafes',
    '/workshops',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
