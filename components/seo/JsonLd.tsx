import { CAFES, SITE_URL } from '@/lib/constants';

export function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EMBER Coffee',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Premium artisan coffee roastery and café in Portland, Oregon. Single-origin beans from Ethiopia, Colombia, and Guatemala.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CAFES[0].address.split(',')[0],
      addressLocality: 'Portland',
      addressRegion: 'OR',
      postalCode: '97209',
      addressCountry: 'US',
    },
    telephone: CAFES[0].phone,
    sameAs: [],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '07:00', closes: '18:00' },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EMBER Coffee',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/shop?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
