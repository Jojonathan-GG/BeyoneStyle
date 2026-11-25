import Link from 'next/link';
import { BrandMark } from '@/components/site/brand-mark';
import { NewsletterForm } from '@/components/site/newsletter-form';

const shopLinks = [
  { href: '/shop', label: 'The collection' },
  { href: '/shop#dresses', label: 'Dresses' },
  { href: '/shop#tailoring', label: 'Tailoring' },
  { href: '/journal', label: 'Journal' },
];

const studioLinks = [
  { href: '/about', label: 'Our atelier' },
  { href: '/about#lookbook', label: 'The lookbook' },
  { href: '/about#process', label: 'How we make' },
  { href: '/care#contact', label: 'Contact' },
];

const careLinks = [
  { href: '/care#shipping', label: 'Shipping' },
  { href: '/care#returns', label: 'Returns & exchanges' },
  { href: '/care#size-guide', label: 'Size guide' },
  { href: '/care#repairs', label: 'Repairs' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="text-eyebrow text-ink-subtle">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-underline text-small text-ink-muted transition-fast hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="shell pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <BrandMark size="md" />
            <h2 className="text-display-l mt-6 max-w-xl text-balance">A letter, occasionally.</h2>
            <p className="text-body text-ink-muted mt-4 max-w-md">
              Collection notes, atelier stories, and first access to new pieces. Written by hand,
              sent no more than once a month.
            </p>
            <NewsletterForm className="max-w-md" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn title="Studio" links={studioLinks} />
            <FooterColumn title="Client care" links={careLinks} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border py-6 text-small text-ink-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BeyoneStyle. All rights reserved.</p>
          <p>Designed in Lisbon. Made in Porto, Portugal.</p>
          <a href="mailto:studio@beyonestyle.com" className="link-underline hover:text-ink">
            studio@beyonestyle.com
          </a>
        </div>

        <p
          aria-hidden="true"
          className="select-none pb-8 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-[-0.06em] text-border-strong"
        >
          BeyoneStyle
        </p>
      </div>
    </footer>
  );
}
