import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/site/product-card';
import { Marquee } from '@/components/ui/marquee';
import { ScrambleHover } from '@/components/ui/scramble-hover';
import { formatPrice, products } from '@/lib/products';
import { revealDelay } from '@/lib/utils';
import cloudDress from '@/img/istockphoto-1407656268-612x612.jpg';
import halterDress from '@/img/istockphoto-2162084252-612x612.jpg';
import columnDress from '@/img/images.jpg';

const announcements = [
  'Complimentary shipping over $150',
  'Made to order in Porto',
  'Repairs for life',
  '30-day returns',
  'Spring 2026 — Collection 01',
  'Carbon-neutral delivery',
];

const categories = [
  'Dresses',
  'Tailoring',
  'Linen',
  'Outerwear',
  'Knitwear',
  'Accessories',
  'The Archive',
  'Made to order',
];

const principles = [
  {
    title: 'Natural fibres',
    body: 'European linen, organic cotton, and wool crepe. No blends that cannot be recycled.',
  },
  {
    title: 'Small runs',
    body: 'Made to order in runs of forty. Nothing is produced to sit in a warehouse.',
  },
  {
    title: 'Repairs for life',
    body: 'Free repairs for the life of the piece. Send it back; we will mend it.',
  },
];

const process = [
  {
    title: 'Pattern',
    body: 'Toiles are cut and fitted by hand, then adjusted until the line is quiet.',
  },
  {
    title: 'Cloth',
    body: 'Linen from Guimarães, wool crepe from Biella. Chosen for how they age, not how they photograph.',
  },
  {
    title: 'Finish',
    body: 'Hems, buttonholes, and chain details are completed by a single maker.',
  },
];

const notes = [
  {
    slug: 'fewer-clothes',
    date: '12 March 2026',
    title: 'The case for fewer clothes',
    excerpt:
      'Why a smaller wardrobe asks more of the maker — and gives more back to the wearer.',
  },
  {
    slug: 'porto-atelier',
    date: '28 February 2026',
    title: 'Inside the Porto atelier',
    excerpt:
      'A morning with the three people who cut, sew, and finish every BeyoneStyle piece.',
  },
  {
    slug: 'care-for-linen',
    date: '14 February 2026',
    title: 'How to care for linen',
    excerpt:
      'Wash less, air more, and let the creases stay. A short guide to ageing well.',
  },
];

export default function HomePage() {
  return (
    <main>
      <Marquee items={announcements} ariaLabel="Store announcements" />

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-14 md:py-20 lg:min-h-[min(78svh,800px)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-eyebrow text-ink-muted" data-reveal>
              Spring 2026 — Collection 01
            </p>
            <h1 className="text-display-xl mt-6 text-balance" data-reveal style={revealDelay(80)}>
              <ScrambleHover
                text={'Considered\nclothing,\nmade to last.'}
                scrambledClassName="text-ink-subtle"
              />
            </h1>
            <p
              className="text-body-lg text-ink-muted mt-8 max-w-xl"
              data-reveal
              style={revealDelay(160)}
            >
              A small wardrobe of natural fibres, precise cuts, and pieces made to be worn for
              years. Designed in Lisbon, cut and finished in Porto.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              data-reveal
              style={revealDelay(240)}
            >
              <Link href="/shop" className="button-primary">
                Shop the collection
              </Link>
              <Link
                href="/about"
                className="link-underline text-small text-ink-muted transition-fast hover:text-ink"
              >
                Inside the atelier
              </Link>
            </div>

            <dl
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
              data-reveal
              style={revealDelay(320)}
            >
              <div>
                <dt className="text-eyebrow text-ink-subtle">Pieces</dt>
                <dd className="nums mt-2 text-h3">04</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-ink-subtle">Fibres</dt>
                <dd className="nums mt-2 text-h3">100%</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-ink-subtle">Atelier</dt>
                <dd className="nums mt-2 text-h3">01</dd>
              </div>
            </dl>
          </div>

          <div
            className="relative mx-auto w-full max-w-[30rem] lg:mr-0"
            data-reveal
            style={revealDelay(200)}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted">
              <Image
                src={halterDress}
                alt="Model wearing the Sculpted Halter Dress in ivory with fine chain detailing"
                fill
                preload
                loading="eager"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-sm border border-white/10 bg-surface/85 p-4 backdrop-blur-sm">
                <div>
                  <p className="text-eyebrow text-ink-subtle">Look 01</p>
                  <p className="mt-1 text-body">Sculpted Halter Dress</p>
                </div>
                <p className="nums text-small text-ink-muted">{formatPrice(420)}</p>
              </div>
            </div>
            <p className="mt-4 text-small text-ink-subtle">
              Ivory viscose-linen · Hand-finished halter
            </p>
          </div>
        </div>
      </section>

      <Marquee items={categories} variant="category" speed={52} ariaLabel="Shop by category" />

      <section id="collection" className="scroll-mt-24 border-b border-border">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="text-eyebrow text-ink-subtle">Collection 01</p>
              <h2 className="text-h1 mt-3">The Spring Edit</h2>
            </div>
            <p className="text-body text-ink-muted max-w-sm">
              Four pieces, cut in limited numbers. Each one is made to order, so nothing is wasted
              and nothing is rushed.
            </p>
            <Link href="/shop" className="link-underline text-small text-ink-muted hover:text-ink">
              View all pieces
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={product.slug} data-reveal style={revealDelay(index * 80)}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[32rem] lg:mx-0" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted">
              <Image
                src={columnDress}
                alt="Model wearing the Column Maxi Dress in natural white linen"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="absolute -bottom-4 left-6 bg-surface px-3 py-1 text-eyebrow text-ink-subtle">
              Est. 2019 · Porto
            </p>
          </div>

          <div>
            <p className="text-eyebrow text-ink-subtle" data-reveal>
              Our approach
            </p>
            <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
              Fewer pieces.
              <br />
              Longer lives.
            </h2>
            <p
              className="text-body-lg text-ink-muted mt-6 max-w-xl"
              data-reveal
              style={revealDelay(120)}
            >
              We work with a single atelier in Porto, in runs of no more than forty. The cloth is
              chosen first, the cut second, and the details last. What remains is a wardrobe that
              earns its place.
            </p>

            <ol className="mt-10 border-t border-border">
              {principles.map((principle, index) => (
                <li
                  key={principle.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5"
                  data-reveal
                  style={revealDelay(160 + index * 60)}
                >
                  <span className="nums text-eyebrow text-ink-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-h3">{principle.title}</h3>
                    <p className="text-small text-ink-muted mt-1.5">{principle.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/about"
              className="link-underline mt-8 inline-block text-small text-ink-muted hover:text-ink"
              data-reveal
            >
              Read our standards
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7" data-reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-surface-sunken md:aspect-[16/10]">
                <Image
                  src={cloudDress}
                  alt="Model wearing the Cloud Cotton Mini in white against a rose backdrop"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <p className="text-eyebrow text-ink-subtle" data-reveal>
                Lookbook — No. 01
              </p>
              <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
                Light on linen.
              </h2>
              <p
                className="text-body-lg text-ink-muted mt-6"
                data-reveal
                style={revealDelay(120)}
              >
                The first collection is a study in white: chalk cotton, natural linen, ivory crepe.
                Cloth that catches the light without asking for attention.
              </p>
              <blockquote
                className="mt-8 border-l border-border-strong pl-5 text-body italic text-ink-muted"
                data-reveal
                style={revealDelay(180)}
              >
                “A dress should feel like the room, not the furniture.”
                <footer className="mt-3 not-italic text-small text-ink-subtle">
                  Inês Almeida, founder
                </footer>
              </blockquote>
              <Link
                href="/shop"
                className="link-underline mt-8 inline-block text-small text-ink-muted hover:text-ink"
                data-reveal
                style={revealDelay(240)}
              >
                Shop the linen edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-eyebrow text-ink-subtle" data-reveal>
                Atelier notes
              </p>
              <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
                Made slowly,
                <br />
                on purpose.
              </h2>
              <p
                className="text-body text-ink-muted mt-6 max-w-md"
                data-reveal
                style={revealDelay(120)}
              >
                Every piece begins on paper in Lisbon and ends on a table in Porto. Nothing is
                outsourced; nothing leaves the studio until it is right.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {process.map((step, index) => (
                <div key={step.title} data-reveal style={revealDelay(index * 80)}>
                  <p className="nums text-eyebrow text-ink-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-h3 mt-3">{step.title}</h3>
                  <p className="text-small text-ink-muted mt-2">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="text-eyebrow text-ink-subtle">Journal</p>
              <h2 className="text-h1 mt-3">Notes from the studio</h2>
            </div>
            <Link
              href="/journal"
              className="link-underline text-small text-ink-muted hover:text-ink"
            >
              All notes
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/journal#${note.slug}`}
                className="group flex flex-col justify-between gap-8 bg-surface p-6 transition-base hover:bg-surface-sunken md:p-8"
                data-reveal
                style={revealDelay(index * 80)}
              >
                <div>
                  <p className="text-eyebrow text-ink-subtle">{note.date}</p>
                  <h3 className="text-h3 mt-4">{note.title}</h3>
                  <p className="text-small text-ink-muted mt-3">{note.excerpt}</p>
                </div>
                <span className="text-small text-ink-subtle transition-fast group-hover:text-ink">
                  Read note →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell grid gap-8 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-eyebrow text-ink-subtle" data-reveal>
              By appointment
            </p>
            <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
              Try the collection
              <br />
              in the studio.
            </h2>
            <p
              className="text-body text-ink-muted mt-6 max-w-lg"
              data-reveal
              style={revealDelay(120)}
            >
              We keep a small fitting room in Lisbon and a workbench in Porto. Book an hour with us
              to see the cloth, check the fit, and meet the people who make it.
            </p>
          </div>
          <Link
            href="/care#contact"
            className="button-primary w-fit"
            data-reveal
            style={revealDelay(180)}
          >
            Book a private fitting
          </Link>
        </div>
      </section>
    </main>
  );
}
