import Link from 'next/link';

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  return (
    <main>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <p className="text-eyebrow text-ink-muted" data-reveal>
            {eyebrow}
          </p>
          <h1 className="text-display-xl mt-6 max-w-4xl text-balance" data-reveal>
            {title}
          </h1>
          <p className="text-body-lg text-ink-muted mt-8 max-w-xl" data-reveal>
            {intro}
          </p>
          <p className="mt-4 text-small text-ink-subtle" data-reveal>
            Last updated {updated}
          </p>
        </div>
      </section>

      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-eyebrow text-ink-subtle">On this page</p>
            <ul className="mt-4 space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="link-underline text-small text-ink-muted hover:text-ink"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-h3">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-body text-ink-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <p className="border-t border-border pt-6 text-small text-ink-subtle">
              Questions? Write to{' '}
              <a href="mailto:studio@beyonestyle.com" className="link-underline text-ink-muted hover:text-ink">
                studio@beyonestyle.com
              </a>{' '}
              or read our{' '}
              <Link href="/care" className="link-underline text-ink-muted hover:text-ink">
                client care page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
