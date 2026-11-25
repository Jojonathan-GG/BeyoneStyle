import type { CSSProperties } from 'react';

export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}

export function revealDelay(delay = 0): CSSProperties {
  return { '--reveal-delay': `${delay}ms` } as CSSProperties;
}
