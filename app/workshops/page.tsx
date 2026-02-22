import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Users } from 'lucide-react';
import { workshops } from '@/lib/workshops';
import { WorkshopBooking } from './WorkshopBooking';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brewing Workshops | Portland Coffee Classes | EMBER',
  description:
    'Book in-person coffee workshops in Portland: pour-over basics, espresso at home, and sensory cupping. Learn from EMBER’s baristas at our Pearl District café.',
};

export default function WorkshopsPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Brewing workshops
          </h1>
          <p className="mt-2 text-text-muted text-fluid-base max-w-2xl">
            Hands-on classes at our Pearl District café. Small groups, real equipment, and our coffee. Book your spot below.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <article
              key={workshop.id}
              id={workshop.slug}
              className="scroll-mt-24 flex flex-col rounded-xl border border-border overflow-hidden bg-surface"
            >
              <div className="relative aspect-[4/3] bg-surface-alt">
                <Image
                  src={workshop.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-display font-semibold text-fluid-xl text-brand-dark">
                  {workshop.title}
                </h2>
                <p className="mt-2 text-text-muted text-fluid-sm flex-1">
                  {workshop.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-4 text-fluid-sm text-text-muted">
                  <li className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-accent" />
                    {workshop.duration}
                  </li>
                  <li className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-accent" />
                    Up to {workshop.maxAttendees}
                  </li>
                  <li className="font-semibold text-text">${workshop.price}</li>
                </ul>
                <WorkshopBooking workshop={workshop} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
