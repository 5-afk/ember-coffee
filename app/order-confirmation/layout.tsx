import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation',
  description: 'Thank you for your order. Your EMBER Coffee order has been received.',
  robots: { index: false, follow: true },
};

export default function OrderConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
