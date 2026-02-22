import type { Workshop } from '@/types';

export const workshops: Workshop[] = [
  {
    id: 'pour-over-basics',
    slug: 'pour-over-basics',
    title: 'Pour-Over Basics',
    description:
      'Learn to brew a clean, flavorful pour-over using the V60. We cover grind size, water temperature, pouring technique, and tasting. Perfect for beginners.',
    duration: '90 min',
    price: 35,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
    maxAttendees: 10,
  },
  {
    id: 'espresso-at-home',
    slug: 'espresso-at-home',
    title: 'Espresso at Home',
    description:
      'From machine basics to dialing in shots and steaming milk. Bring your own machine or use ours. For home baristas ready to level up.',
    duration: '2 hours',
    price: 55,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    maxAttendees: 6,
  },
  {
    id: 'cupping-tasting',
    slug: 'cupping-tasting',
    title: 'Cupping & Sensory Tasting',
    description:
      'Professional-style cupping to train your palate. Taste our single-origin lineup and learn the language of coffee flavor.',
    duration: '75 min',
    price: 40,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    maxAttendees: 12,
  },
];

export function getWorkshopBySlug(slug: string): Workshop | undefined {
  return workshops.find((w) => w.slug === slug);
}
