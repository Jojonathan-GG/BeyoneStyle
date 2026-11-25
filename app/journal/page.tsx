import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { revealDelay } from '@/lib/utils';
import cloudDress from '@/img/istockphoto-1407656268-612x612.jpg';
import columnDress from '@/img/images.jpg';
import ivorySuit from '@/img/images (1).jpg';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Notes from the BeyoneStyle studio: on making fewer clothes, life inside the Porto atelier, and caring for natural fibres.',
};

const articles = [
  {
    slug: 'fewer-clothes',
    date: '12 March 2026',
    readingTime: '6 min read',
    title: 'The case for fewer clothes',
    excerpt:
      'Why a smaller wardrobe asks more of the maker — and gives more back to the wearer.',
    image: cloudDress,
    imageAlt: 'Model wearing the Cloud Cotton Mini in white against a rose backdrop',
    paragraphs: [
      'A wardrobe used to be a long-term project. You bought a coat, wore it for a decade, mended the lining, and eventually passed it on. Somewhere between fast fashion and the endless scroll, that patience became unfashionable.',
      'We are not interested in telling anyone how much clothing they should own. But we are interested in what happens when a piece is made to be kept. The pattern gets simpler. The cloth gets better. The details are chosen because they will still work in five years, not because they photograph well on a Tuesday.',
      'Making fewer things is harder than it sounds. It means saying no to a colour that will date, a trim that will tarnish, a cut that only works standing up. It means cutting after a customer reserves, rather than guessing demand and discounting the difference.',
      'The reward is a wardrobe that stops asking for attention. You reach for the same dress because it is right, not because it is new. That is the only kind of sustainability we trust: the kind that comes from wanting to keep something.',
    ],
    quote: 'The most sustainable piece is the one you still want to wear in ten years.',
  },
  {
    slug: 'porto-atelier',
    date: '28 February 2026',
    readingTime: '4 min read',
    title: 'Inside the Porto atelier',
    excerpt:
      'A morning with the three people who cut, sew, and finish every BeyoneStyle piece.',
    image: ivorySuit,
    imageAlt: 'Model wearing the Ivory Tailored Suit in the atelier',
    paragraphs: [
      'The atelier is on the second floor of a converted textile building, with tall windows and a table that has been repaired more often than the chairs around it. On a Tuesday morning, the room smells of steam and wool.',
      'Ana cuts. She has been cutting for twenty-six years, and she can tell from the sound of the shears whether a cloth is going to behave. Beside her, Joana sews the first sample of every new style. Nothing goes into production until she has worn it for a day.',
      'The third person is Miguel, who finishes. He turns hems, sets buttonholes, and attaches the fine chain detail on the halter dress by hand. It is slow work. He says the trick is to stop before you think you are finished.',
      'There is no production line. A piece moves from table to table, and the same three people see it through. When it is done, the maker writes their initials on the care card. It is a small thing, but it changes how you handle the cloth.',
    ],
    quote: 'We are not making a lot. We are making it properly.',
  },
  {
    slug: 'care-for-linen',
    date: '14 February 2026',
    readingTime: '3 min read',
    title: 'How to care for linen',
    excerpt:
      'Wash less, air more, and let the creases stay. A short guide to ageing well.',
    image: columnDress,
    imageAlt: 'Model wearing the Column Maxi Dress in natural linen',
    paragraphs: [
      'Linen is not delicate. It is one of the oldest fibres we have, and it gets better with use. The creases that appear after an hour in a chair are not a flaw; they are the cloth remembering where you have been.',
      'Wash it less than you think. Air a piece overnight after wearing it, and spot-clean small marks with cold water and a little soap. When it does need a wash, use a gentle cycle at 30°C with a mild detergent and no fabric softener.',
      'Dry it flat or on a line, away from direct sun. Tumble drying will break the fibres and shrink the weave. If you want a sharper finish, press it while still slightly damp, on the reverse, with a warm iron.',
      'Store folded rather than hung. Linen has a long memory, and a wire hanger will leave a shoulder mark that is difficult to press out. Give it room to breathe, and it will last for years.',
    ],
    quote: 'Let the creases stay. They are part of the record.',
  },
];

export default function JournalPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <p className="text-eyebrow text-ink-muted" data-reveal>
            Journal — Notes from the studio
          </p>
          <h1 className="text-display-xl mt-6 max-w-4xl text-balance" data-reveal style={revealDelay(60)}>
            Notes from the studio.
          </h1>
          <p className="text-body-lg text-ink-muted mt-8 max-w-xl" data-reveal style={revealDelay(120)}>
            Occasional writing on cloth, making, and the quiet work of keeping a wardrobe. No
            drops, no countdowns — just notes when we have something worth saying.
          </p>
        </div>
      </section>

      <div className="shell">
        {articles.map((article, index) => (
          <article
            key={article.slug}
            id={article.slug}
            className="scroll-mt-24 border-b border-border py-12 md:py-16"
          >
            <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
              <div data-reveal>
                <p className="text-eyebrow text-ink-subtle">{article.date}</p>
                <p className="mt-2 text-small text-ink-subtle">{article.readingTime}</p>
                <p className="nums mt-8 hidden text-eyebrow text-border-strong lg:block">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <div>
                <h2 className="text-h1 max-w-3xl" data-reveal style={revealDelay(60)}>
                  {article.title}
                </h2>
                <p
                  className="text-body-lg text-ink-muted mt-4 max-w-2xl"
                  data-reveal
                  style={revealDelay(100)}
                >
                  {article.excerpt}
                </p>

                <div
                  className="relative mt-8 aspect-[16/9] overflow-hidden rounded-md bg-surface-muted"
                  data-reveal
                  style={revealDelay(140)}
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 65vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:gap-10">
                  <div className="space-y-4 text-body text-ink-muted">
                    {article.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <blockquote className="border-l border-border-strong pl-5 text-body italic text-ink-muted">
                    {article.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section>
        <div className="shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-eyebrow text-ink-subtle" data-reveal>
              Continue
            </p>
            <h2 className="text-display-l mt-4" data-reveal style={revealDelay(60)}>
              See what we made.
            </h2>
            <p className="text-body text-ink-muted mt-6 max-w-lg" data-reveal style={revealDelay(120)}>
              Four pieces, cut to order in Porto. Natural fibres, precise lines, and a repair
              promise that outlasts the season.
            </p>
          </div>
          <Link
            href="/shop"
            className="button-primary w-fit"
            data-reveal
            style={revealDelay(180)}
          >
            Shop the collection
          </Link>
        </div>
      </section>
    </main>
  );
}
