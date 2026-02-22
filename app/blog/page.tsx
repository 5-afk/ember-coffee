import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Blog | Brewing Tips, Origins & Education | EMBER',
  description:
    'Coffee education from EMBER: how to brew pour-over, understand origins, choose roasts, and more. Portland specialty coffee blog.',
};

export default function BlogPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Blog
          </h1>
          <p className="mt-2 text-text-muted text-fluid-base max-w-2xl">
            Brewing tips, origin stories, and coffee education. Written by our team and guest contributors.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="flex flex-col h-full">
                <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] relative rounded-xl overflow-hidden bg-surface-alt">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="mt-4 flex-1 flex flex-col">
                  <p className="text-accent text-fluid-xs font-medium">{post.category}</p>
                  <h2 className="font-display font-semibold text-fluid-lg text-brand-dark mt-1">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-text-muted text-fluid-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-text-muted text-fluid-xs">
                    {post.date} · {post.readTime} read
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
