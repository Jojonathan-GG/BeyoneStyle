import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { BrandMark } from '@/components/site/brand-mark';

afterEach(() => {
  cleanup();
});

describe('BrandMark', () => {
  it('shows the monogram alongside the wordmark', () => {
    const { container } = render(<BrandMark />);

    const mark = container.querySelector('img');
    expect(mark).not.toBeNull();
    expect(mark?.getAttribute('src')).toContain('bs-monogram');
    expect(screen.getByText('BeyoneStyle')).toBeTruthy();
  });

  it('keeps the monogram decorative so it never doubles the label', () => {
    const { container } = render(<BrandMark />);

    const mark = container.querySelector('img');
    expect(mark?.getAttribute('alt')).toBe('');
    expect(mark?.getAttribute('aria-hidden')).toBe('true');
  });

  it('can render the monogram on its own', () => {
    const { container } = render(<BrandMark showWordmark={false} />);

    expect(screen.queryByText('BeyoneStyle')).toBeNull();
    expect(container.querySelector('img')).not.toBeNull();
  });
});
