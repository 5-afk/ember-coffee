export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://embercoffee.com';

export const CAFES = [
  {
    id: 'pearl',
    name: 'EMBER Pearl District',
    address: '1234 NW Everett St, Portland, OR 97209',
    phone: '(503) 555-0123',
    hours: {
      weekdays: '6am – 8pm',
      saturday: '7am – 8pm',
      sunday: '7am – 6pm',
    },
    description: 'Our flagship café in the Pearl. Full menu, pour-over bar, and retail.',
    slug: 'pearl-district',
  },
  {
    id: 'division',
    name: 'EMBER Division',
    address: '4567 SE Division St, Portland, OR 97206',
    phone: '(503) 555-0124',
    hours: {
      weekdays: '6am – 7pm',
      saturday: '7am – 7pm',
      sunday: '7am – 5pm',
    },
    description: 'Neighborhood spot on Division. Cozy seating, same great coffee.',
    slug: 'division',
  },
] as const;

export const ORIGINS = [
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    region: 'Yirgacheffe',
    flavor: 'Floral, citrus, blueberry',
    description: 'We work with a women-owned cooperative in Yirgacheffe for bright, complex lots.',
  },
  {
    id: 'colombia',
    name: 'Colombia',
    region: 'Huila',
    flavor: 'Caramel, red apple, cocoa',
    description: 'Smallholder farmers in Huila deliver consistently sweet, balanced profiles.',
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    region: 'Huehuetenango',
    flavor: 'Chocolate, stone fruit, nutty',
    description: 'High-altitude Huehuetenango brings depth and structure to our blends.',
  },
] as const;
