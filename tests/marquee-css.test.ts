import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const compact = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8').replace(/\s+/g, ' ');

describe('marquee css', () => {
  it('translates the track by exactly half for a seamless loop', () => {
    expect(compact).toContain('@keyframes marquee-scroll');
    expect(compact).toContain('translate3d(-50%, 0, 0)');
  });

  it('never pauses the loop on hover or focus', () => {
    expect(compact).not.toContain('animation-play-state: paused');
  });

  it('fades items at both edges of the viewport', () => {
    expect(compact).toContain(
      'mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
    );
  });

  it('fills wide 16:9 viewports so the loop never shows a gap', () => {
    expect(compact).toContain('justify-content: space-around;');
    expect(compact).toContain('min-width: 100vw;');
  });

  it('keeps items at full opacity and brightens a hovered item', () => {
    expect(compact).not.toContain('opacity: 0.55');
    expect(compact).toContain('.marquee-item:hover');
    expect(compact).toContain('text-shadow: 0 0 18px rgba(244, 244, 239, 0.45)');
  });

  it('falls back to a static, natively scrollable row for reduced motion', () => {
    expect(compact).toContain('.marquee-track { animation: none; transform: none; }');
    expect(compact).toContain('.marquee-group[data-duplicate="true"] { display: none; }');
  });
});
