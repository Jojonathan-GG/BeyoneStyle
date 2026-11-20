import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BackToTop } from '@/components/ui/back-to-top';

const scrollTo = vi.fn();

beforeEach(() => {
  scrollTo.mockReset();
  vi.stubGlobal('scrollTo', scrollTo);
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('BackToTop', () => {
  it('scrolls to the top smoothly', () => {
    render(<BackToTop />);

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('jumps without smooth motion when reduced motion is requested', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    render(<BackToTop />);

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
