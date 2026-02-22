'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal } =
    useCartStore();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-fade-in"
        onClick={closeCart}
        aria-hidden
      />
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-xl z-50 flex flex-col animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display font-semibold text-lg">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 rounded-lg hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-text-muted text-fluid-sm py-8">
              Your cart is empty. Add something from the shop.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-4 py-3 border-b border-border last:border-0"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-alt shrink-0">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={closeCart}
                      className="font-medium text-text hover:text-brand truncate block"
                    >
                      {product.name}
                    </Link>
                    <p className="text-text-muted text-sm mt-0.5">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-surface-alt"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-fluid-sm" aria-live="polite">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-surface-alt"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-medium text-text">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="text-fluid-xs text-text-muted hover:text-error mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between text-fluid-sm">
              <span className="text-text-muted">Subtotal</span>
              <span className="font-medium">${getSubtotal().toFixed(2)}</span>
            </div>
            <Button
              href="/checkout"
              onClick={closeCart}
              className="w-full"
              size="lg"
            >
              Checkout
            </Button>
            <Link
              href="/shop"
              onClick={closeCart}
              className="block text-center text-fluid-sm text-brand hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
