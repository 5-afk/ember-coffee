import Link from 'next/link';
import { CAFES, SITE_URL } from '@/lib/constants';

const footerLinks = {
  Shop: [
    { href: '/shop', label: 'All Coffee' },
    { href: '/shop?category=subscription', label: 'Subscriptions' },
    { href: '/shop?category=equipment', label: 'Brewing Equipment' },
  ],
  Visit: [
    { href: '/cafes', label: 'Our Cafés' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/about', label: 'About Us' },
  ],
  Learn: [
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-auto">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-section">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link
              href="/"
              className="font-display font-semibold text-2xl text-white"
            >
              EMBER
            </Link>
            <p className="mt-3 text-white/80 text-fluid-sm max-w-xs">
              Premium artisan coffee from Portland. Single-origin beans from Ethiopia, Colombia & Guatemala.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-display font-semibold text-fluid-sm uppercase tracking-wider text-white/90 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/75 hover:text-white text-fluid-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-white/70 text-fluid-xs">
            <p>{CAFES[0].address}</p>
            <p>
              <a href={`tel:${CAFES[0].phone.replace(/\D/g, '')}`} className="hover:text-white">
                {CAFES[0].phone}
              </a>
            </p>
          </div>
          <p className="text-white/60 text-fluid-xs">
            © {new Date().getFullYear()} EMBER Coffee. Portland, Oregon.
          </p>
        </div>
      </div>
    </footer>
  );
}
