import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductCard } from '@/components/site/product-card';
import { products } from '@/lib/products';
import { revealDelay } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'The collection',
  description:
    'Four considered pieces in natural fibres, made to order in Porto. Dresses and tailoring from Collection 01.',
};

const dresses = products.filter((product) => product.category === 'Dresses');
const tailoring = products.filter((product) => product.category === 'Tailoring');

const serviceNotes = [
  {
    title: 'Made to order',
    body: 'Each piece is cut after you reserve it. Allow two to three weeks for finishing and dispatch.',
  },
  {
    title: 'Sizing',
    body: 'Our pieces run true to size with a relaxed line. The size guide lists finished measurements.',
  },
  {
    title: 'Repairs',
    body: 'Free repairs for the life of the piece, including hems, seams, and chain details.',
  },
];

export default function ShopPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <p className="text-eyebrow text-ink-muted" data-reveal>
            Spring 2026 — Collection 01
          </p>
          <h1 className="text-display-xl mt-6 max-w-4xl text-balance" data-reveal style={revealDelay(60)}>
            The collection.
          </h1>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-body-lg text-ink-muted max-w-xl" data-reveal style={revealDelay(120)}>
              Four pieces, made in small numbers from European linen, organic cotton, and wool
              crepe. Designed to be worn together, and for a long time.
            </p>
            <p className="nums text-small text-ink-subtle" data-reveal style={revealDelay(160)}>
              04 pieces · Made to order
            </p>
          </div>
        </div>
      </section>

      <section id="dresses" className="scroll-mt-24 border-b border-border">
        <div className="shell py-12 md:py-16">
          <div className="flex items-baseline justify-between gap-6" data-reveal>
            <h2 className="text-h2">Dresses</h2>
            <p className="nums text-small text-ink-subtle">03 pieces</p>
          </div>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {dresses.map((product, index) => (
              <div key={product.slug} data-reveal style={revealDelay(index * 80)}>
                <ProductCard product={product} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tailoring" className="scroll-mt-24 border-b border-border">
        <div className="shell py-12 md:py-16">
          <div className="flex items-baseline justify-between gap-6" data-reveal>
            <h2 className="text-h2">Tailoring</h2>
            <p className="nums text-small text-ink-subtle">01 piece</p>
          </div>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {tailoring.map((product) => (
              <div key={product.slug} data-reveal>
                <ProductCard product={product} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
              </div>
            ))}
            <div className="hidden border border-border p-8 sm:col-span-1 lg:col-span-2 lg:flex lg:flex-col lg:justify-between">
              <p className="text-eyebrow text-ink-subtle">The suit</p>
              <p className="text-body text-ink-muted mt-4 max-w-sm">
                The Ivory Tailored Suit is sold as a two-piece set. Jacket and trouser can be
                adjusted in the studio; allow an extra week for alterations.
              </p>
              <Link href="/care#size-guide" className="link-underline mt-6 w-fit text-small">
                View the size guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-3" data-reveal>
            {serviceNotes.map((note, index) => (
              <div key={note.title}>
                <p className="nums text-eyebrow text-ink-subtle">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-h3 mt-3">{note.title}</h2>
                <p className="text-small text-ink-muted mt-2">{note.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
            <p className="text-body text-ink-muted">
              Not sure about fit? We are happy to help before you reserve.
            </p>
            <Link href="/care#contact" className="button-secondary">
              Contact the studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
