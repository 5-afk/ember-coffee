'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';

export default function OrderConfirmationPage() {
  const { items, clearCart } = useCartStore();

  useEffect(() => {
    // In production, clear cart after successful payment webhook
    if (items.length > 0) {
      clearCart();
    }
  }, [clearCart, items.length]);

  return (
    <div className="py-section">
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
          <Check className="w-8 h-8" />
        </div>
        <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
          Thank you for your order
        </h1>
        <p className="mt-2 text-text-muted text-fluid-base max-w-md mx-auto">
          We’ve received your order. You’ll get a confirmation email shortly. Your coffee will be roasted and shipped within 2–3 business days.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button href="/shop">Continue shopping</Button>
          <Button href="/" variant="outline">Back to home</Button>
        </div>
      </div>
    </div>
  );
}
