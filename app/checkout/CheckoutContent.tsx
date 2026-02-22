'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';

export function CheckoutContent() {
  const { items, getSubtotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="mt-10 p-8 bg-surface-alt rounded-xl border border-border text-center">
        <p className="text-text-muted text-fluid-base">Your cart is empty.</p>
        <Button href="/shop" className="mt-4">
          Continue shopping
        </Button>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = (subtotal + shipping) * 0.0; // No tax for demo; could add Oregon logic
  const total = subtotal + shipping + tax;

  return (
    <div className="mt-10 grid lg:grid-cols-2 gap-12">
      <div>
        <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mb-4">
          Order summary
        </h2>
        <ul className="space-y-4">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex gap-4 py-3 border-b border-border last:border-0"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-surface-alt shrink-0">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-text">{product.name}</p>
                <p className="text-text-muted text-sm">Qty: {quantity}</p>
              </div>
              <p className="font-medium text-text shrink-0">
                ${(product.price * quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:pl-8">
        <div className="bg-surface-alt rounded-xl p-6 border border-border sticky top-24">
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mb-4">
            Total
          </h2>
          <dl className="space-y-2 text-fluid-sm">
            <div className="flex justify-between">
              <dt className="text-text-muted">Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-text-muted">Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            {tax > 0 && (
              <div className="flex justify-between">
                <dt className="text-text-muted">Tax</dt>
                <dd>${tax.toFixed(2)}</dd>
              </div>
            )}
            <div className="flex justify-between font-semibold text-text pt-2 border-t border-border">
              <dt>Total</dt>
              <dd>${total.toFixed(2)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-text-muted text-fluid-xs">
            Free shipping on orders over $50. You will enter payment details on the next step.
          </p>
          <Button href="/order-confirmation" className="w-full mt-6" size="lg">
            Proceed to payment
          </Button>
          <Link
            href="/shop"
            className="block text-center text-fluid-sm text-brand hover:underline mt-3"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
