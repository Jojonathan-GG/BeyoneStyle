import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { BackToTop } from '@/components/ui/back-to-top';
import { RevealObserver } from '@/components/ui/reveal';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BeyoneStyle — Considered clothing',
  description: 'Premium sustainable fashion, made to last.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-surface font-sans text-ink antialiased">
        {children}
        <RevealObserver />
        <BackToTop />
      </body>
    </html>
  );
}
