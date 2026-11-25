import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="shell flex min-h-[70svh] flex-col justify-center py-20">
      <p className="text-eyebrow text-ink-muted" data-reveal>
        404 — Page not found
      </p>
      <h1 className="text-display-xl mt-6 max-w-3xl text-balance" data-reveal>
        This page has moved on.
      </h1>
      <p className="text-body-lg text-ink-muted mt-6 max-w-md" data-reveal>
        The piece you are looking for may have sold out, or the link may be older than the
        collection. The studio is still here.
      </p>
      <div className="mt-8 flex flex-wrap gap-4" data-reveal>
        <Link href="/" className="button-primary">
          Return home
        </Link>
        <Link href="/shop" className="button-secondary">
          Shop the collection
        </Link>
      </div>
    </main>
  );
}
