import { ContactForm } from './ContactForm';
import { CAFES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Portland Coffee | EMBER',
  description:
    'Get in touch with EMBER Coffee. Visit our Portland cafés, email us, or use the contact form. Questions about orders, workshops, or wholesale.',
};

export default function ContactPage() {
  return (
    <div className="py-section-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark">
            Contact us
          </h1>
          <p className="mt-2 text-text-muted text-fluid-base max-w-2xl">
            Questions about an order, workshops, wholesale, or just want to say hello? We’d love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mb-4">
              Send a message
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="font-display font-semibold text-fluid-xl text-brand-dark mb-4">
              Visit or call
            </h2>
            <ul className="space-y-6">
              {CAFES.map((cafe) => (
                <li key={cafe.id} className="border border-border rounded-xl p-4">
                  <h3 className="font-medium text-text">{cafe.name}</h3>
                  <p className="text-text-muted text-fluid-sm mt-1">{cafe.address}</p>
                  <a
                    href={`tel:${cafe.phone.replace(/\D/g, '')}`}
                    className="text-accent hover:underline text-fluid-sm mt-2 inline-block"
                  >
                    {cafe.phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-text-muted text-fluid-sm">
              General inquiries:{' '}
              <a href="mailto:hello@embercoffee.com" className="text-brand hover:underline">
                hello@embercoffee.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
