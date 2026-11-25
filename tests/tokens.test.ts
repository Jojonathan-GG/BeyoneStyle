import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const compact = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8').replace(/\s+/g, ' ');

describe('design tokens', () => {
  it.each([
    ['--color-surface', '#0d0d0d'],
    ['--color-surface-muted', '#141413'],
    ['--color-surface-sunken', '#1b1b19'],
    ['--color-ink', '#f4f4ef'],
    ['--color-ink-muted', '#a6a69c'],
    ['--color-ink-subtle', '#8a8a82'],
    ['--color-border', '#2a2a25'],
    ['--color-border-strong', '#3d3d36'],
    ['--color-accent', '#f4f4ef'],
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

  it('defines the editorial link, button, field, and accordion primitives', () => {
    for (const name of [
      '.link-underline',
      '.button-primary',
      '.button-secondary',
      '.field',
      '.accordion summary',
    ]) {
      expect(compact).toContain(name);
    }
  });

  it('defines a centered 16:9-friendly page shell', () => {
    expect(compact).toContain('max-width: 90rem;');
    expect(compact).toContain('margin-inline: auto;');
  });

  it('defines the scroll-reveal styles', () => {
    expect(compact).toContain('@media (scripting: enabled)');
    expect(compact).toContain('[data-reveal].is-revealed');
    expect(compact).toContain('[data-reveal][data-revealed="immediate"]');
  });

  it('animates the individual scale property used by Tailwind v4', () => {
    expect(compact).toContain(
      'transition-property: color, background-color, border-color, opacity, transform, translate, scale, rotate, box-shadow;',
    );
  });

  it('disables transitions under prefers-reduced-motion', () => {
    expect(compact).toContain('@media (prefers-reduced-motion: reduce)');
    expect(compact).toContain('transition-duration: 0.01ms !important');
  });
});
