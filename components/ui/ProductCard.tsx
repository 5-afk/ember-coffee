import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/shop/${product.slug}`} className="block aspect-[4/3] relative bg-surface-alt">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.origin && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-brand-dark/80 text-white text-xs font-medium">
            {product.origin}
          </span>
        )}
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-fluid-lg text-brand-dark">
          <Link href={`/shop/${product.slug}`} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="text-text-muted text-fluid-sm mt-1 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-semibold text-text">${product.price.toFixed(2)}</span>
          <Button
            href={`/shop/${product.slug}`}
            size="sm"
            variant="primary"
          >
            View
          </Button>
        </div>
      </div>
    </article>
  );
}
