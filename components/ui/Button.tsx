'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

type ButtonProps = ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, onClick, ...props }, ref) => {

    const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-dark active:bg-brand-dark',
      secondary: 'bg-surface-alt text-text hover:bg-border active:bg-border',
      ghost: 'text-text hover:bg-surface-alt active:bg-surface-alt',
      outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-fluid-sm',
      lg: 'px-6 py-3 text-fluid-base',
    };

    const classes = clsx(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';