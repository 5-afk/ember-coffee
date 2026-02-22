import Link from 'next/link';
import { products, getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ui/ProductCard';
import type { Product } from '@/types';
import type { Metadata } from 'next';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Shop Coffee, Subscriptions & Brewing Equipment | Portland',
  description:
    'Buy single-origin coffee, monthly subscriptions, and brewing equipment from EMBER Coffee. Ethiopia, Colombia, Guatemala. Roasted in Portland, Oregon.',
};

type SearchParams = { category?: string };

function CategoryLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 rounded-lg text-fluid-sm font-medium transition-colors',
        current
          ? 'bg-brand text-white'
          : 'bg-surface-alt text-text hover:bg-border'
      )}
      aria-current={current ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { category } = await searchParams;
  const filtered: Product[] = category
    ? getProductsByCategory(category as Product['category'])
    : products;

  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <header className="mb-10">
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Shop
          </h1>
          <p className="mt-2 text-text-muted text-fluid-base">
            Whole bean coffee, subscriptions, and brewing equipment. All roasted and curated in Portland.
          </p>
          <nav className="mt-4 flex flex-wrap gap-2" aria-label="Shop categories">
            <CategoryLink href="/shop" current={!category}>All</CategoryLink>
            <CategoryLink href="/shop?category=coffee" current={category === 'coffee'}>Coffee</CategoryLink>
            <CategoryLink href="/shop?category=subscription" current={category === 'subscription'}>Subscriptions</CategoryLink>
            <CategoryLink href="/shop?category=equipment" current={category === 'equipment'}>Equipment</CategoryLink>
          </nav>
        </header>

        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}

function ProductGrid({ products: list }: { products: Product[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
