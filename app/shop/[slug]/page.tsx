import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, products } from '@/lib/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { AddToCartButton } from './AddToCartButton';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.name} | Shop`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <nav className="text-fluid-sm text-text-muted mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/shop" className="hover:text-brand">Shop</Link></li>
            <li aria-hidden>/</li>
            <li className="text-text" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-alt">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            {product.origin && (
              <p className="text-accent font-medium text-fluid-sm">{product.origin}</p>
            )}
            <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark mt-1">
              {product.name}
            </h1>
            <p className="mt-4 text-text text-fluid-base">{product.description}</p>

            <dl className="mt-6 flex flex-wrap gap-4 text-fluid-sm">
              {product.weight && (
                <>
                  <dt className="text-text-muted">Size</dt>
                  <dd className="text-text">{product.weight}</dd>
                </>
              )}
              {product.roast && (
                <>
                  <dt className="text-text-muted">Roast</dt>
                  <dd className="text-text capitalize">{product.roast}</dd>
                </>
              )}
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display font-semibold text-2xl text-brand-dark">
                ${product.price.toFixed(2)}
              </span>
              {product.inStock ? (
                <AddToCartButton product={product} />
              ) : (
                <span className="text-text-muted text-fluid-sm">Out of stock</span>
              )}
            </div>

            <p className="mt-6 text-text-muted text-fluid-xs">
              Free shipping on orders over $50. Roasted to order in Portland.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display font-semibold text-fluid-2xl text-brand-dark mb-6">
              You might also like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
