import type { CSSProperties } from 'react';
import Link from 'next/link';
import { Marquee } from '@/components/ui/marquee';

const announcements = [
  'Complimentary shipping over $150',
  '30-day returns',
  'New: the Linen Edit',
  'Carbon-neutral delivery',
  'Ethically made in Portugal',
  'Free exchanges',
];

const categories = [
  'Outerwear',
  'Knitwear',
  'Tailoring',
  'Denim',
  'Shirts',
  'Trousers',
  'Accessories',
  'Objects',
];

const typeSpecimens = [
  { label: 'text-display-l', className: 'text-display-l', sample: 'Editorial scale' },
  { label: 'text-h1', className: 'text-h1', sample: 'Section heading' },
  { label: 'text-h2', className: 'text-h2', sample: 'Subsection heading' },
  { label: 'text-h3', className: 'text-h3', sample: 'Card heading' },
  { label: 'text-body-lg', className: 'text-body-lg', sample: 'Lead paragraph set in Inter.' },
  { label: 'text-body', className: 'text-body', sample: 'Body copy for product descriptions.' },
  { label: 'text-small', className: 'text-small', sample: 'Small print, shipping notes, and labels.' },
  { label: 'text-eyebrow', className: 'text-eyebrow', sample: 'eyebrow label' },
];

const products = [
  { slug: 'linen-overshirt', name: 'Linen Overshirt', price: '$128.00', compareAt: '$160.00' },
  { slug: 'wool-tailored-trouser', name: 'Wool Tailored Trouser', price: '$184.00', compareAt: '$230.00' },
  { slug: 'organic-cotton-tee', name: 'Organic Cotton Tee', price: '$48.00', compareAt: null },
];

function reveal(delay = 0): CSSProperties {
  return { '--reveal-delay': `${delay}ms` } as CSSProperties;
}

export default function HomePage() {
  return (
    <main>
      <Marquee items={announcements} ariaLabel="Store announcements" />

      <section>
        <div className="shell flex min-h-[min(74svh,820px)] flex-col justify-center py-16 md:py-20">
          <p className="text-eyebrow text-ink-muted" data-reveal style={reveal(0)}>
            BeyoneStyle — Spring 2026
          </p>
          <h1 className="text-display-xl mt-6 max-w-6xl text-balance" data-reveal style={reveal(80)}>
            Considered clothing, made to last.
          </h1>
          <p className="text-body-lg text-ink-muted mt-8 max-w-xl" data-reveal style={reveal(160)}>
            A quiet wardrobe of natural fibres, precise cuts, and pieces designed to be worn for
            years rather than seasons. Made in small runs, with full traceability.
          </p>
        </div>
      </section>

      <Marquee items={categories} variant="category" speed={52} ariaLabel="Shop by category" />

      <section>
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4" data-reveal>
            <h2 className="text-h2">Type scale</h2>
            <p className="text-small text-ink-subtle">Plus Jakarta Sans display · Inter text</p>
          </div>
          <dl className="mt-10 border-t border-border">
            {typeSpecimens.map((specimen, index) => (
              <div
                key={specimen.label}
                className="grid gap-2 border-b border-border py-6 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-8"
                data-reveal
                style={reveal(index * 50)}
              >
                <dt className="text-eyebrow text-ink-subtle">{specimen.label}</dt>
                <dd className={specimen.className}>{specimen.sample}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4" data-reveal>
            <h2 className="text-h2">Price numerals</h2>
            <p className="text-small text-ink-subtle">Tabular, lining figures</p>
          </div>
          <div className="mt-10 border-t border-border">
            {products.map((product, index) => (
              <div
                key={product.slug}
                className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                data-reveal
                style={reveal(index * 60)}
              >
                <span className="text-body">{product.name}</span>
                <span className="flex items-baseline gap-3">
                  <span className="nums text-body">{product.price}</span>
                  {product.compareAt ? (
                    <span className="nums text-small text-ink-subtle line-through">
                      {product.compareAt}
                    </span>
                  ) : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4" data-reveal>
            <h2 className="text-h2">The edit</h2>
            <p className="text-small text-ink-subtle">Hover to preview</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.slug} className="group" data-reveal style={reveal(index * 90)}>
                <div className="overflow-hidden rounded-md bg-surface-muted">
                  <div className="aspect-[4/5]">
                    <div className="transition-slow flex h-full w-full items-center justify-center bg-surface-sunken group-hover:scale-[1.03]">
                      <span className="text-eyebrow text-ink-subtle">{product.name}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="text-body relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-[var(--duration-base)] hover:after:scale-x-100"
                  >
                    {product.name}
                  </Link>
                  <span className="nums text-small">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="shell py-10">
          <p className="text-small text-ink-subtle" data-reveal>
            BeyoneStyle — considered clothing, made in small runs.
          </p>
        </div>
      </footer>
    </main>
  );
}
