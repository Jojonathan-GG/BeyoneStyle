import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type MarqueeVariant = 'announcement' | 'category';

export type MarqueeProps = {
  items: ReactNode[];
  variant?: MarqueeVariant;
  speed?: number;
  className?: string;
  ariaLabel?: string;
};

export function Marquee({ items, variant = 'announcement', speed = 38, className, ariaLabel }: MarqueeProps) {
  if (items.length === 0) return null;

  return (
    <section
      aria-label={ariaLabel}
      data-variant={variant}
      className={cn(
        'marquee',
        variant === 'announcement'
          ? 'bg-ink text-surface text-eyebrow font-medium'
          : 'border-y border-border bg-surface text-ink font-display text-lg tracking-[-0.02em]',
        className,
      )}
    >
      <div className="marquee-viewport">
        <div className="marquee-track" style={{ '--marquee-duration': `${speed}s` } as CSSProperties}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className="marquee-group"
              data-duplicate={group === 1 ? 'true' : 'false'}
              aria-hidden={group === 1 || undefined}
              inert={group === 1 || undefined}
            >
              {items.map((item, index) => (
                <div key={index} className="marquee-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
