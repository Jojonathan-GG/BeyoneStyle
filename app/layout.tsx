import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BeyoneStyle',
  description: 'Premium sustainable fashion, made to last.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
