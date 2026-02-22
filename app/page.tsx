import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { ORIGINS, CAFES } from '@/lib/constants';
import { products } from '@/lib/products';
import { workshops } from '@/lib/workshops';
import { blogPosts } from '@/lib/blog';

const featuredProducts = products.filter((p) => p.category === 'coffee').slice(0, 3);
const featuredWorkshop = workshops[0];
const featuredPost = blogPosts[0];

const testimonials = [
  {
    quote: 'The Ethiopia Yirgacheffe is the best single-origin I’ve had in Portland. EMBER’s transparency about sourcing sealed it for me.',
    author: 'James T.',
    location: 'Portland, OR',
  },
  {
    quote: 'I’ve been to both cafés and the pour-over workshop. These folks know their craft and care about the farmers.',
    author: 'Maya L.',
    location: 'Portland, OR',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="font-display font-semibold text-fluid-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl mx-auto">
            Craft coffee, rooted in origin
          </h1>
          <p className="mt-4 text-fluid-lg text-white/90 max-w-xl mx-auto">
            Single-origin beans from Ethiopia, Colombia, and Guatemala. Roasted in Portland. Served in our cafés or delivered to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/shop" variant="primary" size="lg" className="!bg-accent hover:!bg-accent/90 !text-white">
              Shop Coffee
            </Button>
            <Button href="/workshops" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
              Book a Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="py-section bg-surface-alt" aria-labelledby="origins-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 id="origins-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark text-center">
            Sourced from three origins
          </h2>
          <p className="mt-2 text-text-muted text-fluid-base text-center max-w-2xl mx-auto">
            We partner directly with small farms for traceability, quality, and fair pay.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {ORIGINS.map((origin) => (
              <div
                key={origin.id}
                className="bg-surface rounded-xl p-6 border border-border text-center"
              >
                <h3 className="font-display font-semibold text-fluid-xl text-brand">
                  {origin.name}
                </h3>
                <p className="text-accent text-fluid-sm font-medium mt-1">{origin.region}</p>
                <p className="text-text-muted text-fluid-sm mt-2 italic">{origin.flavor}</p>
                <p className="text-text text-fluid-sm mt-3">{origin.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Button href="/about" variant="ghost" size="sm">
              Our sourcing story →
            </Button>
          </p>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-section" aria-labelledby="products-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="products-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark">
                Fresh from the roastery
              </h2>
              <p className="mt-2 text-text-muted text-fluid-base">
                Whole bean, subscriptions, and brewing gear.
              </p>
            </div>
            <Button href="/shop" variant="outline" size="sm">
              View all
            </Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshops CTA */}
      <section className="py-section bg-brand-dark text-white" aria-labelledby="workshops-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="workshops-heading" className="font-display font-semibold text-fluid-3xl">
                Learn to brew like a pro
              </h2>
              <p className="mt-4 text-white/90 text-fluid-base">
                Join our in-person workshops at the Pearl District café. Pour-over basics, espresso at home, and sensory cupping.
              </p>
              <ul className="mt-6 space-y-2 text-white/80 text-fluid-sm">
                <li className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent shrink-0" />
                  {featuredWorkshop.title} — {featuredWorkshop.duration}, ${featuredWorkshop.price}
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/workshops" className="!bg-accent hover:!bg-accent/90 !text-white">
                  Book a workshop
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={featuredWorkshop.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-surface-alt" aria-labelledby="testimonials-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 id="testimonials-heading" className="font-display font-semibold text-fluid-3xl text-brand-dark text-center">
            What coffee lovers say
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-surface rounded-xl p-6 border border-border"
              >
                <p className="text-text text-fluid-base italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-text-muted text-fluid-sm">
                  — {t.author}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Cafés + Blog strip */}
      <section className="py-section" aria-labelledby="visit-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id="visit-heading" className="font-display font-semibold text-fluid-2xl text-brand-dark flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Visit our cafés
              </h2>
              <p className="mt-2 text-text-muted text-fluid-sm">
                Two locations in Portland. Same coffee, same care.
              </p>
              <ul className="mt-6 space-y-4">
                {CAFES.map((cafe) => (
                  <li key={cafe.id}>
                    <Link
                      href={`/cafes#${cafe.slug}`}
                      className="font-medium text-brand hover:underline"
                    >
                      {cafe.name}
                    </Link>
                    <p className="text-text-muted text-fluid-xs mt-0.5">{cafe.address}</p>
                  </li>
                ))}
              </ul>
              <Button href="/cafes" variant="outline" size="sm" className="mt-4">
                Hours & directions
              </Button>
            </div>
            <div>
              <h2 className="font-display font-semibold text-fluid-2xl text-brand-dark">
                From the blog
              </h2>
              <p className="mt-2 text-text-muted text-fluid-sm">
                Brewing tips, origin stories, and coffee education.
              </p>
              <article className="mt-6 p-4 rounded-xl border border-border bg-surface-alt">
                <Link href={`/blog/${featuredPost.slug}`} className="group">
                  <h3 className="font-display font-semibold text-fluid-lg text-brand-dark group-hover:text-brand">
                    {featuredPost.title}
                  </h3>
                  <p className="text-text-muted text-fluid-sm mt-1">{featuredPost.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-2 text-accent text-fluid-sm font-medium">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </article>
              <Button href="/blog" variant="ghost" size="sm" className="mt-2">
                All posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-brand text-white" aria-labelledby="cta-heading">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <h2 id="cta-heading" className="font-display font-semibold text-fluid-3xl">
            Ready for better coffee?
          </h2>
          <p className="mt-2 text-white/90 text-fluid-base max-w-xl mx-auto">
            Subscribe and get a bag of single-origin delivered every month. Free shipping. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/shop?category=subscription" className="!bg-accent hover:!bg-accent/90 !text-white">
              View subscriptions
            </Button>
            <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-brand">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
