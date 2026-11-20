import Link from 'next/link';
import { Marquee } from '@/components/ui/marquee';

const announcements = [
  'Complimentary shipping over $150',
  '30-day returns',
  'New: the Linen Edit',
  'Carbon-neutral delivery',
];

const categories = ['Outerwear', 'Knitwear', 'Tailoring', 'Denim', 'Accessories', 'Objects'];

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

export default function HomePage() {
  return (
    <main>
      <Marquee items={announcements} ariaLabel="Store announcements" />

      <section className="px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <p className="text-eyebrow text-ink-subtle">BeyoneStyle — Spring 2026</p>
        <h1 className="text-display-xl mt-6 max-w-5xl text-balance">
          Considered clothing, made to last.
        </h1>
        <p className="text-body-lg text-ink-muted mt-8 max-w-xl">
          A quiet wardrobe of natural fibres, precise cuts, and pieces designed to be worn for
          years rather than seasons. Made in small runs, with full traceability.
        </p>
      </section>

      <Marquee items={categories} variant="category" speed={52} ariaLabel="Shop by category" />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">Type scale</h2>
          <p className="text-small text-ink-subtle">Plus Jakarta Sans display · Inter text</p>
        </div>
        <dl className="mt-10 border-t border-border">
          {typeSpecimens.map((specimen) => (
            <div
              key={specimen.label}
              className="grid gap-2 border-b border-border py-6 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-8"
            >
              <dt className="text-eyebrow text-ink-subtle">{specimen.label}</dt>
              <dd className={specimen.className}>{specimen.sample}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">Price numerals</h2>
          <p className="text-small text-ink-subtle">Tabular, lining figures</p>
        </div>
        <div className="mt-10 border-t border-border">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex items-baseline justify-between gap-6 border-b border-border py-5"
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
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">The edit</h2>
          <p className="text-small text-ink-subtle">Hover to preview</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group">
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
      </section>

      <footer className="border-t border-border px-6 py-10 md:px-10">
        <p className="text-small text-ink-subtle">
          BeyoneStyle — considered clothing, made in small runs.
        </p>
      </footer>
    </main>
  );
}
