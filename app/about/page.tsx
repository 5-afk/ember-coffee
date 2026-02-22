import Image from 'next/image';
import Link from 'next/link';
import { ORIGINS, CAFES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sourcing, Roastery & Story',
  description:
    'EMBER Coffee is a Portland artisan roastery sourcing single-origin beans from Ethiopia, Colombia, and Guatemala. Learn our story, values, and direct trade commitment.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-section min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 w-full pb-8">
          <h1 className="font-display font-semibold text-fluid-4xl text-white">
            Craft coffee, rooted in origin
          </h1>
          <p className="mt-2 text-white/90 text-fluid-lg max-w-xl">
            We’re a Portland roastery built on direct relationships with farmers and a belief that great coffee should be traceable, sustainable, and delicious.
          </p>
        </div>
      </section>

      <section className="py-section bg-surface" aria-labelledby="story-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 id="story-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Our story
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-text">
            <p>
              EMBER started in 2018 in a small roastery in Southeast Portland. We wanted to roast coffee that we’d want to drink every day—bright, clean, and full of character—and to know exactly where it came from.
            </p>
            <p>
              Today we work directly with smallholder cooperatives and farms in Ethiopia (Yirgacheffe), Colombia (Huila), and Guatemala (Huehuetenango). No middlemen: we buy at a premium, share the story on the bag, and roast in small batches so every order is fresh.
            </p>
            <p>
              We run two cafés in Portland—Pearl District and Division—where we serve our single-origins and house blend, plus pastries and light fare. We also host brewing workshops so you can learn to make coffee as good at home as in the café.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-surface-alt" aria-labelledby="origins-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 id="origins-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Our origins
          </h2>
          <p className="mt-2 text-text-muted text-fluid-base max-w-2xl">
            Every bag shows the country and region. We’re committed to origin transparency and fair pay at the farm.
          </p>
          <ul className="mt-10 space-y-8">
            {ORIGINS.map((origin) => (
              <li key={origin.id} className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3">
                  <h3 className="font-display font-semibold text-fluid-xl text-brand">
                    {origin.name}
                  </h3>
                  <p className="text-accent text-fluid-sm font-medium">{origin.region}</p>
                </div>
                <div className="md:flex-1">
                  <p className="text-text text-fluid-base">{origin.description}</p>
                  <p className="text-text-muted text-fluid-sm mt-2 italic">Tasting notes: {origin.flavor}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-section" aria-labelledby="values-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 id="values-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark">
            What we care about
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-semibold text-fluid-lg text-brand">Quality</h3>
              <p className="mt-2 text-text-muted text-fluid-sm">
                We cup every lot before we buy. Only coffees that meet our bar for clarity, sweetness, and balance make it into your bag.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-fluid-lg text-brand">Sustainability</h3>
              <p className="mt-2 text-text-muted text-fluid-sm">
                Direct trade means we pay above market and build long-term relationships. We support farms that invest in soil health and shade.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-fluid-lg text-brand">Transparency</h3>
              <p className="mt-2 text-text-muted text-fluid-sm">
                Origin, region, and process are on every bag. We believe you deserve to know where your coffee comes from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-brand text-white" aria-labelledby="visit-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <h2 id="visit-heading" className="font-display font-semibold text-fluid-3xl">
            Visit us in Portland
          </h2>
          <p className="mt-2 text-white/90 text-fluid-base max-w-xl mx-auto">
            Two cafés. Same coffee, same care.
          </p>
          <Link
            href="/cafes"
            className="inline-block mt-6 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Hours & locations
          </Link>
        </div>
      </section>
    </div>
  );
}
