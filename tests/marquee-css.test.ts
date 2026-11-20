import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const compact = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8').replace(/\s+/g, ' ');

describe('marquee css', () => {
  it('translates the track by exactly half for a seamless loop', () => {
    expect(compact).toContain('@keyframes marquee-scroll');
    expect(compact).toContain('translate3d(-50%, 0, 0)');
  });

  it('pauses on hover and keyboard focus', () => {
    expect(compact).toContain('.marquee:hover .marquee-track');
    expect(compact).toContain('.marquee:focus-within .marquee-track');
    expect(compact).toContain('animation-play-state: paused');
  });

  it('falls back to a static, natively scrollable row for reduced motion', () => {
    expect(compact).toContain('.marquee-track { animation: none; transform: none; }');
    expect(compact).toContain('.marquee-group[data-duplicate="true"] { display: none; }');
  });
});
