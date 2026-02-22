import { SITE_URL } from '@/lib/constants';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/checkout', '/order-confirmation'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
