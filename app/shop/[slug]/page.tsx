import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/site/product-card';
import { ReservePiece } from '@/components/site/reserve-piece';
import { formatPrice, getProduct, products } from '@/lib/products';
import { revealDelay } from '@/lib/utils';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: 'Piece not found' };

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <div className="shell pt-8">
        <nav aria-label="Breadcrumb" className="text-small text-ink-subtle">
          <Link href="/shop" className="link-underline hover:text-ink">
            Collection
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{product.name}</span>
        </nav>
      </div>

      <section className="shell grid gap-10 py-8 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted"
          data-reveal
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            preload
            loading="eager"
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-eyebrow text-ink-subtle" data-reveal>
            {product.category} — Collection 01
          </p>
          <h1 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
            {product.name}
          </h1>
          <p className="mt-4 flex items-baseline gap-3" data-reveal style={revealDelay(100)}>
            <span className="nums text-body-lg">{formatPrice(product.price)}</span>
            {product.compareAt ? (
              <span className="nums text-small text-ink-subtle line-through">
                {formatPrice(product.compareAt)}
              </span>
            ) : null}
          </p>
          <p
            className="text-body-lg text-ink-muted mt-6"
            data-reveal
            style={revealDelay(140)}
          >
            {product.description}
          </p>

          <div data-reveal style={revealDelay(180)}>
            <ReservePiece product={product} />
          </div>

          <div className="mt-10 border-t border-border" data-reveal style={revealDelay(220)}>
            <details className="accordion group border-b border-border py-5" open>
              <summary className="flex items-center justify-between gap-4">
                <span className="text-h3">Details & care</span>
                <span
                  aria-hidden="true"
                  className="text-xl font-light text-ink-subtle transition-base group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <ul className="mt-4 space-y-2 text-small text-ink-muted">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>

            <details className="accordion group border-b border-border py-5">
              <summary className="flex items-center justify-between gap-4">
                <span className="text-h3">Sizing & fit</span>
                <span
                  aria-hidden="true"
                  className="text-xl font-light text-ink-subtle transition-base group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-4 space-y-3 text-small text-ink-muted">
                <p>
                  Available in {product.sizes.join(', ')}. The piece runs true to size with a
                  relaxed line; if you are between sizes, take the smaller.
                </p>
                <Link href="/care#size-guide" className="link-underline inline-block hover:text-ink">
                  View the full size guide
                </Link>
              </div>
            </details>

            <details className="accordion group border-b border-border py-5">
              <summary className="flex items-center justify-between gap-4">
                <span className="text-h3">Delivery & returns</span>
                <span
                  aria-hidden="true"
                  className="text-xl font-light text-ink-subtle transition-base group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-4 space-y-3 text-small text-ink-muted">
                <p>
                  Made to order in 2–3 weeks. Complimentary carbon-neutral delivery over $150,
                  with 30-day returns and free exchanges.
                </p>
                <Link href="/care#shipping" className="link-underline inline-block hover:text-ink">
                  Shipping and returns
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="text-eyebrow text-ink-subtle">Continue</p>
              <h2 className="text-h2 mt-3">Styled with</h2>
            </div>
            <Link href="/shop" className="link-underline text-small text-ink-muted hover:text-ink">
              View all pieces
            </Link>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <div key={item.slug} data-reveal style={revealDelay(index * 80)}>
                <ProductCard product={item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
