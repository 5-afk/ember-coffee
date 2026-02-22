import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'EMBER Coffee terms of use and conditions for website and services.',
};

export default function TermsPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
          Terms of Use
        </h1>
        <p className="mt-2 text-text-muted text-fluid-sm">
          Last updated: February 2025
        </p>
        <div className="mt-8 prose prose-lg max-w-none text-text">
          <p>
            By using the EMBER Coffee website and services, you agree to these terms. If you do not agree, please do not use our site or services.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Use of the site
          </h2>
          <p>
            You may use this site for lawful purposes only. You may not misuse the site, attempt to gain unauthorized access, or interfere with its operation. Content on the site (text, images, logos) is owned by EMBER Coffee and may not be copied or used without permission.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Orders and payment
          </h2>
          <p>
            Orders are subject to availability. We reserve the right to refuse or cancel orders. Prices are in USD and do not include applicable tax unless stated. Payment is due at checkout. We use secure third-party payment processors.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Shipping and returns
          </h2>
          <p>
            Shipping times and costs are shown at checkout. Coffee is roasted to order; we do not accept returns of opened coffee for quality reasons. Unopened bags may be returned within 30 days for a refund. Equipment returns are subject to our discretion and must be unused.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Workshops
          </h2>
          <p>
            Workshop bookings are confirmed upon payment or reservation. Cancellations with at least 48 hours notice may receive a full refund or credit. No-shows are non-refundable.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, EMBER Coffee is not liable for indirect, incidental, or consequential damages arising from your use of the site or products.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Contact
          </h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:hello@embercoffee.com" className="text-brand hover:underline">
              hello@embercoffee.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
