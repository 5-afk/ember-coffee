import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'EMBER Coffee privacy policy. How we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
          Privacy Policy
        </h1>
        <p className="mt-2 text-text-muted text-fluid-sm">
          Last updated: February 2025
        </p>
        <div className="mt-8 prose prose-lg max-w-none text-text">
          <p>
            EMBER Coffee (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website, visit our cafés, or purchase our products.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Information we collect
          </h2>
          <p>
            We collect information you provide directly: name, email, shipping and billing address, phone number, and payment information when you place an order or create an account. We also collect information when you contact us, sign up for our newsletter, or book a workshop.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            How we use it
          </h2>
          <p>
            We use your information to process orders, send confirmations and shipping updates, respond to inquiries, send marketing (with your consent), and improve our services. We do not sell your personal information to third parties.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Cookies and analytics
          </h2>
          <p>
            We use cookies and similar technologies for essential site function, analytics, and (with consent) marketing. You can manage cookie preferences in your browser.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Security
          </h2>
          <p>
            We use industry-standard measures to protect your data. Payment processing is handled by secure third-party providers; we do not store full card numbers.
          </p>
          <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mt-8">
            Contact
          </h2>
          <p>
            For privacy questions or requests (access, correction, deletion), contact us at{' '}
            <a href="mailto:privacy@embercoffee.com" className="text-brand hover:underline">
              privacy@embercoffee.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
