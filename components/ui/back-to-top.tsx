'use client';

export function BackToTop() {
  function handleClick() {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-50 flex size-12 items-center justify-center rounded-full border border-border bg-surface-muted font-display text-lg text-ink shadow-soft transition-base hover:scale-110 hover:border-border-strong"
    >
      N
    </button>
  );
}
