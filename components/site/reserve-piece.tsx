'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

export function ReservePiece({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const subject = encodeURIComponent(
    `Reserve — ${product.name}${size ? ` (Size ${size})` : ''}`,
  );
  const href = `mailto:studio@beyonestyle.com?subject=${subject}`;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-eyebrow text-ink-subtle">Size</p>
        <a href="/care#size-guide" className="link-underline text-small text-ink-muted">
          Size guide
        </a>
      </div>

      <div role="group" aria-label="Select a size" className="mt-3 grid grid-cols-4 gap-2">
        {product.sizes.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={size === option}
            onClick={() => {
              setSize(option);
              setNotice(null);
            }}
            className={cn(
              'border py-3 text-small transition-base',
              size === option
                ? 'border-ink bg-ink text-surface'
                : 'border-border-strong text-ink hover:border-ink',
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <a
        href={size ? href : '#'}
        aria-disabled={!size}
        onClick={(event) => {
          if (!size) {
            event.preventDefault();
            setNotice('Choose a size to reserve this piece.');
          }
        }}
        className={cn('button-primary mt-4 w-full', !size && 'opacity-60')}
      >
        {size ? `Reserve — size ${size}` : 'Reserve this piece'}
      </a>

      <p role="status" className="mt-3 text-small text-ink-subtle">
        {notice ??
          'Made to order in 2–3 weeks. We confirm fit and delivery by email before cutting.'}
      </p>
    </div>
  );
}
