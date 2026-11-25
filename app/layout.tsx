import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
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
  metadataBase: new URL('https://beyonestyle.com'),
  title: {
    default: 'BeyoneStyle — Considered clothing',
    template: '%s — BeyoneStyle',
  },
  description:
    'A quiet wardrobe of natural fibres, precise cuts, and pieces made to be worn for years. Designed in Lisbon, made in Porto.',
  applicationName: 'BeyoneStyle',
  openGraph: {
    title: 'BeyoneStyle — Considered clothing',
    description:
      'A quiet wardrobe of natural fibres, precise cuts, and pieces made to be worn for years.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BeyoneStyle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeyoneStyle — Considered clothing',
    description:
      'A quiet wardrobe of natural fibres, precise cuts, and pieces made to be worn for years.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-svh flex-col bg-surface font-sans text-ink antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <RevealObserver />
        <BackToTop />
      </body>
    </html>
  );
}
