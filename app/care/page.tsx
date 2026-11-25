import type { Metadata } from 'next';
import Link from 'next/link';
import { revealDelay } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Client care',
  description:
    'Shipping, returns, sizing, repairs, and studio contact for BeyoneStyle made-to-order clothing.',
};

const sizeGuide = [
  { size: 'XS', bust: '80–84', waist: '62–66', hip: '88–92' },
  { size: 'S', bust: '85–89', waist: '67–71', hip: '93–97' },
  { size: 'M', bust: '90–94', waist: '72–76', hip: '98–102' },
  { size: 'L', bust: '95–100', waist: '77–82', hip: '103–108' },
];

const faqs = [
  {
    question: 'How do I know my size?',
    answer:
      'Measure your bust, waist, and hip against the guide above. Our pieces run true to size with a relaxed line. If you are between sizes, take the smaller. We are happy to advise by email before you reserve.',
  },
  {
    question: 'Can I change or cancel an order?',
    answer:
      'Yes, within 24 hours of reserving, before the cloth is cut. Write to studio@beyonestyle.com with your name and the piece you reserved.',
  },
  {
    question: 'Do you offer alterations?',
    answer:
      'Yes. Jacket sleeves, trouser hems, and dress straps can be adjusted in the Lisbon studio. Allow an extra week and mention it when you book your fitting.',
  },
  {
    question: 'Is the packaging recyclable?',
    answer:
      'Everything except the courier label is paper, card, or recycled tissue. The garment bag is compostable and the box is designed to be reused for returns.',
  },
];

export default function CarePage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <p className="text-eyebrow text-ink-muted" data-reveal>
            Client care
          </p>
          <h1 className="text-display-xl mt-6 max-w-4xl text-balance" data-reveal style={revealDelay(60)}>
            Care, from the first fitting to the tenth repair.
          </h1>
          <p className="text-body-lg text-ink-muted mt-8 max-w-xl" data-reveal style={revealDelay(120)}>
            Everything you need to know about receiving, wearing, and keeping a BeyoneStyle piece.
            If something is not covered here, write to us — a person will answer.
          </p>
        </div>
      </section>

      <div className="shell">
        <section id="shipping" className="scroll-mt-24 border-b border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">01</p>
              <h2 className="text-h2 mt-3">Shipping</h2>
            </div>
            <div className="space-y-4 text-body text-ink-muted" data-reveal style={revealDelay(60)}>
              <p>
                Complimentary carbon-neutral delivery on orders over $150. Below that, shipping is
                a flat $12. We ship to the EU, UK, US, Canada, Australia, and Japan; duties are
                calculated at checkout.
              </p>
              <p>
                Made-to-order pieces are cut after you reserve and leave the atelier in two to
                three weeks. You will receive a note from us when the piece is on its way, with a
                tracking link and the name of the maker who finished it.
              </p>
              <p>
                Orders placed in Lisbon can be collected from the studio, Tuesday to Friday,
                10am–6pm.
              </p>
            </div>
          </div>
        </section>

        <section id="returns" className="scroll-mt-24 border-b border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">02</p>
              <h2 className="text-h2 mt-3">Returns & exchanges</h2>
            </div>
            <div className="space-y-4 text-body text-ink-muted" data-reveal style={revealDelay(60)}>
              <p>
                You have 30 days from delivery to return an unworn piece in its original condition.
                Returns are free within the EU; outside the EU, return shipping is the customer&apos;s
                responsibility.
              </p>
              <p>
                Made-to-order pieces can be exchanged or returned for store credit. Pieces altered
                in the studio are final sale, as they have been cut to your measurements.
              </p>
              <p>
                To start a return, email studio@beyonestyle.com with your order number and the piece
                you would like to send back. We will send a prepaid label where applicable.
              </p>
            </div>
          </div>
        </section>

        <section id="size-guide" className="scroll-mt-24 border-b border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">03</p>
              <h2 className="text-h2 mt-3">Size guide</h2>
            </div>
            <div data-reveal style={revealDelay(60)}>
              <p className="text-body text-ink-muted">
                Measurements are body measurements in centimetres, not garment measurements. Our
                pieces are cut with ease; if you are between sizes, take the smaller.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left">
                  <caption className="sr-only">BeyoneStyle size guide in centimetres</caption>
                  <thead>
                    <tr className="border-y border-border text-eyebrow text-ink-subtle">
                      <th scope="col" className="py-3 pr-4 font-medium">Size</th>
                      <th scope="col" className="py-3 pr-4 font-medium">Bust</th>
                      <th scope="col" className="py-3 pr-4 font-medium">Waist</th>
                      <th scope="col" className="py-3 font-medium">Hip</th>
                    </tr>
                  </thead>
                  <tbody className="text-body text-ink-muted">
                    {sizeGuide.map((row) => (
                      <tr key={row.size} className="border-b border-border">
                        <th scope="row" className="nums py-4 pr-4 font-medium text-ink">
                          {row.size}
                        </th>
                        <td className="nums py-4 pr-4">{row.bust}</td>
                        <td className="nums py-4 pr-4">{row.waist}</td>
                        <td className="nums py-4">{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-small text-ink-subtle">
                Model measurements: 178cm, bust 84cm, waist 66cm, hip 92cm — wearing size S.
              </p>
            </div>
          </div>
        </section>

        <section id="repairs" className="scroll-mt-24 border-b border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">04</p>
              <h2 className="text-h2 mt-3">Repairs</h2>
            </div>
            <div className="space-y-4 text-body text-ink-muted" data-reveal style={revealDelay(60)}>
              <p>
                Free repairs for the life of the piece, including hems, seams, buttonholes, and the
                chain detail on the halter dress. Wear is not a failure; it is the point of owning
                something for a long time.
              </p>
              <p>
                Email studio@beyonestyle.com with a photograph and a short description. We will
                confirm whether the repair can be done by post or in the studio, and return the
                piece within two to three weeks.
              </p>
              <p>
                If the cloth has worn through, we will tell you honestly. Where possible, we patch
                with a matching remnant from the same dye lot.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">05</p>
              <h2 className="text-h2 mt-3">Contact</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2" data-reveal style={revealDelay(60)}>
              <div>
                <p className="text-eyebrow text-ink-subtle">Write</p>
                <a
                  href="mailto:studio@beyonestyle.com"
                  className="link-underline mt-3 inline-block text-body"
                >
                  studio@beyonestyle.com
                </a>
                <p className="mt-4 text-small text-ink-muted">
                  We answer within one working day, Monday to Friday.
                </p>
              </div>
              <div>
                <p className="text-eyebrow text-ink-subtle">Visit</p>
                <p className="mt-3 text-body text-ink-muted">
                  Rua da Boavista 84
                  <br />
                  1200-068 Lisbon
                  <br />
                  Portugal
                </p>
                <p className="mt-4 text-small text-ink-muted">
                  Tuesday–Friday, 10am–6pm. Fittings by appointment.
                </p>
              </div>
              <div>
                <p className="text-eyebrow text-ink-subtle">Call</p>
                <a href="tel:+351210000000" className="link-underline mt-3 inline-block text-body">
                  +351 21 000 0000
                </a>
                <p className="mt-4 text-small text-ink-muted">Tuesday–Friday, 10am–5pm.</p>
              </div>
              <div>
                <p className="text-eyebrow text-ink-subtle">Fittings</p>
                <a
                  href="mailto:studio@beyonestyle.com?subject=Private%20fitting"
                  className="button-secondary mt-3"
                >
                  Book an appointment
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="text-eyebrow text-ink-subtle">Questions</p>
              <h2 className="text-h2 mt-3">A few answers.</h2>
            </div>
            <div className="border-t border-border" data-reveal style={revealDelay(60)}>
              {faqs.map((faq) => (
                <details key={faq.question} className="accordion group border-b border-border py-5">
                  <summary className="flex items-center justify-between gap-4">
                    <span className="text-h3">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-xl font-light text-ink-subtle transition-base group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-body text-ink-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="border-t border-border">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-10">
          <p className="text-small text-ink-subtle">
            Still unsure? Read the{' '}
            <Link href="/about" className="link-underline text-ink-muted hover:text-ink">
              story behind the atelier
            </Link>
            .
          </p>
          <Link href="/shop" className="button-primary">
            Shop the collection
          </Link>
        </div>
      </section>
    </main>
  );
}
