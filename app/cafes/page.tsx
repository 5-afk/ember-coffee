import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CAFES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Cafés | Portland Coffee Shops | EMBER Coffee',
  description:
    'Visit EMBER Coffee in Portland: Pearl District and Division. Hours, addresses, and directions. Specialty coffee, pour-over, and retail.',
};

export default function CafesPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Our cafés
          </h1>
          <p className="mt-2 text-text-muted text-fluid-base max-w-2xl">
            Two locations in Portland. Same single-origin coffee, same commitment to craft. Drop in for a pour-over, pick up beans, or just say hi.
          </p>
        </header>

        <div className="space-y-16">
          {CAFES.map((cafe, index) => (
            <section
              key={cafe.id}
              id={cafe.slug}
              className="scroll-mt-24"
              aria-labelledby={`cafe-${cafe.id}-heading`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-alt order-2 lg:order-1">
                  <Image
                    src={
                      index === 0
                        ? 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
                        : 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800'
                    }
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 id={`cafe-${cafe.id}-heading`} className="font-display font-semibold text-fluid-2xl text-brand-dark">
                    {cafe.name}
                  </h2>
                  <p className="mt-2 text-text-muted text-fluid-base">
                    {cafe.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-fluid-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:underline"
                        >
                          {cafe.address}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <a href={`tel:${cafe.phone.replace(/\D/g, '')}`} className="text-brand hover:underline">
                        {cafe.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text">
                        Mon–Fri: {cafe.hours.weekdays}<br />
                        Sat: {cafe.hours.saturday}<br />
                        Sun: {cafe.hours.sunday}
                      </span>
                    </li>
                  </ul>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get directions
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
