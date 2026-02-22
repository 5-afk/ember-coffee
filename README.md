# EMBER Coffee — Website

Premium artisan coffee roastery and café (Portland, Oregon). Single-origin beans from Ethiopia, Colombia, and Guatemala. E-commerce, workshop booking, blog, and local + national SEO.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Language:** TypeScript
- **State:** Zustand (cart, persisted)
- **Forms:** React Hook Form + Zod
- **Fonts:** Fraunces (display), Source Sans 3 (body)

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment**
   - Copy `.env.example` to `.env.local`
   - Set `NEXT_PUBLIC_SITE_URL` for SEO (e.g. `https://embercoffee.com`)

3. **Run dev**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Features

- **Home:** Hero, origins, featured products, workshops CTA, testimonials, cafés + blog strip, subscription CTA
- **Shop:** All products, filter by category (coffee / subscription / equipment), product detail with add-to-cart
- **Cart:** Slide-out drawer, quantity update, checkout link
- **Checkout:** Order summary, shipping logic (free over $50), placeholder for Stripe
- **Order confirmation:** Thank-you page, cart cleared
- **About:** Story, origins, values, visit CTA
- **Cafés:** Two locations (Pearl, Division) with address, hours, phone, directions link
- **Workshops:** Three workshops with date/time booking (select slot → name/email → confirm)
- **Blog:** Index and full article pages with coffee education content
- **Contact:** Form (name, email, subject, message) + café contact info
- **SEO:** Per-page metadata, JSON-LD (Organization, WebSite), sitemap.xml, robots.txt, Portland + specialty coffee keywords
- **Legal:** Privacy Policy, Terms of Use
- **404:** Custom not-found page
- **A11y:** Skip link, semantic HTML, focus styles, labels on form inputs

## Deployment

- **Vercel:** Connect repo, set env vars, deploy. Sitemap and robots are generated at build.
- **Stripe:** Add keys when ready for live payments; implement API route and webhook for Payment Intents.
- **Email:** Add Resend (or similar) and an API route for contact form and order confirmation emails.

## Design

- **Palette:** Warm, earthy (browns, cream, burnt sienna accent). Not generic “AI” purple/blue.
- **Tone:** Sophisticated, warm, craft-focused—avoiding hipster cliché.
- **Typography:** Fraunces for headings, Source Sans 3 for body; fluid type scale.

---

© EMBER Coffee, Portland, Oregon.
