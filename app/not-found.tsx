import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-display font-semibold text-fluid-4xl text-brand-dark">
        404
      </h1>
      <p className="mt-2 text-text-muted text-fluid-base text-center">
        This page doesn’t exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </div>
  );
}
