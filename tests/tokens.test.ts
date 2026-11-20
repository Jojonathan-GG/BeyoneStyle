import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const compact = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8').replace(/\s+/g, ' ');

describe('design tokens', () => {
  it.each([
    ['--color-surface', '#ffffff'],
    ['--color-surface-muted', '#f7f7f4'],
    ['--color-surface-sunken', '#efefea'],
    ['--color-ink', '#111110'],
    ['--color-ink-muted', '#5c5c56'],
    ['--color-ink-subtle', '#8a8a82'],
    ['--color-border', '#e4e4dd'],
    ['--color-border-strong', '#cfcfc6'],
    ['--color-accent', '#111110'],
    ['--radius-sm', '4px'],
    ['--radius-md', '8px'],
    ['--radius-lg', '14px'],
    ['--duration-fast', '150ms'],
    ['--duration-base', '250ms'],
    ['--duration-slow', '400ms'],
    ['--ease-out', 'cubic-bezier(0.22, 1, 0.36, 1)'],
    ['--ease-in-out', 'cubic-bezier(0.65, 0, 0.35, 1)'],
  ])('%s is %s', (name, value) => {
    expect(compact).toContain(`${name}: ${value};`);
  });

  it('wires display and body fonts to the next/font variables', () => {
    expect(compact).toContain('--font-display: var(--font-jakarta)');
    expect(compact).toContain('--font-sans: var(--font-inter)');
  });

  it('defines the type scale and motion utilities', () => {
    for (const name of [
      'text-display-xl',
      'text-display-l',
      'text-h1',
      'text-h2',
      'text-h3',
      'text-body-lg',
      'text-body',
      'text-small',
      'text-eyebrow',
      'nums',
      'transition-fast',
      'transition-base',
      'transition-slow',
    ]) {
      expect(compact).toContain(`@utility ${name}`);
    }
  });

  it('uses tabular lining numerals for prices', () => {
    expect(compact).toContain('font-variant-numeric: tabular-nums lining-nums;');
  });

  it('disables transitions under prefers-reduced-motion', () => {
    expect(compact).toContain('@media (prefers-reduced-motion: reduce)');
    expect(compact).toContain('transition-duration: 0.01ms !important');
  });
});
