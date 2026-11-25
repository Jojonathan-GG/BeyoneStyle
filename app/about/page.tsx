import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { revealDelay } from '@/lib/utils';
import cloudDress from '@/img/istockphoto-1407656268-612x612.jpg';
import columnDress from '@/img/images.jpg';
import ivorySuit from '@/img/images (1).jpg';

export const metadata: Metadata = {
  title: 'The atelier',
  description:
    'BeyoneStyle is a small atelier in Lisbon and Porto making considered clothing in natural fibres, in runs of forty.',
};

const principles = [
  {
    title: 'Cloth first',
    body: 'We choose the fibre before the silhouette. If the cloth will not age well, the piece does not happen.',
  },
  {
    title: 'One atelier',
    body: 'Every piece is cut, sewn, and finished in the same room in Porto. We know who made it.',
  },
  {
    title: 'Made to order',
    body: 'We cut after you reserve. There is no overstock, no landfill, and no end-of-season markdown.',
  },
  {
    title: 'Repairs for life',
    body: 'Free repairs for the life of the piece. We would rather mend a seam than sell you a replacement.',
  },
];

const process = [
  {
    title: 'Paper',
    body: 'The first pattern is drawn in Lisbon, by hand, from a single measurement and a clear idea of how the piece should fall.',
  },
  {
    title: 'Toile',
    body: 'A cotton toile is cut and fitted on a body, then adjusted until the line is quiet. Most pieces take three toiles.',
  },
  {
    title: 'Cloth',
    body: 'Linen from Guimarães, organic cotton from northern Portugal, wool crepe from Biella. Chosen for how they age.',
  },
  {
    title: 'Finish',
    body: 'Hems, buttonholes, and chain details are completed by one maker, who signs the care card that travels with the piece.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="shell grid gap-12 py-14 md:py-20 lg:min-h-[min(74svh,760px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-eyebrow text-ink-muted" data-reveal>
              The atelier — Est. 2019
            </p>
            <h1 className="text-display-xl mt-6 max-w-4xl text-balance" data-reveal style={revealDelay(60)}>
              Made slowly, in small numbers.
            </h1>
            <p
              className="text-body-lg text-ink-muted mt-8 max-w-xl"
              data-reveal
              style={revealDelay(120)}
            >
              BeyoneStyle began with a simple frustration: clothing that looked considered but was
              made in a hurry. We build the opposite.
            </p>
            <p className="text-body text-ink-muted mt-4 max-w-xl" data-reveal style={revealDelay(160)}>
              We are a small team in Lisbon and Porto, working with one atelier, three makers, and
              a short list of mills. We add a piece when it is ready, and keep it for as long as it
              earns its place.
            </p>
            <div className="mt-8" data-reveal style={revealDelay(200)}>
              <Link href="/shop" className="button-primary">
                See the collection
              </Link>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[30rem] lg:mr-0"
            data-reveal
            style={revealDelay(140)}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted">
              <Image
                src={ivorySuit}
                alt="Model wearing the Ivory Tailored Suit in the Porto atelier"
                fill
                preload
                loading="eager"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-small text-ink-subtle">
              The Ivory Tailored Suit, cut and finished in Porto.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[32rem] lg:mx-0" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted">
              <Image
                src={columnDress}
                alt="Model wearing the Column Maxi Dress in natural linen"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-eyebrow text-ink-subtle" data-reveal>
              Our story
            </p>
            <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
              A different pace.
            </h2>
            <div className="mt-6 space-y-4 text-body text-ink-muted" data-reveal style={revealDelay(120)}>
              <p>
                The label started in 2019 with four shirts and a rented table in Porto. Inês
                Almeida, a pattern cutter, had spent a decade watching beautiful clothes leave
                factories with half their life already designed out.
              </p>
              <p>
                She wanted to make the opposite: fewer pieces, better cloth, and a pattern that
                could be repaired rather than replaced. The first collection was sold from a
                single rail in a friend&apos;s bookshop. It sold out in a week.
              </p>
              <p>
                Today we still work in small runs. We do not release seasonal drops, and we do not
                make anything we would not wear ourselves.
              </p>
            </div>
            <blockquote
              className="mt-8 border-l border-border-strong pl-5 text-body italic text-ink-muted"
              data-reveal
              style={revealDelay(180)}
            >
              “The best clothes are the ones you stop noticing. They just keep being right.”
              <footer className="mt-3 not-italic text-small text-ink-subtle">
                Inês Almeida, founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="text-eyebrow text-ink-subtle">What we stand for</p>
              <h2 className="text-h1 mt-3">Four rules.</h2>
            </div>
            <p className="text-small text-ink-subtle">Nothing else makes the cut.</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-surface p-6 md:p-8"
                data-reveal
                style={revealDelay(index * 70)}
              >
                <p className="nums text-eyebrow text-ink-subtle">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-h3 mt-4">{principle.title}</h3>
                <p className="text-small text-ink-muted mt-2">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-b border-border">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-eyebrow text-ink-subtle" data-reveal>
                How we make
              </p>
              <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
                From paper
                <br />
                to Porto.
              </h2>
              <p className="text-body text-ink-muted mt-6 max-w-md" data-reveal style={revealDelay(120)}>
                Four stages, one room, and no shortcuts. A piece takes between three and six weeks
                from first pattern to final press.
              </p>
            </div>

            <ol className="border-t border-border">
              {process.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6"
                  data-reveal
                  style={revealDelay(index * 70)}
                >
                  <span className="nums text-eyebrow text-ink-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-h3">{step.title}</h3>
                    <p className="text-small text-ink-muted mt-2 max-w-lg">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="lookbook" className="scroll-mt-24 border-b border-border bg-surface-muted">
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
              <p className="text-body-lg text-ink-muted mt-6" data-reveal style={revealDelay(120)}>
                Photographed in the late afternoon at the studio, on the people who make the
                clothes. No styling tricks, no hidden pins.
              </p>
              <Link
                href="/shop"
                className="link-underline mt-8 inline-block text-small text-ink-muted hover:text-ink"
                data-reveal
                style={revealDelay(180)}
              >
                Shop the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell grid gap-8 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-eyebrow text-ink-subtle" data-reveal>
              Visit us
            </p>
            <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
              The studio door
              <br />
              is usually open.
            </h2>
            <p className="text-body text-ink-muted mt-6 max-w-lg" data-reveal style={revealDelay(120)}>
              Rua da Boavista 84, Lisbon. Tuesday to Friday, 10am–6pm. Fittings by appointment;
              coffee always on.
            </p>
          </div>
          <Link
            href="/care#contact"
            className="button-primary w-fit"
            data-reveal
            style={revealDelay(180)}
          >
            Book a visit
          </Link>
        </div>
      </section>
    </main>
  );
}
