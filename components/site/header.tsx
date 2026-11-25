'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Atelier' },
  { href: '/journal', label: 'Journal' },
  { href: '/care', label: 'Client care' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b backdrop-blur-md transition-base',
        scrolled ? 'border-border bg-surface/90' : 'border-transparent bg-surface/70',
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label="BeyoneStyle — home" className="group flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center border border-border-strong font-display text-sm transition-base group-hover:border-ink"
          >
            N
          </span>
          <span className="font-display text-lg tracking-[-0.03em]">BeyoneStyle</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'link-underline text-small transition-fast',
                  active ? 'text-ink' : 'text-ink-muted hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/care#contact" className="button-secondary px-4 py-2">
            Book a fitting
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-6 bg-ink transition-base',
                menuOpen && 'top-1/2 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-px w-6 bg-ink transition-base',
                menuOpen && 'bottom-1/2 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col py-6">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-border py-4 font-display text-2xl tracking-[-0.03em]"
              >
                <span>{item.label}</span>
                <span className="nums text-eyebrow text-ink-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
            <Link
              href="/care#contact"
              onClick={() => setMenuOpen(false)}
              className="button-primary mt-6"
            >
              Book a fitting
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
