import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { JsonLd } from '@/components/seo/JsonLd';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'EMBER Coffee | Premium Artisan Coffee Roastery | Portland, Oregon',
    template: '%s | EMBER Coffee',
  },
  description:
    'Premium single-origin coffee from Ethiopia, Colombia & Guatemala. Roasted in Portland, Oregon. Shop whole beans, subscriptions & brewing equipment. Visit our cafés or book a brewing workshop.',
  keywords: [
    'specialty coffee Portland',
    'artisan coffee roastery Oregon',
    'single-origin coffee',
    'Ethiopian coffee',
    'Colombian coffee',
    'Guatemala coffee',
    'coffee subscription',
    'brewing workshop Portland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EMBER Coffee',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
