'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button
      onClick={handleClick}
      variant="primary"
      size="lg"
      disabled={added}
    >
      {added ? 'Added to cart' : 'Add to cart'}
    </Button>
  );
}
