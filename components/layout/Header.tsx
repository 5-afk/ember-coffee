'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/cafes', label: 'Cafés' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const count = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        <Link
          href="/"
          className="font-display font-semibold text-xl md:text-2xl text-brand-dark"
          aria-label="EMBER Coffee home"
        >
          EMBER
        </Link>

        <nav
          className={clsx(
            'absolute top-full left-0 right-0 bg-surface border-b border-border md:static md:border-0 md:bg-transparent',
            mobileOpen ? 'block' : 'hidden md:block'
          )}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8 py-4 md:py-0 px-4 md:px-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 md:py-0 text-text hover:text-brand font-fluid-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleCart}
            className="relative p-2 rounded-lg text-text hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Cart, ${count} items`}
          >
            <ShoppingBag className="w-6 h-6" />
            {count > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center"
                aria-hidden
              >
                {count > 99 ? '99+' : count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-text hover:bg-surface-alt md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
