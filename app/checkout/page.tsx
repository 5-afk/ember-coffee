import Link from 'next/link';
import { CheckoutContent } from './CheckoutContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your order at EMBER Coffee.',
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <nav className="text-fluid-sm text-text-muted mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/shop" className="hover:text-brand">Shop</Link></li>
            <li aria-hidden>/</li>
            <li className="text-text" aria-current="page">Checkout</li>
          </ol>
        </nav>
        <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
          Checkout
        </h1>
        <CheckoutContent />
      </div>
    </div>
  );
}
